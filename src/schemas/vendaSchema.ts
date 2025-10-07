import { z } from "zod";

export const vendaCreateSchema = z.object({
  clienteId: z.number().int(),
  veiculoId: z.number().int(),
  vendedorId: z.number().int(),
  valorFinal: z.number().positive(),
  dataVenda: z.string().optional(), // ISO string opcional
});

export const vendaUpdateSchema = vendaCreateSchema.partial();
export type VendaCreate = z.infer<typeof vendaCreateSchema>;
