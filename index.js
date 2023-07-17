// console.log("world");
//simp-le web server

//http is a liberay...itsbuild in only 
const http = require('http');

//its json
let notes=[
    {
        "id":1,
        "name":"saveen",
        "important":true

    },
    {
        "id":2,
        "name":"sibi",
        "important":true
    },
    {
        "id":3,
        "name":"ruth",
        "important":true
    }

]

//creaqte app
const app =http.createServer((request,responce)=>{
//set responce header
// responce.writeHead(200,{'Content-Type':'text/html'})
responce.writeHead(200,{'Content-Type':'application/json'});
responce.end(JSON.stringify(notes));


// responce.end('<h1>hello world</h1>')

});
//create port to listen data    it listen the resquest
//poer is avalible 0 to 65535
//some or resverde 88 like this 27017
const PORT =3001;
app.listen(PORT);
console.log(`server running on port ${PORT}`);
//run in chrome localhost:3001