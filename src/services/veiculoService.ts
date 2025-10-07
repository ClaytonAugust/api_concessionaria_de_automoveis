import prisma from "../database/prisma";

export const getAll = () => prisma.veiculo.findMany();
export const getById = (id: number) => prisma.veiculo.findUnique({ where: { id } });
export const create = (data: any) => prisma.veiculo.create({ data });
export const update = (id: number, data: any) => prisma.veiculo.update({ where: { id }, data });
export const remove = (id: number) => prisma.veiculo.delete({ where: { id } });
