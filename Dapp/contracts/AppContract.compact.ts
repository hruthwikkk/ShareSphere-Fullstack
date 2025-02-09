// contracts/AppContract.compact.ts
// This sample contract manages user registrations, listings, requests, and notifications.
// (This is a simplified pseudo-code example.)

contract AppContract {
    // Define types
    type Request = {
      id: number;
      title: string;
      description: string;
      status: string; // "pending", "accepted", "rejected", "withdrawn"
      requester: address;
    };
  
    type Listing = {
      id: number;
      category: string;
      title: string;
      description: string;
      status: string; // "active", "accepted", "completed"
      incomingRequests: Request[];
    };
  
    type User = {
      name: string;
      age: number;
      email: string;
      phone: string;
      helpedCount: number;
      points: number;
      activeRequests: Request[];
      listings: Listing[];
    };
  
    // Mapping from user address to User data.
    var users: Map<address, User>;
  
    // Register a new user. Enforces that email must end with ".edu".
    public function registerUser(name: string, age: number, email: string, phone: string) public {
      require(endsWith(email, ".edu"), "Email must be a university email");
      let newUser: User = {
        name: name,
        age: age,
        email: email,
        phone: phone,
        helpedCount: 0,
        points: 0,
        activeRequests: [],
        listings: []
      };
      users[msg.sender] = newUser;
    }
  
    // Post a new listing (for items, study buddy, hobbies, or housing info).
    public function postListing(category: string, title: string, description: string) public {
      let user = users[msg.sender];
      require(user != null, "User not registered");
      let listing: Listing = {
        id: generateId(),
        category: category,
        title: title,
        description: description,
        status: "active",
        incomingRequests: []
      };
      user.listings.push(listing);
    }
  
    // Make a request (this example adds the request to the caller’s activeRequests).
    public function makeRequest(listingId: number, title: string, description: string) public {
      let user = users[msg.sender];
      require(user != null, "User not registered");
      let request: Request = {
        id: generateId(),
        title: title,
        description: description,
        status: "pending",
        requester: msg.sender
      };
      user.activeRequests.push(request);
      // In a full implementation you would also add the request to the listing’s incomingRequests.
    }
  
// Accept a request: update its status to "accepted", add points to the listing owner,
  // and update the corresponding request in the requester's activeRequests.
  public function acceptRequest(listingId: number, requestId: number) public {
    // Ensure caller is registered.
    let listingOwner = users[msg.sender];
    require(listingOwner != null, "User not registered");

    // Find the listing with the given listingId in the caller’s listings.
    let foundListing = null;
    for (let i = 0; i < listingOwner.listings.length; i++) {
      if (listingOwner.listings[i].id == listingId) {
        foundListing = listingOwner.listings[i];
        break;
      }
    }
    require(foundListing != null, "Listing not found");

    // Locate the request within the listing’s incomingRequests.
    let foundRequest = null;
    for (let j = 0; j < foundListing.incomingRequests.length; j++) {
      if (foundListing.incomingRequests[j].id == requestId) {
        foundRequest = foundListing.incomingRequests[j];
        break;
      }
    }
    require(foundRequest != null, "Request not found");

    // Update request status to "accepted".
    foundRequest.status = "accepted";

    // Adjust points: award, for example, +10 points to the listing owner.
    listingOwner.points += 10;

    // Also update the requester's activeRequests.
    let requesterUser = users[foundRequest.requester];
    if (requesterUser != null) {
      for (let k = 0; k < requesterUser.activeRequests.length; k++) {
        if (requesterUser.activeRequests[k].id == requestId) {
          requesterUser.activeRequests[k].status = "accepted";
          break;
        }
      }
    }
  }

  // Reject a request: update its status to "rejected" in both the listing and the requester’s records.
  public function rejectRequest(listingId: number, requestId: number) public {
    let listingOwner = users[msg.sender];
    require(listingOwner != null, "User not registered");

    // Find the listing.
    let foundListing = null;
    for (let i = 0; i < listingOwner.listings.length; i++) {
      if (listingOwner.listings[i].id == listingId) {
        foundListing = listingOwner.listings[i];
        break;
      }
    }
    require(foundListing != null, "Listing not found");

    // Find the index of the request in the listing’s incomingRequests.
    let foundIndex = -1;
    for (let j = 0; j < foundListing.incomingRequests.length; j++) {
      if (foundListing.incomingRequests[j].id == requestId) {
        foundIndex = j;
        break;
      }
    }
    require(foundIndex >= 0, "Request not found");

    // Update request status to "rejected".
    foundListing.incomingRequests[foundIndex].status = "rejected";

    // Also update the requester’s activeRequests.
    let requesterUser = users[foundListing.incomingRequests[foundIndex].requester];
    if (requesterUser != null) {
      for (let k = 0; k < requesterUser.activeRequests.length; k++) {
        if (requesterUser.activeRequests[k].id == requestId) {
          requesterUser.activeRequests[k].status = "rejected";
          break;
        }
      }
    }
  }

  // Complete a request: mark it "completed", increase helpedCount,
  // add extra points, and update the requester's record.
  public function completeRequest(listingId: number, requestId: number) public {
    let listingOwner = users[msg.sender];
    require(listingOwner != null, "User not registered");

    // Find the listing.
    let foundListing = null;
    for (let i = 0; i < listingOwner.listings.length; i++) {
      if (listingOwner.listings[i].id == listingId) {
        foundListing = listingOwner.listings[i];
        break;
      }
    }
    require(foundListing != null, "Listing not found");

    // Locate the request.
    let foundRequest = null;
    for (let j = 0; j < foundListing.incomingRequests.length; j++) {
      if (foundListing.incomingRequests[j].id == requestId) {
        foundRequest = foundListing.incomingRequests[j];
        break;
      }
    }
    require(foundRequest != null, "Request not found");
    // Ensure the request was accepted before completing.
    require(foundRequest.status == "accepted", "Request must be accepted first");

    // Mark the request as completed.
    foundRequest.status = "completed";

    // Increase the listing owner's helpedCount and award additional points (e.g., +5).
    listingOwner.helpedCount += 1;
    listingOwner.points += 5;

    // Also update the corresponding request in the requester's activeRequests.
    let requesterUser = users[foundRequest.requester];
    if (requesterUser != null) {
      for (let k = 0; k < requesterUser.activeRequests.length; k++) {
        if (requesterUser.activeRequests[k].id == requestId) {
          requesterUser.activeRequests[k].status = "completed";
          break;
        }
      }
    }
  }

  // --- Utility Functions ---

  // Generate an ID (for demo purposes using the block timestamp).
  private function generateId() private returns (number) {
    return block.timestamp;
  }

  // Check if a string ends with a given suffix.
  private function endsWith(str: string, suffix: string) private returns (bool) {
    return str.slice(-suffix.length) == suffix;
  }
}
  