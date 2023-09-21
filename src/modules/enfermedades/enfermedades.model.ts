import { Database } from "../../databases/oraclesql/db";
import { config } from "../../databases/oraclesql/config";
import { jsonParser } from "../../utils/json_array.parser";

const db = new Database(config);

export default {
  getAllEnfermedades: async () => {
    const query = "SELECT TO_CHAR(get_enfermedades) AS result FROM DUAL";
    const result = await db.execute(query);

    const data = jsonParser(result);

    return data;
  },

  getEnfermedadBy: async (id: string) => {
    const query = `SELECT TO_CHAR(get_enfermedad_by('${id}')) AS result FROM DUAL`;
    const result = await db.execute(query);

    const data = jsonParser(result);

    return data;
  },

  createEnfermedad: async ({ nombre }: { nombre: string }) => {
    const query = `CALL insert_enfermedad('${nombre}')`;

    await db.execute(query);

    return true;
  },

  updateEnfermedad: async ({
    idEnfermedad,
    nombre,
  }: {
    idEnfermedad: string;
    nombre: string;
  }) => {
    const query = `CALL update_enfermedad('${idEnfermedad}', '${nombre}')`;

    await db.execute(query);

    return true;
  },

  deleteEnfermedad: async (id: string) => {
    const query = `CALL delete_enfermedad('${id}')`;

    await db.execute(query);

    return true;
  },
};
