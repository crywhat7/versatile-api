import { Database } from "../../databases/oraclesql/db";
import { config } from "../../databases/oraclesql/config";
import { jsonParser } from "../../utils/json_array.parser";

const db = new Database(config);

export default {
  getAllTurnXEmps: async () => {
    const query = "SELECT TO_CHAR(get_turnXEmps) AS result FROM DUAL";
    const result = await db.execute(query);

    const data = jsonParser(result);

    return data;
  },

  getTurnXEmpBy: async (id: string) => {
    const query = `SELECT TO_CHAR(get_turnXEmp_by('${id}')) AS result FROM DUAL`;
    const result = await db.execute(query);

    const data = jsonParser(result);

    return data;
  },

  createTurnXEmp: async ({
    idTurno,
    idEmpleado,
  }: {
    idTurno: string;
    idEmpleado: string;
  }) => {
    const query = `CALL insert_turnXEmp('${idEmpleado}', '${idTurno}')`;

    await db.execute(query);

    return true;
  },

  deleteTurnXEmp: async (id: string) => {
    const query = `CALL delete_turnXEmp('${id}')`;

    await db.execute(query);

    return true;
  },
};
