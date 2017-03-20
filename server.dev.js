let http = require("http");
import app from './app/app';

let server = http.createServer(app);

server.listen(3000);
console.log("Server is listening on port 3000");