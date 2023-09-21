import { Request, Response } from "express";
import EmpleadosModel from "./empleados.model";

export default {
  getAllEmpleados: async (_req: Request, res: Response) => {
    try {
      const empleados = await EmpleadosModel.getAllEmpleados();

      return res.status(200).json({
        message: "Empleados obtenidos correctamente",
        data: empleados,
      });
    } catch (error) {
      console.log(error);

      return res.status(500).json({
        message: "Error al obtener los empleados",
        data: (error as any)?.message ?? error,
      });
    }
  },
  getEmpleadoBy: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const empleado = await EmpleadosModel.getEmpleadoBy(id);

      return res.status(200).json({
        message: "Empleado obtenido correctamente",
        data: empleado,
      });
    } catch (error) {
      return res.status(500).json({
        message: "Error al obtener el empleado",
        data: (error as any)?.message ?? error,
      });
    }
  },
  createEmpleado: async (req: Request, res: Response) => {
    try {
      const { dni, nombre, direccion } = req.body;

      if (!dni || !nombre || !direccion) {
        return res.status(400).json({
          message: "Faltan datos en el body",
          data: null,
        });
      }

      await EmpleadosModel.createEmpleado({
        dni,
        nombre,
        direccion,
        id_puesto: 1,
      });

      return res.status(200).json({
        message: "Empleado creado correctamente",
        data: true,
      });
    } catch (error) {
      const [xd] = (error as any).message?.split("\n");
      return res.status(500).json({
        message: "Error al crear el empleado",
        data: xd ?? error,
      });
    }
  },
  updateEmpleado: async (req: Request, res: Response) => {
    try {
      const { id: id_empleado } = req.params;
      const { dni, nombre, direccion, url_imagen } = req.body;

      if (!id_empleado || !dni || !nombre || !direccion || !url_imagen) {
        return res.status(400).json({
          message: "Faltan datos en el body",
          data: null,
        });
      }

      await EmpleadosModel.updateEmpleado({
        id_empleado,
        dni,
        nombre,
        direccion,
        id_puesto: 1,
        tiene_acceso: 1,
        url_imagen,
      });

      return res.status(200).json({
        message: "Empleado actualizado correctamente",
        data: true,
      });
    } catch (error) {
      return res.status(500).json({
        message: "Error al crear el empleado",
        data: (error as any)?.message ?? error,
      });
    }
  },
  deleteEmpleado: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;

      await EmpleadosModel.deleteEmpleado(id);

      return res.status(200).json({
        message: "Empleado eliminado correctamente",
        data: true,
      });
    } catch (error) {
      return res.status(500).json({
        message: "Error al eliminar el empleado",
        data: (error as any)?.message ?? error,
      });
    }
  },
};
