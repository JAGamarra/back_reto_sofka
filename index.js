//Importar dependencias
const express = require("express");
const cors = require("cors");
//Importar módulos
const DatabaseConnect = require("./database/connectionDB.js");
const UserRouter = require("./routes/userRoutes");
const QuestionRoutes = require("./routes/questionRoutes");

class App {
  constructor() {
    // Creamos una instancia de DatabaseConnect que realiza la conexión a la DB
    this.dbConnect = new DatabaseConnect();
    this.app = express();
    this.config();
  }

  config() {
    this.app.use(cors());
    this.app.use(express.json());

    this.app.set("PORT", process.env.PORT || 3000);

    //Rutas
    const router = express.Router();
    router.get("/", (req, res) => {
      res.status(200).json({ message: "All OK" });
    });
    const userRouter = new UserRouter();
    const questionRouter = new QuestionRoutes();

    this.app.use(router);
    this.app.use("/api", userRouter.router);
    this.app.use("/api", questionRouter.router);

    this.app.listen(this.app.get("PORT"), () => {
      console.log(
        "Servidor corriendo por el puerto ==>>>> ",
        this.app.get("PORT")
      );
    });
  }
}

new App();
