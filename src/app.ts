import express from "express";
import cors from "cors";
import routes from "./routes";
import { setupSwagger } from "./docs/swagger";
import { errorHandler } from "./middlewares/errorHandler";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", routes);

// Swagger
setupSwagger(app);

// Error handler (deve ser o último)
app.use(errorHandler);

export default app;
