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
};
