

//http is a liberay...itsbuild in only 
const express = require('express');
const app = express();


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

];
//set end ponit
app.get('/',(request,responce)=>{
    responce.send("world")

})  
app.get('/api',(request,responce)=>{
    responce.json(notes)

})

const PORT =3005;
app.listen(PORT ,()=>{
console.log(`server running on port ${PORT}`);
});
