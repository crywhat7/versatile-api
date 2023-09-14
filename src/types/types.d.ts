import * as oracledb from "oracledb";

export interface DatabaseConfig extends oracledb.ConnectionAttributes {
  host: string;
  port: number;
  database: string;
}
