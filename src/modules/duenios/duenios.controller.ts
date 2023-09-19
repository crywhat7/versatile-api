import { Request, Response } from "express";
import DueniosModel from "./duenios.model";

export default {
  getAllDuenios: async (_req: Request, res: Response) => {
    try {
      const duenios = await DueniosModel.getAllDuenios();

      return res.status(200).json({
        message: "Dueños obtenidos correctamente",
        data: duenios,
      });
    } catch (error) {
      console.log(error);

      return res.status(500).json({
        message: "Error al obtener los dueños",
        data: error,
      });
    }
  },
  getDuenioBy: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const duenio = await DueniosModel.getDuenioBy(id);

      return res.status(200).json({
        message: "Dueño obtenido correctamente",
        data: duenio,
      });
    } catch (error) {
      return res.status(500).json({
        message: "Error al obtener el dueño",
        data: error,
      });
    }
  },
  createDuenio: async (req: Request, res: Response) => {
    try {
      const { dni, nombre, direccion, url_imagen } = req.body;

      if (!dni || !nombre || !direccion || !url_imagen) {
        return res.status(400).json({
          message: "Faltan datos en el body",
          data: null,
        });
      }

      await DueniosModel.createDuenio({
        dni,
        nombre,
        direccion,
        url_imagen,
      });

      return res.status(200).json({
        message: "Dueño creado correctamente",
        data: true,
      });
    } catch (error) {
      return res.status(500).json({
        message: "Error al crear el dueño",
        data: error,
      });
    }
  },
  updateDuenio: async (req: Request, res: Response) => {
    try {
      const { id: id_duenio } = req.params;
      const { dni, nombre, direccion, url_imagen } = req.body;

      if (!id_duenio || !dni || !nombre || !direccion || !url_imagen) {
        return res.status(400).json({
          message: "Faltan datos en el body",
          data: null,
        });
      }

      await DueniosModel.updateDuenio({
        id_duenio,
        dni,
        nombre,
        direccion,
        url_imagen,
      });

      return res.status(200).json({
        message: "Dueño actualizado correctamente",
        data: true,
      });
    } catch (error) {
      return res.status(500).json({
        message: "Error al actualizar el dueño",
        data: error,
      });
    }
  },
  deleteDuenio: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;

      await DueniosModel.deleteDuenio(id);

      return res.status(200).json({
        message: "Dueño eliminado correctamente",
        data: true,
      });
    } catch (error) {
      return res.status(500).json({
        message: "Error al eliminar el dueño",
        data: error,
      });
    }
  },
};
