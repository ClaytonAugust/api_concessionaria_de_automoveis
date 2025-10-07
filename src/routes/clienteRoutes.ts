import { Router } from "express";
import * as controller from "../controllers/clienteController";
import { validateSchema } from "../middlewares/validateSchema";
import { clienteCreateSchema, clienteUpdateSchema } from "../schemas/clienteSchema";

const router = Router();

/**
 * @openapi
 * /clientes:
 *   get:
 *     tags:
 *       - Clientes
 *     summary: Lista todos os clientes
 *     responses:
 *       200:
 *         description: Lista de clientes
 */
router.get("/", controller.getAll);

/**
 * @openapi
 * /clientes/{id}:
 *   get:
 *     tags:
 *       - Clientes
 *     summary: Busca um cliente por id
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *     responses:
 *       200:
 *         description: Cliente encontrado
 *       404:
 *         description: Não encontrado
 */
router.get("/:id", controller.getById);

/**
 * @openapi
 * /clientes:
 *   post:
 *     tags:
 *       - Clientes
 *     summary: Cria um novo cliente
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ClienteCreate'
 *     responses:
 *       201:
 *         description: Cliente criado
 */
router.post("/", validateSchema(clienteCreateSchema), controller.create);

/**
 * @openapi
 * /clientes/{id}:
 *   put:
 *     tags:
 *       - Clientes
 *     summary: Atualiza um cliente
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ClienteUpdate'
 *     responses:
 *       200:
 *         description: Atualizado
 */
router.put("/:id", validateSchema(clienteUpdateSchema), controller.update);

/**
 * @openapi
 * /clientes/{id}:
 *   delete:
 *     tags:
 *       - Clientes
 *     summary: Remove um cliente
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *     responses:
 *       204:
 *         description: Removido
 */
router.delete("/:id", controller.remove);

export default router;
