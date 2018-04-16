import * as path from 'path';
import * as express from 'express';
import * as logger from 'morgan';
import * as bodyParser from 'body-parser';

// Creates and configures an ExpressJS web server.
class App
{

    // ref to Express instance
    public express: express.Application;

    //Run configuration methods on the Express instance.
    constructor()
    {
        this.express = express();
        this.middleware();
        this.routes();
    }

    // Configure Express middleware.
    private middleware(): void
    {
        this.express.use(logger('dev'));
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({extended: false}));
    }

    // Configure API endpoints.
    private routes(): void
    {
        /* This is just to get up and running, and to make sure what we've got is
         * working so far. This function will change when we start to add more
         * API endpoints */
        let router = express.Router();
        // placeholder route handler
        router.get('/', (req, res, next) =>
        {
            res.json({
                message: 'Welcome to AwesomePAPI!'
            });
        });

        router.get('/getCreditCards', (req, res, next) =>
        {
            res.json([
                                {
                    text: 'American Express',
                    name: 'Nessuna transazione',
                    number: '3759 876543 21001',
                    image: ''
                },
                {
                    text: 'VISA',
                    name: 'Ultimo utilizzo ieri alle 07.34',
                    number: '4000 1234 5678 9010',
                    image: ''
                },
                {
                    text: 'Mastercard',
                    name: 'Ci sono due nuove transazioni',
                    number: '5412 7556 7890 0000',
                    image: ''
                },
                {
                    text: 'RedCard',
                    name: 'Nessuna transazione',
                    number: '4000 1234 5678 9010',
                    image: ''
                }
            ]);
        });


        this.express.use('/', router);
    }

}

export default new App().express;
