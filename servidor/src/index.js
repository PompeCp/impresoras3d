const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

const path = require("path");

app.get("/download/:fileName", (req, res) => {
  const fileName = req.params.fileName;

  const filePath = path.join(__dirname, "../src/public/upload", fileName);

  res.download(filePath, fileName);
});
const PORT = process.env.PORT || 4000;
app.use(express.static(__dirname + "/public/"));
app.use("/contenidomult", require("./routes/contenidomult"));
app.use("/filamento", require("./routes/filamento"));
app.use("/impresoras", require("./routes/impresoras"));
app.use("/recomendaciones", require("./routes/recomendaciones"));
app.use("/secciones", require("./routes/secciones"));
app.use("/comunidad", require("./routes/comunidad"));

app.listen(PORT, () => {
  console.log("localhost:" + PORT);
});
