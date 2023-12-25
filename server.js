const express = require(`express`);
const app = express();

app.use(express.json());
const router = require("./router/route");

app.use(express.static(`views`), router);
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, `index.html`));
});

require("dotenv").config();
app.listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.PORT}`);
});
