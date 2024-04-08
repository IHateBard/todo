import { TConfig } from "./declarations";

export const localConfig: TConfig = {
  stand: "local",
  host: {
    api: "http://localhost:3000/",
  },

  mock: {
    api: true,
  },
};
