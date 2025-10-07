import prisma from "../database/prisma";
import { VendedorCreate } from "../schemas/vendedorSchema";

export const getAll = () => prisma.vendedor.findMany();

export const getById = (id: number) => prisma.vendedor.findUnique({ where: { id } });

export const create = (data: VendedorCreate) => prisma.vendedor.create({ data });

export const update = (id: number, data: Partial<VendedorCreate>) =>
  prisma.vendedor.update({ where: { id }, data });

export const remove = (id: number) => prisma.vendedor.delete({ where: { id } });