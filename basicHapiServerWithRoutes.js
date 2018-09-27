'use strict'

/**
 * Importing Hapi JS
 */
const Hapi = require('hapi');

/**
 * Initializing the server object
 */
const server = Hapi.server({
    port: 3000,
    host: 'localhost'
});

/**
 * Basic Route which returns Hello World!!!
 */
server.route({
    method: 'GET',
    path: '/',
    handler: (request, h) => {
        return 'hello World!!!';
    }
});

/**
 * Route to capture parameter from the URL and diplay in the HTML
 */
server.route({
    method: 'GET',
    path: '/{name}',
    handler: (request, h) => {
        return 'hello, ' + encodeURIComponent(request.params.name) + '!!!';
    }
});

/**
 * Method to initialize the server
 */
const init = async () => {
    await server.start();
    console.log(`Server running at: ${server.info.uri}`);    
};

/**
 * Quiting the server if any unhandled rejections were encountered
 */
process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init();