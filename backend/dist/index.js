// import app from "./app.js";
// import { connectToDatabase } from "./db/connection.js";
// //connections and listeneres
// const PORT = process.env.PORT || 5000;
// connectToDatabase()
//     .then(() => {
//     app.listen(PORT, () => console.log("Server Open & Connected To Database 🤟"));
// })
//     .catch((err) => console.log(err));
// //# sourceMappingURL=index.js.map

import app from "./app.js";
import { connectToDatabase } from "./db/connection.js";
import appRouter from "./routes/index.js"; // Make sure this is the correct path

// Connections and listeners
const PORT = process.env.PORT || 5000;
connectToDatabase()
  .then(() => {
    // Register the appRouter before listening
    app.use("/api/v1", appRouter); // Make sure this line is here to register routes

    // Start server
    app.listen(PORT, () => console.log("Server Open & Connected To Database 🤟"));
  })
  .catch((err) => console.log(err));
