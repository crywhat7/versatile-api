import { Database } from "../../databases/oraclesql/db";
import { config } from "../../databases/oraclesql/config";
import { jsonParser } from "../../utils/json_array.parser";

const db = new Database(config);

export default {
  getAllDuenios: async () => {
    const query = "SELECT TO_CHAR(get_duenios) AS result FROM DUAL";
    const result = await db.execute(query);

    const data = jsonParser(result);

    return data;
  },

  getDuenioBy: async (id: string) => {
    const query = `SELECT TO_CHAR(get_duenio_by('${id}')) AS result FROM DUAL`;
    const result = await db.execute(query);

    const data = jsonParser(result);

    return data;
  },

  createDuenio: async ({
    dni,
    nombre,
    direccion,
    url_imagen,
  }: {
    dni: string;
    nombre: string;
    direccion: string;
    url_imagen: string;
  }) => {
    const query = `CALL insert_duenio('${dni}', '${nombre}', '${direccion}', '${url_imagen}')`;

    await db.execute(query);

    return true;
  },

  updateDuenio: async ({
    id_duenio,
    dni,
    nombre,
    direccion,
    url_imagen,
  }: {
    id_duenio: string;
    dni: string;
    nombre: string;
    direccion: string;
    url_imagen: string;
  }) => {
    const query = `CALL update_duenio('${id_duenio}', '${dni}', '${nombre}', '${direccion}', '${url_imagen}')`;

    await db.execute(query);

    return true;
  },

  deleteDuenio: async (id: string) => {
    const query = `CALL delete_duenio('${id}')`;

    await db.execute(query);

    return true;
  },
};
