import { Request, Response } from "express";
import CirugiasModel from "./cirugias.model";

export default {
  getAllCirugias: async (_req: Request, res: Response) => {
    try {
      const cirugias = await CirugiasModel.getAllCirugias();

      return res.status(200).json({
        message: "Cirugias obtenidos correctamente",
        data: cirugias,
      });
    } catch (error) {
      console.log(error);

      return res.status(500).json({
        message: "Error al obtener los cirugias",
        data: (error as any)?.message ?? error,
      });
    }
  },
  getCirugiaBy: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const cirugia = await CirugiasModel.getCirugiaBy(id);

      return res.status(200).json({
        message: "Cirugia obtenido correctamente",
        data: cirugia,
      });
    } catch (error) {
      return res.status(500).json({
        message: "Error al obtener el cirugia",
        data: (error as any)?.message ?? error,
      });
    }
  },
  createCirugia: async (req: Request, res: Response) => {
    try {
      const { nombre, descripcion, duracionEstimada, idRiesgo } = req.body;

      if (!nombre || !descripcion || !duracionEstimada || !idRiesgo) {
        return res.status(400).json({
          message: "Faltan datos en el body",
          data: null,
        });
      }

      await CirugiasModel.createCirugia({
        nombre,
        descripcion,
        duracionEstimada,
        idRiesgo,
      });

      return res.status(200).json({
        message: "Cirugia creado correctamente",
        data: true,
      });
    } catch (error) {
      return res.status(500).json({
        message: "Error al crear el cirugia",
        data: (error as any)?.message ?? error,
      });
    }
  },
  updateCirugia: async (req: Request, res: Response) => {
    try {
      const { id: id_cirugia } = req.params;
      const { nombre, descripcion, duracionEstimada, idRiesgo } = req.body;

      if (
        !id_cirugia ||
        !nombre ||
        !descripcion ||
        !duracionEstimada ||
        !idRiesgo
      ) {
        return res.status(400).json({
          message: "Faltan datos en el body",
          data: null,
        });
      }

      await CirugiasModel.updateCirugia({
        idCirugia: id_cirugia,
        nombre,
        descripcion,
        duracionEstimada,
        idRiesgo,
      });

      return res.status(200).json({
        message: "Cirugia actualizado correctamente",
        data: true,
      });
    } catch (error) {
      return res.status(500).json({
        message: "Error al actualizar el cirugia",
        data: (error as any)?.message ?? error,
      });
    }
  },
  deleteCirugia: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;

      await CirugiasModel.deleteCirugia(id);

      return res.status(200).json({
        message: "Cirugia eliminado correctamente",
        data: true,
      });
    } catch (error) {
      return res.status(500).json({
        message: "Error al eliminar el cirugia",
        data: (error as any)?.message ?? error,
      });
    }
  },
};
