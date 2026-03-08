import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App' //from App.tsx, which is the main component of the application
import 'bootstrap/dist/css/bootstrap.css'; // Importing Bootstrap CSS for styling

// React-Dom: library responsible for connecting React to the browser’s real DOM (web pages)
// React-Native: library/renderer that connects React to native mobile components 

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render( 
  // createRoot: creates a React root for rendering a React application
  // .render: Here React gets what it should show on the screen
  // <React.StrictMode>: to identify potential problems

  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
