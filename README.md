## Installation

1. Clone the repository and go to the backend folder:
   ```
   git clone https://github.com/antonovmike/chain_bridge.git
   cd services/backend
   ```
2. Install dependencies:
   ```
   npm install
   ```
3. (Optional) Install dev type packages if you plan to edit TypeScript:
   ```
   npm install -D @types/express @types/cors @types/morgan @types/node
   ```

## Running the backend Application

1. Build TypeScript to JavaScript:
   ```
   npm run build
   ```
2. Start the compiled app:
   ```
   npm start
   ```
   The server listens on port 4000 by default. To change the port:
   ```
   PORT=5000 npm start
   ```
3. For development with auto-reload:
   ```
   npm run dev
   ```
   (Requires ts-node-dev in devDependencies or installed globally.)

## API Endpoints

- GET /health

  - URL: http://localhost:4000/health
  - Description: health check. Response: `{ "status": "ok" }`.

- GET /projects

  - URL: http://localhost:4000/projects
  - Description: returns list of projects (array of objects).

- GET /projects/:id
  - URL example: http://localhost:4000/projects/1
  - Description: returns project by id or "error: "not found"" if not found.

Example responses:

- /health
  ```
  { "status": "ok" }
  ```
- /projects
  ```
  0:
  id:	    "1"
  name:	    "Example Project"
  owner:	"Alice"
  1:
  id:	    "2"
  name:	    "Another Project"
  owner:	"Bob"
  ```
- /projects/1 (example)
  ```
  id:       "1"
  name:     "Example Project"
  owner:    "Alice"
  ```

Note: there are stub routes for auth and chain operations (e.g., POST /auth/login, POST /chain/tx), but the primary endpoints available now are listed above.
