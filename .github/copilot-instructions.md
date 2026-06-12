# OrangeU Project - Copilot Instructions

This is a Vite React application with TailwindCSS and React Router.

## Project Overview

OrangeU is a multi-page web application built with:
- **Vite** - Fast build tool and dev server
- **React** - UI library
- **React Router** - Client-side routing
- **TailwindCSS** - Utility-first CSS framework

## Pages

1. **Home** (`/`) - Welcome page with navigation cards
2. **About** (`/about`) - Information about OrangeU
3. **Fruits** (`/fruits`) - Display of fruit types with emojis
4. **Friends** (`/friends`) - List of friends (requires authentication)
5. **Contact Us** (`/contact`) - Contact form
6. **Sign In/Sign Up** (`/signin`) - Authentication page

## Features

- **Sticky Navigation Bar** - Always accessible navigation with conditional rendering
- **Authentication State** - Simple auth context with localStorage persistence
- **Conditional Routing** - Friends page link redirects to signin if not authenticated
- **Responsive Design** - Mobile-friendly layout using TailwindCSS
- **Form Handling** - Contact and authentication forms with validation

## Authentication Flow

- Users can sign up with name, email, and password
- Users can sign in with email and password
- Authentication state is persisted in localStorage
- Friends page is protected and redirects unauthenticated users to signin
- Friends link in navbar only appears on Home page when authenticated
- Friends link on other pages redirects to signin if not authenticated

## Development

To start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173/`

## Build

To build for production:
```bash
npm run build
```

## Project Structure

```
src/
├── pages/           # Page components
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Fruits.jsx
│   ├── Friends.jsx
│   ├── ContactUs.jsx
│   └── SignInSignUp.jsx
├── components/      # Shared components
│   └── Navbar.jsx
├── context/         # React Context
│   └── AuthContext.jsx
├── App.jsx         # Main app component with routing
├── main.jsx        # Entry point
└── index.css       # Global styles with TailwindCSS
```

## Key Implementation Details

### Navbar Logic
- Dynamically renders different links based on current page
- Checks authentication status for conditional rendering
- Friends link redirects to signin when user is not authenticated

### Authentication Context
- Manages user login/logout
- Persists user data in localStorage
- Provides `useAuth` hook for components

### Styling
- TailwindCSS for all styling
- Custom transitions in App.css
- Responsive design with mobile-first approach
