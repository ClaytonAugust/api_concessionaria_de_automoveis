import { z } from "zod";

export const enderecoCreateSchema = z.object({
  rua: z.string().min(1, "O campo rua é obrigatório"),
  numero: z.string().min(1, "O campo número é obrigatório"),
  cidade: z.string().min(1, "O campo cidade é obrigatório"),
  estado: z.string().length(2, "O estado deve ter 2 caracteres"),
  cep: z.string().length(8, "O CEP deve ter 8 caracteres numéricos"),
  clienteId: z.number().int().positive("O ID do cliente é obrigatório"),
});

export const enderecoUpdateSchema = enderecoCreateSchema.partial();

export type EnderecoCreate = z.infer<typeof enderecoCreateSchema>;