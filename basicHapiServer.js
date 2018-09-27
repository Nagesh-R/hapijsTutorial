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