import prisma from "../database/prisma";
import { EnderecoCreate } from "../schemas/enderecoSchema";

export const getAll = () => prisma.endereco.findMany({ include: { cliente: true } });

export const getById = (id: number) =>
  prisma.endereco.findUnique({ where: { id }, include: { cliente: true } });

export const create = (data: EnderecoCreate) =>
  prisma.endereco.create({
    data,
    include: {
      cliente: true, // Retorna o cliente junto ao criar
    },
  });

export const update = (id: number, data: Partial<EnderecoCreate>) =>
  prisma.endereco.update({ where: { id }, data });

export const remove = (id: number) => prisma.endereco.delete({ where: { id } });