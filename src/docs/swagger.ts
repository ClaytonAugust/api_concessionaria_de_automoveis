import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { Express } from "express";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API Concessionária de Automóveis",
      version: "1.0.0",
      description: "API com Clientes, Veículos e Vendas (Prisma + Zod + Swagger)",
    },
    servers: [{ url: "http://localhost:5000/api" }],
    components: {
      schemas: {
        VendedorCreate: {
          type: "object",
          properties: {
            nome: { type: "string" },
            email: { type: "string", format: "email" },
            telefone: { type: "string" },
          },
          required: ["nome", "email"],
        },
        VendedorUpdate: {
          type: "object",
          properties: {
            nome: { type: "string" },
            email: { type: "string", format: "email" },
            telefone: { type: "string" },
          },
        },
        EnderecoCreate: {
          type: "object",
          properties: {
            rua: { type: "string" },
            numero: { type: "string" },
            cidade: { type: "string" },
            estado: { type: "string" },
            cep: { type: "string" },
            clienteId: { type: "integer" },
          },
          required: ["rua", "numero", "cidade", "estado", "cep", "clienteId"],
        },
        EnderecoUpdate: {
          type: "object",
          properties: {
            rua: { type: "string" },
            numero: { type: "string" },
            cidade: { type: "string" },
            estado: { type: "string" },
            cep: { type: "string" },
            clienteId: { type: "integer" },
          },
        },
        ClienteCreate: {
          type: "object",
          properties: {
            nome: { type: "string" },
            email: { type: "string", format: "email" },
            cpf: { type: "string" },
            telefone: { type: "string" },
          },
          required: ["nome", "email", "cpf"],
        },
        ClienteUpdate: {
          type: "object",
          properties: {
            nome: { type: "string" },
            email: { type: "string", format: "email" },
            cpf: { type: "string" },
            telefone: { type: "string" },
          },
        },
        VeiculoCreate: {
          type: "object",
          properties: {
            marca: { type: "string" },
            modelo: { type: "string" },
            ano: { type: "integer" },
            preco: { type: "number" },
            status: { type: "string", enum: ["disponível", "vendido", "reservado"] },
          },
          required: ["marca", "modelo", "ano", "preco"],
        },
        VeiculoUpdate: {
          type: "object",
          properties: {
            marca: { type: "string" },
            modelo: { type: "string" },
            ano: { type: "integer" },
            preco: { type: "number" },
            status: { type: "string" },
          },
        },
        VendaCreate: {
          type: "object",
          properties: {
            clienteId: { type: "integer" },
            veiculoId: { type: "integer" },
            vendedorId: { type: "integer" },
            valorFinal: { type: "number" },
            dataVenda: { type: "string", format: "date-time" },
          },
          required: ["clienteId", "veiculoId", "vendedorId", "valorFinal"],
        },
        VendaUpdate: {
          type: "object",
          properties: {
            clienteId: { type: "integer" },
            veiculoId: { type: "integer" },
            vendedorId: { type: "integer" },
            valorFinal: { type: "number" },
            dataVenda: { type: "string", format: "date-time" },
          },
        },
      },
    },
  },
  apis: ["./src/routes/*.ts"],
};

const swaggerSpec = swaggerJSDoc(options);

export const setupSwagger = (app: Express) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};

export default swaggerSpec;

