const express = require(`express`);
const app = express();

const router = require("./route");

app.use(express.static(`views`), router);
app.get("/", function (_, res) {
  res.sendFile(path.join(__dirname, `index.html`));
});

const port = 3000;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
