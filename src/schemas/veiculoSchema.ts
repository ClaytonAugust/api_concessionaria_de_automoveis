import { z } from "zod";

export const veiculoCreateSchema = z.object({
  marca: z.string().min(1),
  modelo: z.string().min(1),
  ano: z.number().int().gte(1900).lte(new Date().getFullYear() + 1),
  preco: z.number().positive(),
  status: z.enum(["disponível", "vendido", "reservado"]).optional(),
});

export const veiculoUpdateSchema = veiculoCreateSchema.partial();
export type VeiculoCreate = z.infer<typeof veiculoCreateSchema>;
