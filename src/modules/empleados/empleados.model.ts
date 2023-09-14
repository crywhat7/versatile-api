import { Database } from "../../databases/oraclesql/db";
import { config } from "../../databases/oraclesql/config";
import { jsonParser } from "../../utils/json_array.parser";

const db = new Database(config);

export default {
  getAllEmpleados: async () => {
    // const query = arrayAgg("EMPLEADOS");
    const query = "SELECT TO_CHAR(get_empleados) AS result FROM DUAL";
    const result = await db.execute(query);

    const data = jsonParser(result);

    return data;
  },

  getEmpleadoBy: async (id: string) => {
    const query = `SELECT TO_CHAR(get_empleado_by('${id}')) AS result FROM DUAL`;
    const result = await db.execute(query);

    const data = jsonParser(result);

    return data;
  },

  createEmpleado: async ({
    dni,
    nombre,
    direccion,
    id_puesto,
  }: {
    dni: string;
    nombre: string;
    direccion: string;
    id_puesto: number;
  }) => {
    const query = `CALL insert_empleado('${dni}', '${nombre}', '${direccion}', ${id_puesto})`;

    await db.execute(query);

    return true;
  },
};
