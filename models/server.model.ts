import express, { Application } from 'express';

class Server {
  private app: Application;
  private port: string;

  constructor() {
    this.app = express();
    this.port = process.env.PORT || '3002';
  }

  listen() {
    this.app.listen( this.port, () => {
      console.clear();
      console.log( `${ '[SERVER]:' } Server listening on port: ${ this.port }` );
    });
  }
}

export default Server;
