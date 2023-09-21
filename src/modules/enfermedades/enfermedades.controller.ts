import { Request, Response } from "express";
import EnfermedadesModel from "./enfermedades.model";

export default {
  getAllEnfermedades: async (_req: Request, res: Response) => {
    try {
      const enfermedades = await EnfermedadesModel.getAllEnfermedades();

      return res.status(200).json({
        message: "Enfermedades obtenidas correctamente",
        data: enfermedades,
      });
    } catch (error) {
      console.log(error);

      return res.status(500).json({
        message: "Error al obtener los enfermedades",
        data: (error as any)?.message ?? error,
      });
    }
  },
  getEnfermedadBy: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const enfermedad = await EnfermedadesModel.getEnfermedadBy(id);

      return res.status(200).json({
        message: "Enfermedad obtenida correctamente",
        data: enfermedad,
      });
    } catch (error) {
      return res.status(500).json({
        message: "Error al obtener el enfermedad",
        data: (error as any)?.message ?? error,
      });
    }
  },
  createEnfermedad: async (req: Request, res: Response) => {
    try {
      const { nombre } = req.body;

      if (!nombre) {
        return res.status(400).json({
          message: "Faltan datos en el body",
          data: null,
        });
      }

      await EnfermedadesModel.createEnfermedad({
        nombre,
      });

      return res.status(200).json({
        message: "Enfermedad creada correctamente",
        data: true,
      });
    } catch (error) {
      return res.status(500).json({
        message: "Error al crear el enfermedad",
        data: (error as any)?.message ?? error,
      });
    }
  },
  updateEnfermedad: async (req: Request, res: Response) => {
    try {
      const { id: id_enfermedad } = req.params;
      const { nombre } = req.body;

      if (!id_enfermedad || !nombre) {
        return res.status(400).json({
          message: "Faltan datos en el body",
          data: null,
        });
      }

      await EnfermedadesModel.updateEnfermedad({
        idEnfermedad: id_enfermedad,
        nombre,
      });

      return res.status(200).json({
        message: "Enfermedad actualizado correctamente",
        data: true,
      });
    } catch (error) {
      return res.status(500).json({
        message: "Error al actualizar el enfermedad",
        data: (error as any)?.message ?? error,
      });
    }
  },
  deleteEnfermedad: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;

      await EnfermedadesModel.deleteEnfermedad(id);

      return res.status(200).json({
        message: "Enfermedad eliminado correctamente",
        data: true,
      });
    } catch (error) {
      return res.status(500).json({
        message: "Error al eliminar el enfermedad",
        data: (error as any)?.message ?? error,
      });
    }
  },
};
