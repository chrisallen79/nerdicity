import express from 'express';
import bodyParser from 'body-parser';

export default class App {
  constructor() {
    this.express = express();
    this.configureMiddleware();
    this.configureRoutes();
  }

  configureMiddleware() {
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({ extended: false }));
  }

  /**
   * Configure routes
   */
  configureRoutes() {
    this.express.get('/', (req, res) => {
      res.send('OK');
    });
    this.express.route('/test');
  }
}
