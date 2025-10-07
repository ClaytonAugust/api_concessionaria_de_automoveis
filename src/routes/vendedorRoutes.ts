import { Router } from "express";
import * as controller from "../controllers/vendedorController";
import { validateSchema } from "../middlewares/validateSchema";
import { vendedorCreateSchema, vendedorUpdateSchema } from "../schemas/vendedorSchema";

const router = Router();

/**
 * @openapi
 * /vendedores:
 *   get:
 *     tags:
 *       - Vendedores
 *     summary: Lista todos os vendedores
 *     responses:
 *       200:
 *         description: Lista de vendedores
 */
router.get("/", controller.getAll);

/**
 * @openapi
 * /vendedores/{id}:
 *   get:
 *     tags:
 *       - Vendedores
 *     summary: Busca um vendedor por ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Vendedor encontrado
 *       404:
 *         description: Não encontrado
 */
router.get("/:id", controller.getById);

/**
 * @openapi
 * /vendedores:
 *   post:
 *     tags:
 *       - Vendedores
 *     summary: Cria um novo vendedor
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/VendedorCreate'
 *     responses:
 *       201:
 *         description: Vendedor criado
 */
router.post("/", validateSchema(vendedorCreateSchema), controller.create);

/**
 * @openapi
 * /vendedores/{id}:
 *   put:
 *     tags:
 *       - Vendedores
 *     summary: Atualiza um vendedor existente
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
 *             $ref: '#/components/schemas/VendedorUpdate'
 *     responses:
 *       200:
 *         description: Vendedor atualizado
 */
router.put("/:id", validateSchema(vendedorUpdateSchema), controller.update);

/**
 * @openapi
 * /vendedores/{id}:
 *   delete:
 *     tags:
 *       - Vendedores
 *     summary: Remove um vendedor
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Vendedor removido
 */
router.delete("/:id", controller.remove);

export default router;
