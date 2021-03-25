const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 8000;
const mongoose = require("mongoose");
// require("dotenv").config({ path: "./config.env" });

// var corsOptions = {
//   origin: "http://localhost:3000",
// };

// require('./server/config/mongoose.config')

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
    const path = require('path');
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
  }

require("./server/routes/subscriber.routes")(app);
require("./server/routes/nodeMailerRoutes")(app);

// const connectionString = process.env.DB_CONNECTION.replace(
//   "<password>",
//   process.env.DB_PASSWORD
// ).replace("<dbname>", process.env.DB_NAME);

mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost/grifftokdb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log("Connected To Database!!"))
  .catch((err) => console.log("error:" + err));

app.listen(PORT, () => console.log(`http://localhost:${PORT}/api`));
