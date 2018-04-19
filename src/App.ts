/**
 * Italia PagoPA Proxy
 * Cittadinanza Digitale PagoPA services
 *
 */

import * as express from 'express';
import * as logger from 'morgan';
import * as bodyParser from 'body-parser';

const VERSION: string = '0.0.10';

class App
{

    public express: express.Application;

    constructor()
    {
        this.express = express();
        this.middleware();
        this.routes();
    }

    private middleware(): void
    {
        this.express.use(logger('dev'));
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({extended: false}));
    }

    private routes(): void
    {

        let router = express.Router();

        router.get('/', (req, res) =>
        {
            res.json({
                message: 'Welcome to AwesomePAPI!',
                version: VERSION
            });
        });

        router.get('/getCreditCards', (req, res) =>
        {
            res.json();
        });

        this.express.use('/', router);
    }

}

export default new App().express;
