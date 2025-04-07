const http = require("http")

const myserver = http.createServer((request, response) => {
    response.writeHead(200, "Welcometomyworld", { "Content-Type": "text/plain" });
    response.end("Truptiii3");
} );

myserver.listen(3010, () => {
    console.log("server is running on http://localhost:3010");
    
})