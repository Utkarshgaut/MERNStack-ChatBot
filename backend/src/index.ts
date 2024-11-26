import { error } from "console";
import app  from "./app.js";
import { connectToDatabase } from "./db/connection.js";

//connections and listeress
const PORT = process.env.PORT || 5000;
connectToDatabase()
    .then(() => {
        app.listen(PORT, () =>
            console.log("Server Open And Connected To DataBase Succesfully 👌")
        );
    })
    .catch((err) => console.log(err));















//                 BASIC APPLICATION SHOWING HOW WE CAN USE NODE.JS 
// ************************************************************************************
//GET request  - to get some information from the package or the database the get request is used 
//end point below (middel wear)

// app.get("/hello",(req, res, next) => {
//   return res.send("Hello");
// });
// ************************************************************************************
 // to show or access the data 

// ************************************************************************************
// PUT request  - to update or modify any data  
//end point below (middel wear)

// app.put("/hello",(req, res, next) => {
//   console.log(req.body.name);
//   return res.send("Hello");
// });
// ************************************************************************************
// POST request to  insert or add any new data 

// app.post("/hello",(req, res, next) => {
//   console.log(req.body.name);
//   return res.send("Hello");
// });
// ************************************************************************************
//DELETE  resquest isused to deleeta somme data 

// app.delete("/hello",(req, res, next) => {
//   console.log(req.body.name);
//   return res.send("Hello");
// });
// ************************************************************************************
// Dynamic routing 
//can modifie delete but it is used for accessing a singel user record  
// app.delete("/user/:id",(req, res, next) => {
//   console.log(req.params.id);
//   return res.send("Hello");
// });
// ************************************************************************************