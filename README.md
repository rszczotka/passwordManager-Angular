# Password Manager Application

## Technical Documentation

This is an Angular-based web application for managing passwords. The application allows users to generate, view, edit, and delete passwords for various websites.

## Table of Contents

1. Technologies Used
2. Project Structure
3. Component Overview
4. Backend Integration
5. Setup and Installation
6. Development

## Technologies Used

- **Frontend**:
  - Angular 17.2.0 (Standalone Components Architecture)
  - Bootstrap 5.3.3 for styling
  - TypeScript 5.3.2

- **Backend**:
  - PHP REST API endpoints

## Project Structure

The project follows a component-based architecture with standalone Angular components:

```
src/
├── app/
│   ├── navbar/              # Navigation component
│   ├── password-creator/    # Password generation component
│   ├── password-list/       # List of saved passwords
│   ├── password-dialog/     # Modal for viewing/editing password details
│   ├── loginData.ts         # Data model for login information
│   └── app.component.*      # Root component files
├── assets/
└── styles.css               # Global styles (includes Bootstrap)
```

## Component Overview

### AppComponent

Root component that initializes the application and manages the component hierarchy.

### NavbarComponent

Simple navigation bar displaying the application title.

### PasswordCreatorComponent

Allows users to:
- Select password strength (easy, medium, difficult)
- Enter website name and login information
- Generate and save new passwords
- Reset the form

### PasswordListComponent

Displays a table of saved passwords with:
- Website names
- Action buttons to view details
- Empty state handling when no passwords exist

### PasswordDialogComponent

Modal dialog that:
- Displays password details
- Provides copy-to-clipboard functionality
- Allows editing existing passwords
- Supports password deletion
- Uses Bootstrap's modal component

## Backend Integration

The application communicates with a PHP backend through REST endpoints:

- `getAllPasswords.php`: Retrieves the list of stored passwords
- `password_generator.php`: Generates and stores new passwords
- `updatePassword.php`: Updates existing password records
- `deletePassword.php`: Removes password entries
