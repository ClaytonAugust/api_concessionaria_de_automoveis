import { Router } from "express";
import * as controller from "../controllers/veiculoController";
import { validateSchema } from "../middlewares/validateSchema";
import { veiculoCreateSchema, veiculoUpdateSchema } from "../schemas/veiculoSchema";

const router = Router();

/**
 * @openapi
 * /veiculos:
 *   get:
 *     tags:
 *       - Veículos
 *     summary: Lista todos os veículos
 *     responses:
 *       200:
 *         description: Lista de veículos
 */
router.get("/", controller.getAll);

/**
 * @openapi
 * /veiculos/{id}:
 *   get:
 *     tags:
 *       - Veículos
 *     summary: Busca veículo por id
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Encontrado
 *       404:
 *         description: Não encontrado
 */
router.get("/:id", controller.getById);

/**
 * @openapi
 * /veiculos:
 *   post:
 *     tags:
 *       - Veículos
 *     summary: Cria veículo
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/VeiculoCreate'
 *     responses:
 *       201:
 *         description: Criado
 */
router.post("/", validateSchema(veiculoCreateSchema), controller.create);

/**
 * @openapi
 * /veiculos/{id}:
 *   put:
 *     tags:
 *       - Veículos
 *     summary: Atualiza veículo
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
 *             $ref: '#/components/schemas/VeiculoUpdate'
 *     responses:
 *       200:
 *         description: Atualizado
 */
router.put("/:id", validateSchema(veiculoUpdateSchema), controller.update);

/**
 * @openapi
 * /veiculos/{id}:
 *   delete:
 *     tags:
 *       - Veículos
 *     summary: Remove veículo
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

