import { Database } from "../../databases/oraclesql/db";
import { config } from "../../databases/oraclesql/config";
import { jsonParser } from "../../utils/json_array.parser";

const db = new Database(config);

export default {
  getAllPacientes: async () => {
    const query = "SELECT TO_CHAR(get_pacientes) AS result FROM DUAL";
    const result = await db.execute(query);

    const data = jsonParser(result);

    return data;
  },

  getPacienteBy: async (id: string) => {
    const query = `SELECT TO_CHAR(get_paciente_by('${id}')) AS result FROM DUAL`;
    const result = await db.execute(query);

    const data = jsonParser(result);

    return data;
  },

  createPaciente: async ({
    nombre,
    idEspecie,
    idRaza,
    idDuenio,
    idMedico,
    urlImagen,
  }: {
    nombre: string;
    idEspecie: string;
    idRaza: string;
    idDuenio: string;
    idMedico: string;
    urlImagen: string;
  }) => {
    const query = `CALL insert_paciente('${nombre}', '${idEspecie}', '${idRaza}', '${idDuenio}', '${idMedico}', '${urlImagen}')`;

    await db.execute(query);

    return true;
  },

  updatePaciente: async ({
    idPaciente,
    nombre,
    idEspecie,
    idRaza,
    idDuenio,
    idMedico,
    urlImagen,
  }: {
    idPaciente: string;
    nombre: string;
    idEspecie: string;
    idRaza: string;
    idDuenio: string;
    idMedico: string;
    urlImagen: string;
  }) => {
    const query = `CALL update_paciente('${idPaciente}', '${nombre}', '${idEspecie}', '${idRaza}', '${idDuenio}', '${idMedico}', '${urlImagen}')`;

    await db.execute(query);

    return true;
  },

  deletePaciente: async (id: string) => {
    const query = `CALL delete_paciente('${id}')`;

    await db.execute(query);

    return true;
  },
};
