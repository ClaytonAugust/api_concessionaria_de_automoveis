import { Router } from "express";
import * as controller from "../controllers/enderecoController";
import { validateSchema } from "../middlewares/validateSchema";
import { enderecoCreateSchema, enderecoUpdateSchema } from "../schemas/enderecoSchema";

const router = Router();

/**
 * @openapi
 * /enderecos:
 *   get:
 *     tags:
 *       - Enderecos
 *     summary: Lista todos os endereços
 *     responses:
 *       200:
 *         description: Lista de endereços
 */
router.get("/", controller.getAll);

/**
 * @openapi
 * /enderecos/{id}:
 *   get:
 *     tags:
 *       - Enderecos
 *     summary: Busca um endereço por ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Endereço encontrado
 *       404:
 *         description: Não encontrado
 */
router.get("/:id", controller.getById);

/**
 * @openapi
 * /enderecos:
 *   post:
 *     tags:
 *       - Enderecos
 *     summary: Cria um novo endereço para um cliente
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/EnderecoCreate'
 *     responses:
 *       201:
 *         description: Endereço criado
 */
router.post("/", validateSchema(enderecoCreateSchema), controller.create);

/**
 * @openapi
 * /enderecos/{id}:
 *   put:
 *     tags:
 *       - Enderecos
 *     summary: Atualiza um endereço existente
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
 *             $ref: '#/components/schemas/EnderecoUpdate'
 *     responses:
 *       200:
 *         description: Endereço atualizado
 */
router.put("/:id", validateSchema(enderecoUpdateSchema), controller.update);

/**
 * @openapi
 * /enderecos/{id}:
 *   delete:
 *     tags:
 *       - Enderecos
 *     summary: Remove um endereço
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Endereço removido
 */
router.delete("/:id", controller.remove);

export default router;
