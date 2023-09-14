export const arrayAgg = (table: string) => {
  return `SELECT JSON_ARRAYAGG(JSON_OBJECT(*) format json) from ${table}`;
};

export const jsonObject = (
  table: string,
  params: {
    name: string;
    type: string;
    value: string | number;
  }[]
) => {
  const wheres = params.map((param) => {
    return `${param.name} = ${getValue(param.type, param.value)}`;
  });

  const query = `SELECT JSON_OBJECT(*) from ${table} where ${
    wheres.length > 0 ? wheres.join(" and ") : "1=1"
  }`;

  return query;
};

const getValue = (type: string, value: string | number) => {
  switch (type) {
    case "string":
      return `'${value}'`;
    case "number":
      return `${value}`;
    default:
      return `'${value}'`;
  }
};
