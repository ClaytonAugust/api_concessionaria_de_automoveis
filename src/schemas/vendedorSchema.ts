import { z } from "zod";

export const vendedorCreateSchema = z.object({
  nome: z.string().min(3, "O nome deve ter no mínimo 3 caracteres"),
  email: z.string().email("Formato de email inválido"),
  telefone: z.string().optional(),
});

export const vendedorUpdateSchema = vendedorCreateSchema.partial();

export type VendedorCreate = z.infer<typeof vendedorCreateSchema>;