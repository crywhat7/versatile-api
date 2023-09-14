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
        data: error,
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
        data: error,
      });
    }
  },
  createEmpleado: async (req: Request, res: Response) => {
    try {
      const { dni, nombre, direccion, id_puesto } = req.body;

      if (!dni || !nombre || !direccion || !id_puesto) {
        return res.status(400).json({
          message: "Faltan datos en el body",
          data: null,
        });
      }

      await EmpleadosModel.createEmpleado({
        dni,
        nombre,
        direccion,
        id_puesto,
      });

      return res.status(200).json({
        message: "Empleado creado correctamente",
        data: true,
      });
    } catch (error) {
      return res.status(500).json({
        message: "Error al crear el empleado",
        data: error,
      });
    }
  },
  updateEmpleado: async (req: Request, res: Response) => {
    try {
      const { id: id_empleado } = req.params;
      const { dni, nombre, direccion, id_puesto, tiene_acceso, url_imagen } =
        req.body;

      if (
        !id_empleado ||
        !dni ||
        !nombre ||
        !direccion ||
        !id_puesto ||
        !tiene_acceso ||
        !url_imagen
      ) {
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
        id_puesto,
        tiene_acceso,
        url_imagen,
      });

      return res.status(200).json({
        message: "Empleado actualizado correctamente",
        data: true,
      });
    } catch (error) {
      return res.status(500).json({
        message: "Error al crear el empleado",
        data: error,
      });
    }
  },
};
