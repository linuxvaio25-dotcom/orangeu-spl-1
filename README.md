# OrangeU - A React Web Application

OrangeU is a modern, responsive web application built with React, Vite, and TailwindCSS. It demonstrates best practices in routing, state management, and authentication.

## 🚀 Features

- **Multi-page Navigation** - Six distinct pages with smooth navigation
- **Authentication System** - Sign up/sign in with localStorage persistence
- **Protected Routes** - Friends page only accessible to authenticated users
- **Responsive Design** - Mobile-friendly layout with TailwindCSS
- **Context API** - Simple and effective state management for authentication
- **Fast Development** - Vite for instant HMR and quick builds

## 📋 Pages

1. **Home** - Welcome page with feature overview
2. **About** - Information about OrangeU
3. **Fruits** - Gallery of fruit emojis
4. **Friends** - User's friend list (requires authentication)
5. **Contact Us** - Contact form for user inquiries
6. **Sign In/Sign Up** - Authentication page

## 🛠️ Tech Stack

- **React** - UI library
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing
- **TailwindCSS** - Utility-first CSS framework
- **JavaScript** - Programming language

## 📦 Installation

1. Clone or download the project
2. Install dependencies:
```bash
npm install
```

## 🎯 Development

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173/`

## 🏗️ Build

Build for production:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## 📁 Project Structure

```
orangeu-ai-1/
├── src/
│   ├── pages/
│   │   ├── Home.jsx           # Home page
│   │   ├── About.jsx          # About page
│   │   ├── Fruits.jsx         # Fruits gallery
│   │   ├── Friends.jsx        # Friends list (protected)
│   │   ├── ContactUs.jsx      # Contact form
│   │   └── SignInSignUp.jsx   # Auth page
│   ├── components/
│   │   └── Navbar.jsx         # Navigation bar
│   ├── context/
│   │   └── AuthContext.jsx    # Auth context
│   ├── App.jsx                # Main app with routing
│   ├── main.jsx               # Entry point
│   ├── App.css                # App styles
│   └── index.css              # Global styles
├── public/                    # Static assets
├── package.json               # Project dependencies
├── vite.config.js             # Vite configuration
├── tailwind.config.js         # TailwindCSS configuration
└── postcss.config.js          # PostCSS configuration
```

## 🔐 Authentication

The application includes a simple authentication system:

- **Sign Up** - Create a new account with name, email, and password
- **Sign In** - Login with email and password
- **Persistence** - User data stored in localStorage
- **Protected Routes** - Friends page redirects to Sign In if not authenticated

### Authentication Context

The `AuthContext` provides:
- `isLoggedIn` - Boolean indicating if user is authenticated
- `user` - Current user object with name and email
- `login(userData)` - Function to login user
- `logout()` - Function to logout user

## 🎨 Styling

The project uses TailwindCSS for styling with:
- Utility-first CSS approach
- Responsive design utilities
- Custom component transitions
- Mobile-first design philosophy

## 🧭 Navigation

### Navbar Logic

The sticky navbar dynamically displays links based on:
1. **Current Page** - Different navbar for each page
2. **Authentication Status** - Friends link only shown when authenticated
3. **Conditional Routing** - Friends link redirects to signin if not logged in

#### Page-Specific Navigation:

- **Home**: About, Fruits, Friends (if logged in), Contact Us, Sign In/Sign Up
- **About**: Home, Fruits, Friends, Contact Us, Sign In/Sign Up
- **Fruits**: Home, About, Friends, Contact Us, Sign In/Sign Up
- **Friends**: Home, About, Fruits, Contact Us, Sign In/Sign Up (requires login)
- **Contact**: Home, About, Fruits, Friends, Sign In/Sign Up
- **Sign In/Sign Up**: Home

## 💡 Usage

### Sign Up/In Flow

1. Navigate to Sign In/Sign Up page
2. Toggle between Sign In and Sign Up modes
3. Fill in required information
4. Submit form
5. User data is saved in localStorage
6. Redirect to home page

### Friends Page

- Only accessible when logged in
- Displays a list of friends with hobbies
- Navigate back using navbar links

## 🚀 Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```

3. **Visit Application**
   - Open http://localhost:5173/ in your browser

4. **Test Authentication**
   - Sign up for a new account
   - Logout and sign back in
   - Try accessing Friends page when logged out

## 📝 Notes

- All styling uses TailwindCSS - no additional CSS files needed for components
- Authentication is client-side only using localStorage
- For production, implement backend authentication with secure token management
- Forms include basic validation

## 🤝 Contributing

Feel free to modify and extend this project. Some ideas:

- Add more pages or features
- Implement backend API authentication
- Add user profile management
- Create real friend connections
- Add dark mode support

## 📄 License

This project is open source and available under the MIT License.

