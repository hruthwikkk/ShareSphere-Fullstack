# ShareSphere Fullstack

A full-stack application that spans three main areas:

- **Frontend:** A React/Next.js application for users to browse, post, and interact.
- **Backend:** A Java/Maven-based API and services.
- **Dapp:** A decentralized application (dApp) featuring a smart contract for user registration and listing management.

## Table of Contents

- [Overview](#overview)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
    - [Frontend](#frontend)
    - [Backend](#backend)
    - [Dapp](#dapp)
- [Contributing](#contributing)
- [License](#license)

## Overview

ShareSphere Fullstack is a complete application that allows users to:
- Register using university emails.
- Post listings for items, study buddies, hobbies, or housing information.
- Make and respond to requests.
- Interact with a smart contract that manages core operations like registration, posting, and request tracking.

The project is divided into three sections:
- The **Frontend** uses React/Next.js and Tailwind CSS for a responsive, dynamic UI.
- The **Backend** is built with Java (Maven) and provides robust API services.
- The **Dapp** integrates a smart contract (pseudo-code in [contracts/AppContract.compact.ts](Dapp/contracts/AppContract.compact.ts)) that handles decentralized operations.

## Project Structure

```
ShareSphere-Fullstack/
├─ backend/
│  ├─ .mvn/
│  ├─ mvnw, mvnw.cmd
│  ├─ pom.xml
│  ├─ ShareSphere.postman_collection.json
│  ├─ src/ (Java source files)
│  └─ target/ (Compiled classes)
├─ Dapp/
│  ├─ contracts/ (Smart Contract and config files)
│  ├─ package.json
│  ├─ README.md
│  └─ src/ (dApp source files)
├─ frontend/
│  ├─ app/
│  ├─ components/ (Categories.tsx)
│  ├─ data/
│  ├─ hooks/
│  ├─ pages/
│  ├─ public/
│  ├─ package.json
│  ├─ README.md
│  └─ ... (other config files)
└─ README.md (this file)
```

## Getting Started

### Frontend

1. Navigate to the `frontend` directory:
     ```sh
     cd frontend
     npm install
     npm run dev
     ```
2. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Backend

1. Navigate to the `backend` directory:
     ```sh
     cd backend
     ./mvnw clean install
     ./mvnw spring-boot:run
     ```

### Dapp

1. Navigate to the `Dapp` directory:
     ```sh
     cd Dapp
     npm install
     npm start
     ```

## Contributing

Contributions are welcome! Please see the individual README files in the frontend, backend, and Dapp directories for specific guidelines.
