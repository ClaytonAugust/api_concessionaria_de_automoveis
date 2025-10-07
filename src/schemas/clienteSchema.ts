import { z } from "zod";

export const clienteCreateSchema = z.object({
  nome: z.string().min(3),
  email: z.string().email(),
  cpf: z.string().min(11).max(14),
  telefone: z.string().optional(),
});

export const clienteUpdateSchema = clienteCreateSchema.partial();
export type ClienteCreate = z.infer<typeof clienteCreateSchema>;
