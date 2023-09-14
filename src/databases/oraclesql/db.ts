import { DatabaseConfig } from "../../types/types";
import OracleDB, { BindParameters } from "oracledb";

export class Database {
  private config: DatabaseConfig;
  private connection: OracleDB.Connection | undefined;
  constructor(config: DatabaseConfig) {
    this.config = config;
    this.connect();
  }
  async connect() {
    const connection = await OracleDB.getConnection({
      user: this.config.user,
      password: this.config.password,
      connectString: `${this.config.host}:${this.config.port}/${this.config.database}`,
    });
    this.connection = connection;
    console.log(`Connecting to database ${this.config.database}...`);
  }

  async execute<T>(query: string, params?: BindParameters) {
    if (!this.connection) {
      throw new Error("Connection not established");
    }

    const result = await this.connection.execute<T>(query, params ?? {});

    return result;
  }
}
