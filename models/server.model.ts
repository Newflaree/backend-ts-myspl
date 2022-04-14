import express, { Application } from 'express';
import cors from 'cors';
// Routes
import userRoutes from '../routes/users.route';
import authRoutes from '../routes/auth.route';

class Server {
  private app: Application;
  private port: string;
  private apiPaths = {
    users: '/api/users',
    auth: '/api/auth'
  }

  constructor() {
    this.app = express();
    this.port = process.env.PORT || '3002';

    // Init Methods
    this.middlewares();
    this.routes();
  }

  middlewares() {
    // Cors
    this.app.use( cors() );
    // Body Parser
    this.app.use( express.json() );
  }

  routes() {
    this.app.use( this.apiPaths.users, userRoutes );
    this.app.use( this.apiPaths.auth, authRoutes );
  }

  listen() {
    this.app.listen( this.port, () => {
      console.clear();
      console.log( `${ '[SERVER]:'.green } Server listening on port: ${ this.port }` );
    });
  }
}

export default Server;
