// const{format}=require("date-fns")
const express =require('express');
const app = express();
//middleware
app.use(express.json());
// const currentDateStamp = `Date-${format(
//     new Date(),
//     "dd-MMM-yyyy"
//   )}\t Time-${format(new Date(), "HH:mm:ss")}`;

 
  
const currentDateStamp = new Date();
 
//   if (!Date.now) {
//     Date.now = function() { return new Date().getTime(); }
// }
console.log("currentDateStamp",currentDateStamp);
  const PORT = 3000;
  app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
  });