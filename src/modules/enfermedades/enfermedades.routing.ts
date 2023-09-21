import { Router } from "express";

import EnfermedadesController from "./enfermedades.controller";

const router = Router();

router.get("/", EnfermedadesController.getAllEnfermedades);
router.get("/:id", EnfermedadesController.getEnfermedadBy);
router.post("/", EnfermedadesController.createEnfermedad);
router.put("/:id", EnfermedadesController.updateEnfermedad);
router.delete("/:id", EnfermedadesController.deleteEnfermedad);

export default router;
