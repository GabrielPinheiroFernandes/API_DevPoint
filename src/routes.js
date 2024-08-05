import { Router } from "express";
import controllerTarefa from "./controllers/controller.tarefa.js";

const routes = Router();

routes.get("/tarefas/:Qparams?", controllerTarefa.Listar)

routes.post("/tarefas", controllerTarefa.Inserir)

routes.put("/tarefas/:id_tarefa", controllerTarefa.Editar)

routes.delete("/tarefas/:id_tarefa",controllerTarefa.Excluir)


export default routes;