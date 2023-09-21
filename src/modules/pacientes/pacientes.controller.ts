import { Request, Response } from "express";
import PacientesModel from "./pacientes.model";

export default {
  getAllPacientes: async (_req: Request, res: Response) => {
    try {
      const pacientes = await PacientesModel.getAllPacientes();

      return res.status(200).json({
        message: "Pacientes obtenidos correctamente",
        data: pacientes,
      });
    } catch (error) {
      console.log(error);

      return res.status(500).json({
        message: "Error al obtener los pacientes",
        data: (error as any)?.message ?? error,
      });
    }
  },
  getPacienteBy: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const paciente = await PacientesModel.getPacienteBy(id);

      return res.status(200).json({
        message: "Paciente obtenido correctamente",
        data: paciente,
      });
    } catch (error) {
      return res.status(500).json({
        message: "Error al obtener el paciente",
        data: (error as any)?.message ?? error,
      });
    }
  },
  createPaciente: async (req: Request, res: Response) => {
    try {
      const { nombre, idEspecie, idRaza, idDuenio, idMedico, urlImagen } =
        req.body;

      if (
        !nombre ||
        !idEspecie ||
        !idRaza ||
        !idDuenio ||
        !idMedico ||
        !urlImagen
      ) {
        return res.status(400).json({
          message: "Faltan datos en el body",
          data: null,
        });
      }

      await PacientesModel.createPaciente({
        nombre,
        idEspecie,
        idRaza,
        idDuenio,
        idMedico,
        urlImagen,
      });

      return res.status(200).json({
        message: "Paciente creado correctamente",
        data: true,
      });
    } catch (error) {
      return res.status(500).json({
        message: "Error al crear el paciente",
        data: (error as any)?.message ?? error,
      });
    }
  },
  updatePaciente: async (req: Request, res: Response) => {
    try {
      const { id: id_paciente } = req.params;
      const { nombre, idEspecie, idRaza, idDuenio, idMedico, urlImagen } =
        req.body;

      if (
        !id_paciente ||
        !nombre ||
        !idEspecie ||
        !idRaza ||
        !idDuenio ||
        !idMedico ||
        !urlImagen
      ) {
        return res.status(400).json({
          message: "Faltan datos en el body",
          data: null,
        });
      }

      await PacientesModel.updatePaciente({
        idPaciente: id_paciente,
        nombre,
        idEspecie,
        idRaza,
        idDuenio,
        idMedico,
        urlImagen,
      });

      return res.status(200).json({
        message: "Paciente actualizado correctamente",
        data: true,
      });
    } catch (error) {
      return res.status(500).json({
        message: "Error al actualizar el paciente",
        data: (error as any)?.message ?? error,
      });
    }
  },
  deletePaciente: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;

      await PacientesModel.deletePaciente(id);

      return res.status(200).json({
        message: "Paciente eliminado correctamente",
        data: true,
      });
    } catch (error) {
      return res.status(500).json({
        message: "Error al eliminar el paciente",
        data: (error as any)?.message ?? error,
      });
    }
  },
};
