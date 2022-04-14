import express, { Application } from 'express';
import cors from 'cors';
// Routes
import userRoutes from '../routes/users.route';
import authRoutes from '../routes/auth.route';
import db from '../db/connection';

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
    this.dbConnection();
    this.middlewares();
    this.routes();
  }

  async dbConnection() {
    try {
      await db.authenticate();
      console.log( `${ '[SERVER.CNN]:'.green } Database ONLINE.` );

    } catch( err ) {
      //console.log( err ),
      console.log( `${ '[SERVER.CNN]:'.red } Something went wrong. Talk to the admin.` );
    }
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
      console.log( `${ '[SERVER.LISTEN]:'.green } Server listening on port: ${ this.port }` );
    });
  }
}

export default Server;
