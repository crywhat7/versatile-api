import { IConfiguration } from "./types/general-types";
import { xd } from "./xd";
console.log("Hello World!");

const config: IConfiguration = {
  x: 123,
};

console.log(config);
console.log(xd(123));
