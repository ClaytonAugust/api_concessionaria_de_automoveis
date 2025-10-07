import { Router } from "express";
import clienteRoutes from "./clienteRoutes";
import veiculoRoutes from "./veiculoRoutes";
import vendaRoutes from "./vendaRoutes";
import vendedorRoutes from "./vendedorRoutes"; // NOVO
import enderecoRoutes from "./enderecoRoutes"; // NOVO

const routes = Router();

routes.use("/clientes", clienteRoutes);
routes.use("/veiculos", veiculoRoutes);
routes.use("/vendas", vendaRoutes);
routes.use("/vendedores", vendedorRoutes); // NOVO
routes.use("/enderecos", enderecoRoutes); // NOVO

export default routes;