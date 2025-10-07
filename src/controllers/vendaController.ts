import { Request, Response, NextFunction } from "express";
import * as service from "../services/vendaService";

export const getAll = async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const items = await service.getAll();
    res.json(items);
  } catch (err) {
    next(err);
  }
};

export const getById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = Number(req.params.id);
    const item = await service.getById(id);
    if (!item) return res.status(404).json({ message: "Venda não encontrada" });
    res.json(item);
  } catch (err) {
    next(err);
  }
};

export const create = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const novo = await service.create(req.body);
    res.status(201).json(novo);
  } catch (err) {
    next(err);
  }
};

export const update = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const atualizado = await service.update(Number(req.params.id), req.body);
    res.json(atualizado);
  } catch (err) {
    next(err);
  }
};

export const remove = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await service.remove(Number(req.params.id));
    res.status(204).send();
  } catch (err) {
    next(err);
  }
};
