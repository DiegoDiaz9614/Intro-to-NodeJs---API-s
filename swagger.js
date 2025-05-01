const swaggerAutogen = require("swagger-autogen");

const doc = {
    info: {
        title: "My Student API",
        description: "An API that shows student data"
    },
    host: "intro-to-nodejs-api-s.onrender.com",
    schemes: ["https"],
};

const outputFile = "./swagger.json";
const endpointFiles = ["./routes/index.js"];

swaggerAutogen(outputFile, endpointFiles, doc);

swaggerAutogen(outputFile, endpointFiles, doc).then(async () => {
    await import("./server.js");
})