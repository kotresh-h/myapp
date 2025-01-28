Overview

Setup and Installation

Clone the repository:

git clone https://github.com/kotresh-h/myapp.git
cd user-management-app

Install dependencies:

npm install

Start the development server:

npm start

Open your browser and navigate to http://localhost:3000.

The User Management App is a simple React-based application for managing user data. It allows users to view, add, edit, and delete users. The app interacts with a backend API to fetch and manipulate data and provides an intuitive user interface.

Features

User List:

Displays a list of users with details like ID, First Name, Last Name, Email, and Department.

Pagination for easy navigation through the user list.

User Form:

Form to add or edit user details.

Validates required fields (First Name and Email).

CRUD Operations:

View: Fetch and display users from the backend API.

Add: Add a new user and update the user list.

Edit: Edit an existing user's details.

Delete: Remove a user from the list.

Error Handling:

Displays error messages when API requests fail.

ErrorBoundary component to catch JavaScript errors in the UI.

Responsive Design:

Adapts to mobile, tablet, and desktop screens.

Styling:

User-friendly interface with a clean and modern design.

Technologies Used

Frontend: React.js

State Management: React Hooks

HTTP Client: Axios

API: JSONPlaceholder (https://jsonplaceholder.typicode.com/users)
