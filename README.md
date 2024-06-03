# Code Together

Code Together is a real-time collaborative code editor for HTML, CSS, and JavaScript, built with React.js and Socket.IO. This application allows multiple users to write and edit code together in real-time, with changes instantly reflected across all connected clients.



https://github.com/codewithmurali/code-together/assets/80981341/1ab5791e-cf9b-48bc-9c54-91a88a49fda3



## Features

- Real-time collaborative coding
- Separate editors for HTML, CSS, and JavaScript
- Live preview of the code output
- Intuitive and user-friendly interface
- Seamless WebSocket integration for real-time updates

## Technologies Used

- React.js: For building the user interface
- Socket.IO: For real-time WebSocket communication
- HTML5, CSS3, JavaScript: For code editing and live preview

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js
- npm (Node Package Manager)

### Installation

1. Clone the repository:

   ```bash
      git clone https://github.com/codewithmurali/code-together.git
      cd collab-canvas
   ```

2. Install server dependencies:

   ```bash
       cd server
       npm instal
   ```

3. Install client dependencies:

   ```bash
   cd ../client
   npm install
   ```

### Running the Application

1. Start the server:

   ```bash
   cd server
   node server.js
   ```

   or for automatic restart on changes:

   ```bash
   cd server
   nodemon server.js
   ```

2. Start the client:

   ```bash
   cd ../client
   npm start
   ```

3. Open the application:

   `Open your browser and navigate to http://localhost:5173.`

4. Open multiple tabs/windows:

   `To test real-time collaboration, open the application in multiple browser windows or tabs.`
