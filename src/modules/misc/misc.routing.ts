import { Router } from "express";

import MiscController from "./misc.controller";

const router = Router();

router.get("/turnos", MiscController.getAllTurnos);
router.get("/auditoria", MiscController.getAllAuditoria);
router.get("/familias", MiscController.getAllFamilias);
router.get("/razas", MiscController.getAllRazas);
router.get("/especies", MiscController.getAllEspecies);
router.get("/citas", MiscController.getAllCitas);

export default router;
