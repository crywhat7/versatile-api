import { Router } from "express";

import EmpleadosController from "./empleados.controller";

const router = Router();

router.get("/", EmpleadosController.getAllEmpleados);
router.get("/:id", EmpleadosController.getEmpleadoBy);

export default router;
