import express, { Application } from 'express';
// Routes
import userRoutes from '../routes/users.route';

class Server {
  private app: Application;
  private port: string;
  private apiPaths = {
    users: '/api/users'
  }

  constructor() {
    this.app = express();
    this.port = process.env.PORT || '3002';

    // Routes
    this.routes();
  }

  routes() {
    this.app.use( this.apiPaths.users, userRoutes );
  }

  listen() {
    this.app.listen( this.port, () => {
      console.clear();
      console.log( `${ '[SERVER]:' } Server listening on port: ${ this.port }` );
    });
  }
}

export default Server;
