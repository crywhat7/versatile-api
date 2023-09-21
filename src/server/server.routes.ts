import { Router } from "express";

import EmpleadosRouter from "../modules/empleados/empleados.routing";
import DueniosRouter from "../modules/duenios/duenios.routing";
import PacientesRouter from "../modules/pacientes/pacientes.routing";
import CirugiasRouter from "../modules/cirugias/cirugias.routing";
import TurnosXEmpRouter from "../modules/turnos_por_empleado/turnosxemp.routing";
import EnfermedadesRouter from "../modules/enfermedades/enfermedades.routing";
import MiscRouter from "../modules/misc/misc.routing";

const router = Router();

router.get("/", (_req, res) => {
  res.status(200).json({
    message: "Bienvenido al API del Proyecto de CryWhat",
  });
});

router.use("/empleados", EmpleadosRouter);
router.use("/duenios", DueniosRouter);
router.use("/pacientes", PacientesRouter);
router.use("/cirugias", CirugiasRouter);
router.use("/enfermedades", EnfermedadesRouter);
router.use("/turnosxemp", TurnosXEmpRouter);
router.use("/misc", MiscRouter);

// Soportar la ruta 404
router.use("*", (_req, res) => {
  res.status(404).json({
    message: "Ruta no encontrada",
    data: null,
  });
});

export default router;
