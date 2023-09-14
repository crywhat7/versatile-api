import { Database } from "../../databases/oraclesql/db";
import { config } from "../../databases/oraclesql/config";
import { jsonParser } from "../../utils/json_array.parser";
import { arrayAgg, jsonObject } from "../../utils/json_queries.helper";

const db = new Database(config);

export default {
  getAllEmpleados: async () => {
    const query = arrayAgg("EMPLEADOS");
    const result = await db.execute(query);

    const data = jsonParser(result);

    return data;
  },

  getEmpleadoBy: async (id: string) => {
    const query = jsonObject("EMPLEADOS", [
      { name: "ID_EMPLEADO", type: "string", value: id },
    ]);
    const result = await db.execute(query);

    const data = jsonParser(result);

    return data;
  },
};
