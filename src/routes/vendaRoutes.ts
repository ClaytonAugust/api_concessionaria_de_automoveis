import { Router } from "express";
import * as controller from "../controllers/vendaController";
import { validateSchema } from "../middlewares/validateSchema";
import { vendaCreateSchema, vendaUpdateSchema } from "../schemas/vendaSchema";

const router = Router();

/**
 * @openapi
 * /vendas:
 *   get:
 *     tags:
 *       - Vendas
 *     summary: Lista todas as vendas com cliente, veículo e vendedor (include)
 *     responses:
 *       200:
 *         description: Lista de vendas com relações
 */
router.get("/", controller.getAll);

/**
 * @openapi
 * /vendas/{id}:
 *   get:
 *     tags:
 *       - Vendas
 *     summary: Busca venda por id com include das entidades relacionadas
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Venda encontrada
 *       404:
 *         description: Não encontrada
 */
router.get("/:id", controller.getById);

/**
 * @openapi
 * /vendas:
 *   post:
 *     tags:
 *       - Vendas
 *     summary: Cria uma venda; marca veículo como vendido
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/VendaCreate'
 *     responses:
 *       201:
 *         description: Venda criada
 */
router.post("/", validateSchema(vendaCreateSchema), controller.create);

/**
 * @openapi
 * /vendas/{id}:
 *   put:
 *     tags:
 *       - Vendas
 *     summary: Atualiza uma venda
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/VendaUpdate'
 *     responses:
 *       200:
 *         description: Atualizado
 */
router.put("/:id", validateSchema(vendaUpdateSchema), controller.update);

/**
 * @openapi
 * /vendas/{id}:
 *   delete:
 *     tags:
 *       - Vendas
 *     summary: Remove uma venda
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Removido
 */
router.delete("/:id", controller.remove);

export default router;
