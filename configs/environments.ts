export interface EnvironmentConfig {
  baseUrl: string;
}

export enum Environment {
  dev = "dev",
  qa = "qa",
  stage = "stage",
  prod = "prod",
  // other environment ...
}

export const environmentConfig: {
  [key in Environment | string]: EnvironmentConfig;
} = {
  dev: {
    baseUrl: "",
  },
  qa: {
    baseUrl: "",
  },
  stage: {
    baseUrl: "",
  },
  prod: {
    baseUrl: "https://en.wikipedia.org/wiki/",
  },
  // other environment ...
};

export const authConfig = {
  credentials: {
    login: process.env.LOGIN || "",
    password: process.env.PASSWORD || "",
  },
};
