import prisma from "../database/prisma";

/**
 * getAll: inclui cliente, veiculo e vendedor
 */
export const getAll = () =>
  prisma.venda.findMany({
    include: { cliente: true, veiculo: true, vendedor: true },
  });

export const getById = (id: number) =>
  prisma.venda.findUnique({
    where: { id },
    include: { cliente: true, veiculo: true, vendedor: true },
  });

/**
 * create: cria venda e marca veículo como 'vendido'
 */
export const create = async (data: any) => {
  // converte dataVenda se for string
  if (data.dataVenda) data.dataVenda = new Date(data.dataVenda);

  const novo = await prisma.venda.create({ data });
  // atualiza status do veículo para 'vendido'
  await prisma.veiculo.update({
    where: { id: Number(data.veiculoId) },
    data: { status: "vendido" },
  });
  return novo;
};

export const update = async (id: number, data: any) => {
  if (data.dataVenda) data.dataVenda = new Date(data.dataVenda);
  const atualizado = await prisma.venda.update({ where: { id }, data });
  // opcional: se veiculoId mudou, poderia ajustar status dos veículos — aqui deixamos simples
  return atualizado;
};

export const remove = async (id: number) => {
  // ao deletar venda, não alteramos o status do veículo automaticamente
  return prisma.venda.delete({ where: { id } });
};
