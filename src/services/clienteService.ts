import prisma from "../database/prisma";

export const getAll = () => prisma.cliente.findMany();
export const getById = (id: number) => prisma.cliente.findUnique({ where: { id } });
export const create = (data: any) => prisma.cliente.create({ data });
export const update = (id: number, data: any) => prisma.cliente.update({ where: { id }, data });
export const remove = (id: number) => prisma.cliente.delete({ where: { id } });
