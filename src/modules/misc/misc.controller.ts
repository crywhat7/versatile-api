import { Request, Response } from "express";
import Misc from "./misc.model";

export default {
  getAllTurnos: async (_req: Request, res: Response) => {
    try {
      const turnos = await Misc.getAllTurnos();

      return res.status(200).json({
        message: "Turnos obtenidos correctamente",
        data: turnos,
      });
    } catch (error) {
      console.log(error);

      return res.status(500).json({
        message: "Error al obtener los turnos",
        data: (error as any)?.message ?? error,
      });
    }
  },
  getAllAuditoria: async (_req: Request, res: Response) => {
    try {
      const auditoria = await Misc.getAllAuditorias();

      return res.status(200).json({
        message: "Auditoria obtenida correctamente",
        data: auditoria,
      });
    } catch (error) {
      console.log(error);

      return res.status(500).json({
        message: "Error al obtener la auditoria",
        data: (error as any)?.message ?? error,
      });
    }
  },
  getAllFamilias: async (_req: Request, res: Response) => {
    try {
      const familias = await Misc.getAllFamilias();

      return res.status(200).json({
        message: "Familias obtenidas correctamente",
        data: familias,
      });
    } catch (error) {
      console.log(error);

      return res.status(500).json({
        message: "Error al obtener las familias",
        data: (error as any)?.message ?? error,
      });
    }
  },
  getAllRazas: async (_req: Request, res: Response) => {
    try {
      const razas = await Misc.getAllRazas();

      return res.status(200).json({
        message: "Razas obtenidas correctamente",
        data: razas,
      });
    } catch (error) {
      console.log(error);

      return res.status(500).json({
        message: "Error al obtener las razas",
        data: (error as any)?.message ?? error,
      });
    }
  },
  getAllEspecies: async (_req: Request, res: Response) => {
    try {
      const especies = await Misc.getAllEspecies();

      return res.status(200).json({
        message: "Especies obtenidas correctamente",
        data: especies,
      });
    } catch (error) {
      console.log(error);

      return res.status(500).json({
        message: "Error al obtener las especies",
        data: (error as any)?.message ?? error,
      });
    }
  },
  getAllCitas: async (_req: Request, res: Response) => {
    try {
      const citas = await Misc.getAllCitas();

      return res.status(200).json({
        message: "Citas obtenidas correctamente",
        data: citas,
      });
    } catch (error) {
      console.log(error);

      return res.status(500).json({
        message: "Error al obtener las citas",
        data: (error as any)?.message ?? error,
      });
    }
  },
};
