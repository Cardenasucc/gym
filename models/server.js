/**
 * @author deivid & santiago
 * @version 1.0.0
 * 
 * Service the express
 * This class calls methods for a server
 */

/**
 * importing variables
 */

const express = require('express');
const cors = require('cors');

/**
 * @class server class that starts the express server
 */
class Server{

    constructor(port = 3000, path = '/api/') {
        this.app = express();
        this.port = port;
        this.path = path;
        this.middlewares();
        this.routes();
    }

    middlewares(){
        this.app.use(cors());
        this.app.use(express.json());
    }

    routes(){
        this.app.use('/Billing', require('../routes/billing.routes'));
        this.app.use('/users', require('../routes/users.routes'));
        this.app.use('/persons', require('../routes/persons.routes'));
    
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`Server running on the port: ${this.port}`);     
        }).on('error', (err) => {
            console.error('Error starting server:', err);
        });
    }
}

module.exports = Server;