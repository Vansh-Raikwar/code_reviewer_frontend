# CodeReviewer Frontend

This is the frontend for the CodeReviewer project. It is a React application built with Vite, providing a modern, responsive UI for AI-powered code review.

---

## Features
- Responsive, mobile-friendly design
- Code editor with syntax highlighting
- Animated typing effect for AI responses
- Loader/spinner while waiting for AI response
- Markdown rendering for AI output

---

## Setup Instructions

### 1. Install Dependencies
```sh
cd frontend
npm install
```

### 2. Environment Variables
Create a `.env` file in the `frontend` directory if you want to configure the backend API URL:
```
VITE_API_URL=http://localhost:8080
```
- All Vite environment variables must be prefixed with `VITE_`.

### 3. Start the Development Server
```sh
npm run dev
```
- The app will be available at [http://localhost:5173](http://localhost:5173)

---

## Build for Production
```sh
npm run build
```
- The production build will be in the `dist/` folder.

---

## Environment Variables
- `VITE_API_URL` — The backend API base URL (default: `http://localhost:8080`)

---

## Development Notes
- Main entry: `src/App.jsx`
- Styles: `src/App.css`
- Uses [PrismJS](https://prismjs.com/) for syntax highlighting
- Uses [react-markdown](https://github.com/remarkjs/react-markdown) for Markdown rendering
- Loader and typing effect implemented in React state

---

## Credits
- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [PrismJS](https://prismjs.com/)
- [react-markdown](https://github.com/remarkjs/react-markdown)

---

## License
MIT 