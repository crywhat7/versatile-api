import { Router } from "express";

import EmpleadosRouter from "../modules/empleados/empleados.routing";

const router = Router();

router.get("/", (_req, res) => {
  res.status(200).json({
    message: "Bienvenido al API del Proyecto de CryWhat",
  });
});

router.use("/empleados", EmpleadosRouter);

export default router;
