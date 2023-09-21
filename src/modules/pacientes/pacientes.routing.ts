import { Router } from "express";

import PacientesController from "./pacientes.controller";

const router = Router();

router.get("/", PacientesController.getAllPacientes);
router.get("/:id", PacientesController.getPacienteBy);
router.post("/", PacientesController.createPaciente);
router.put("/:id", PacientesController.updatePaciente);
router.delete("/:id", PacientesController.deletePaciente);

export default router;
