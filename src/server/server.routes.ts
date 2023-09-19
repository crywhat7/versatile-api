import { Router } from "express";

import EmpleadosRouter from "../modules/empleados/empleados.routing";
import DueniosRouter from "../modules/duenios/duenios.routing";

const router = Router();

router.get("/", (_req, res) => {
  res.status(200).json({
    message: "Bienvenido al API del Proyecto de CryWhat",
  });
});

router.use("/empleados", EmpleadosRouter);
router.use("/duenios", DueniosRouter);

// Soportar la ruta 404
router.use("*", (_req, res) => {
  res.status(404).json({
    message: "Ruta no encontrada",
    data: null,
  });
});

export default router;
