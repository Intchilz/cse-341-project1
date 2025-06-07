const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'Contacts ApI',
        description: 'Contacts Api'
    },
    host: 'https://cse-341-project1-qpfd.onrender.com',
    schemes: ['http', 'https']
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

//this will generate swagger.json
swaggerAutogen(outputFile, endpointsFiles, doc);