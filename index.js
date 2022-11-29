import express from "express";
import FileUpload from "express-fileupload";
import cors from "cors";
import ProductRoute from "./routes/ProductRoute.js";
import MenuRoute from "./routes/MenuRoute.js";
import db from "./config/Database.js";

const app = express();

(async () => {
  await db.sync();
})();

app.use(cors());
app.use(express.json());
app.use(FileUpload());
app.use(express.static("public"));
app.use(ProductRoute);
app.use(MenuRoute);

app.listen(5000, () => console.log("Server Up and Running..."));
