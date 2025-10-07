import dotenv from "dotenv";
import app from "./app";

dotenv.config();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚗 API Concessionária rodando em http://localhost:${PORT}/api`);
  console.log(`📘 Docs (Swagger): http://localhost:${PORT}/api-docs`);
});

