import express, { json } from 'express';
import routes from './routes';
import mongoose from 'mongoose';

class App {

    constructor() {
        this.server = express();

        mongoose.connect('mongodb+srv://andregomides:unifeiWeb@webprojetofinal.fig9gyh.mongodb.net/?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        this.routes();
        this.middlewares();
    }

    middlewares(){
        this.server.use(json());
    }

    routes(){
        this.server.use(routes);
    }
}

export default new App().server;