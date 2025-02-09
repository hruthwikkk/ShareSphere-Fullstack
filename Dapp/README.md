# spherespaces-dapp

A decentralized application (dApp) that allows users to post items or services, request help in various categories (e.g., study buddy, hobbies, housing info), and track how many people they've helped. This project includes both a React-based frontend and a simple smart contract written in pseudo-code.

## Overview

- **User Registration:** Users sign up with a university email (must end in `.edu`).
- **Listings:** Registered users can post listings for items, study buddies, hobbies, or housing info.
- **Requests:** Users can make requests based on existing listings.
- **Notifications & Profile:** Users can view active requests, notifications, and manage their listings.
- **Smart Contract:** The contract ([contracts/AppContract.compact.ts](contracts/AppContract.compact.ts)) manages user registration, listings, and request operations.

## Project Structure

```
contracts/
└─ AppContract.compact.ts // Smart contract pseudo-code for user and listing management
package.json // Project configuration and scripts
README.md // This file
src/
├─ App.tsx // Main application component
├─ components/
│ ├─ LandingPage.tsx // The landing page
│ ├─ SignupLoginPage.tsx // User signup and login
│ ├─ HomePage.tsx // User home page
│ ├─ RequestPage.tsx // Request page
│ ├─ RequestCategoryPage.tsx // Request by category
│ ├─ AddPage.tsx // Page to select a posting category
│ ├─ AddCategoryPage.tsx // Posting a listing in a given category
│ ├─ ProfilePage.tsx // User profile and listings
│ ├─ NotificationsPage.tsx // User notifications
│ ├─ ServePage.tsx // Page for serving requests
│ └─ Navbar.tsx // Navigation bar component
└─ index.tsx // Bootstraps the application
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org) (v12 or above)
- npm (comes with Node.js) or yarn

### Installation

1. Clone the repository:

    ```sh
    git clone https://github.com/your-username/spherespaces-dapp.git
    cd spherespaces-dapp
    ```

2. Install dependencies:

    ```sh
    npm install
    ```

3. Running the App

    To run the development server:

    ```sh
    npm start
    ```

4. To build the production bundle:

    ```sh
    npm run build
    ```

5. To run tests:

    ```sh
    npm test
    ```

## Smart Contract Overview

The smart contract located in `AppContract.compact.ts` is a simplified pseudo-code example that:

- Registers new users (with email validation for .edu addresses).
- Allows posting and managing listings.
- Handles requests, including accepting, rejecting, and completing them.
- Awards points and updates user statistics based on interactions.

## Contributing

Contributions are welcome! Please fork this repository and submit pull requests.