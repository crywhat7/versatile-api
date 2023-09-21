import { Router } from "express";

import CirugiasController from "./cirugias.controller";

const router = Router();

router.get("/", CirugiasController.getAllCirugias);
router.get("/:id", CirugiasController.getCirugiaBy);
router.post("/", CirugiasController.createCirugia);
router.put("/:id", CirugiasController.updateCirugia);
router.delete("/:id", CirugiasController.deleteCirugia);

export default router;
