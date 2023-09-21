import { Database } from "../../databases/oraclesql/db";
import { config } from "../../databases/oraclesql/config";
import { jsonParser } from "../../utils/json_array.parser";

const db = new Database(config);

export default {
  getAllTurnos: async () => {
    const query = "SELECT TO_CHAR(get_turnos) AS result FROM DUAL";
    const result = await db.execute(query);

    const data = jsonParser(result);

    return data;
  },
  getAllAuditorias: async () => {
    const query = "SELECT TO_CHAR(get_auditoria) AS result FROM DUAL";
    const result = await db.execute(query);

    const data = jsonParser(result);

    return data;
  },
  getAllFamilias: async () => {
    const query = "SELECT TO_CHAR(get_familias) AS result FROM DUAL";
    const result = await db.execute(query);

    const data = jsonParser(result);

    return data;
  },
  getAllRazas: async () => {
    const query = "SELECT TO_CHAR(get_razas) AS result FROM DUAL";
    const result = await db.execute(query);

    const data = jsonParser(result);

    return data;
  },
  getAllEspecies: async () => {
    const query = "SELECT TO_CHAR(get_especies) AS result FROM DUAL";
    const result = await db.execute(query);

    const data = jsonParser(result);

    return data;
  },
  getAllCitas: async () => {
    const query = "SELECT TO_CHAR(get_citas) AS result FROM DUAL";
    const result = await db.execute(query);

    const data = jsonParser(result);

    return data;
  },
};
