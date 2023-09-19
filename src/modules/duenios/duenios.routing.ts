import { Router } from "express";

import DueniosController from "./duenios.controller";

const router = Router();

router.get("/", DueniosController.getAllDuenios);
router.get("/:id", DueniosController.getDuenioBy);
router.post("/", DueniosController.createDuenio);
router.put("/:id", DueniosController.updateDuenio);
router.delete("/:id", DueniosController.deleteDuenio);

export default router;
