import { Database } from "../../databases/oraclesql/db";
import { config } from "../../databases/oraclesql/config";
import { jsonParser } from "../../utils/json_array.parser";

const db = new Database(config);

export default {
  getAllCirugias: async () => {
    const query = "SELECT TO_CHAR(get_cirugias) AS result FROM DUAL";
    const result = await db.execute(query);

    const data = jsonParser(result);

    return data;
  },

  getCirugiaBy: async (id: string) => {
    const query = `SELECT TO_CHAR(get_cirugia_by('${id}')) AS result FROM DUAL`;
    const result = await db.execute(query);

    const data = jsonParser(result);

    return data;
  },

  createCirugia: async ({
    nombre,
    descripcion,
    duracionEstimada,
    idRiesgo,
  }: {
    nombre: string;
    descripcion: string;
    duracionEstimada: number;
    idRiesgo: string;
  }) => {
    const query = `CALL insert_cirugia('${nombre}', '${descripcion}', ${duracionEstimada}, '${idRiesgo}')`;

    await db.execute(query);

    return true;
  },

  updateCirugia: async ({
    idCirugia,
    nombre,
    descripcion,
    duracionEstimada,
    idRiesgo,
  }: {
    idCirugia: string;
    nombre: string;
    descripcion: string;
    duracionEstimada: number;
    idRiesgo: string;
  }) => {
    const query = `CALL update_cirugia('${idCirugia}', '${nombre}', '${descripcion}', '${duracionEstimada}', '${idRiesgo}')`;

    await db.execute(query);

    return true;
  },

  deleteCirugia: async (id: string) => {
    const query = `CALL delete_cirugia('${id}')`;

    await db.execute(query);

    return true;
  },
};
