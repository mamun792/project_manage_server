require("dotenv").config();
const exp = require("express");
const projectRoute = require("./routes/projectRoute");
const mongoose = require("mongoose");
const app = exp();

const port = process.env.PORT || 5000;

//middleware
app.use(exp.json());
app.use((req, res, next) => {
  console.log(req.url, req.method);
  next();
});
//routes
app.use("/api/projects", projectRoute);
//mongodb connection

const dbUrl = process.env.DB_URI;
mongoose
  .connect(dbUrl)
  .then(() => {
    app.listen(port, (err) => {
      if (err) throw err;
      console.log(`connect to mongodb running on port ${port}`);
    });
  })
  .catch((err) => console.log(err));


// licten for port
