export interface IGeneralConfiguration {
  dataBase: IDataBaseConfiguration;
  tables: ITable[];
  functions: IFunction[];
}

export interface IDataBaseConfiguration {
  type: EDataBaseType;
  host: IP;
  port: number;
  username: string;
  password: string;
  database: string;
}

type IP = `${string}.${string}.${string}.${string}`;

export interface ITable {
  tableName: string;
  tableSchema: string;
  columns: IColumn[];
}

export interface IColumn {
  columnName: string;
  dataType: EDataBaseColumnDataType;
  isNullable: boolean;
  isPrimary: boolean;
  isUnique: boolean;
  isGenerated: boolean;
}

export interface IFunction {
  functionName: string;
  functionSchema: string;
  parameters: IParameter[];
  returnType: EDataBaseColumnDataType;
}

export interface IParameter {
  parameterName: string;
  dataType: EDataBaseColumnDataType;
  isNullable: boolean;
}

export type EDataBaseType = "postgres" | "mysql" | "oracle";
export type EDataBaseColumnDataType =
  | "integer"
  | "numeric"
  | "text"
  | "char"
  | "varchar"
  | "uuid"
  | "date"
  | "timestamp"
  | "interval"
  | "boolean"
  | "json";
