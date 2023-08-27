import { IGeneralConfiguration } from "./types/general-types";

const config: IGeneralConfiguration = {
  dataBase: {
    database: "test",
    host: "192.168.0.1",
    password: "123456",
    port: 5432,
    type: "oracle",
    username: "postgres",
  },
  tables: [
    {
      tableName: "test",
      tableSchema: "public",
      columns: [
        {
          columnName: "id",
          dataType: "timestamp",
          isGenerated: true,
          isPrimary: true,
          isUnique: true,
          isNullable: false,
        },
      ],
    },
  ],
  functions: [],
};

console.log(JSON.stringify(config));
