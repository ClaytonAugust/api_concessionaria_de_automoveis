import { Request, Response, NextFunction } from "express";

export function errorHandler(err: any, _req: Request, res: Response, _next: NextFunction) {
  console.error(err);
  if (err?.code === "P2025") {
    return res.status(404).json({ message: "Registro não encontrado" });
  }
  res.status(err?.status || 500).json({ message: err?.message || "Internal server error" });
}
