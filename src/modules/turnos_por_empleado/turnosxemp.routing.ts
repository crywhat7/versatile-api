import { Router } from "express";

import TurnXEmpsController from "./turnosxemp.controller";

const router = Router();

router.get("/", TurnXEmpsController.getAllTurnXEmps);
router.get("/:id", TurnXEmpsController.getTurnXEmpBy);
router.post("/", TurnXEmpsController.createTurnXEmp);
router.delete("/:id", TurnXEmpsController.deleteTurnXEmp);

export default router;
