The Royal Bank of Flatiron
A professional React-based banking application designed to help users track their expenditures efficiently. This project provides a robust interface for submitting new transactions, searching through recent history, and sorting data based on categories or descriptions.

Features
Real-time Transaction Tracking: Automatically fetches and displays a list of all transactions upon startup from a backend server.

Dynamic Search: Filter through your transaction history instantly by entering keywords in the search bar.

Transaction Sorting: Organize your data by sorting transactions alphabetically by description or category.

Expenditure Submission: A dedicated form allows for the seamless addition of new transactions, including date, description, category, and amount.

Comprehensive Testing Suite: Built-in test suites using Vitest ensure reliable functionality for core features like displaying, adding, and filtering data.

Technologies Used
React 19: Frontend library for building the user interface.

Vite 6: Next-generation frontend tooling for fast development and builds.

Vitest 3: A Vite-native testing framework used for the application's test suites.

JSON Server: Used as a mock backend to persist and retrieve transaction data via a RESTful API.

Semantic UI: Utilized for providing a raised, clean, and professional layout.

Getting Started
Prerequisites
Node.js: Ensure you have a modern version of Node.js installed.

npm: Package manager for installing dependencies.

Installation
Clone the Repository:

Bash
git clone <repository-link>
Install Dependencies:
Navigate to the project directory and run:

Bash
npm install
Running the Application
To fully utilize the application, you must run both the frontend and the mock backend server:

Start the Backend Server:
The server runs on port 6001 by default to avoid conflicts.

Bash
npm run server
Start the Frontend Development Server:
In a separate terminal tab, launch the Vite dev server:

Bash
npm run dev
Testing
This project emphasizes test-driven development (TDD) principles. To execute the Vitest suite and verify application behavior:

Bash
npm test
The test suite covers:

Initial data display on load.

Successful addition of new transactions and corresponding POST requests.

Correct page updates during search and sort events.

Project Structure
src/components/AccountContainer.jsx: The main logic hub handling state, API calls, filtering, and sorting.

src/components/AddTransactionForm.jsx: Handles user input for new expenditures.

src/components/TransactionsList.jsx: Renders the table of sorted and filtered transaction data.

db.json: Local database used by json-server to persist transactions.