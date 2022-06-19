import express from "express";
import routes from "./src/routes/crmRoutes";

const app = express();
const PORT = 4000;

routes(app);

app.get("/", (req, res) => res.send(`Hello desde el puerto ${PORT}`));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
