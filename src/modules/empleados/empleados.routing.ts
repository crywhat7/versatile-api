import { Router } from "express";

import EmpleadosController from "./empleados.controller";

const router = Router();

router.get("/", EmpleadosController.getAllEmpleados);
router.get("/:id", EmpleadosController.getEmpleadoBy);
router.post("/", EmpleadosController.createEmpleado);

export default router;
