import { Request, Response } from "express";
import TurnXEmpModel from "./turnosxemp.model";

export default {
  getAllTurnXEmps: async (_req: Request, res: Response) => {
    try {
      const turnXEmp = await TurnXEmpModel.getAllTurnXEmps();

      return res.status(200).json({
        message: "TurnXEmp obtenidos correctamente",
        data: turnXEmp,
      });
    } catch (error) {
      console.log(error);

      return res.status(500).json({
        message: "Error al obtener los turnXEmp",
        data: (error as any)?.message ?? error,
      });
    }
  },
  getTurnXEmpBy: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const turnXEmp = await TurnXEmpModel.getTurnXEmpBy(id);

      return res.status(200).json({
        message: "TurnXEmp obtenido correctamente",
        data: turnXEmp,
      });
    } catch (error) {
      return res.status(500).json({
        message: "Error al obtener el turnXEmp",
        data: (error as any)?.message ?? error,
      });
    }
  },
  createTurnXEmp: async (req: Request, res: Response) => {
    try {
      const { idTurno, idEmpleado } = req.body;

      console.log(req.body);

      if (!idTurno || !idEmpleado) {
        return res.status(400).json({
          message: "Faltan datos en el body",
          data: null,
        });
      }

      await TurnXEmpModel.createTurnXEmp({
        idTurno,
        idEmpleado,
      });

      return res.status(200).json({
        message: "TurnXEmp creado correctamente",
        data: true,
      });
    } catch (error) {
      return res.status(500).json({
        message: "Error al crear el turnXEmp",
        data: (error as any)?.message ?? error,
      });
    }
  },
  deleteTurnXEmp: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;

      await TurnXEmpModel.deleteTurnXEmp(id);

      return res.status(200).json({
        message: "TurnXEmp eliminado correctamente",
        data: true,
      });
    } catch (error) {
      return res.status(500).json({
        message: "Error al eliminar el turnXEmp",
        data: (error as any)?.message ?? error,
      });
    }
  },
};
