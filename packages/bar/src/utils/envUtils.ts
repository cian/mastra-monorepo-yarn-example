export const ENVS = ["local", "dev", "sandbox", "prod"] as const;
export type Env = (typeof ENVS)[number];
export type EnvMap<T> = {
  [key in Env]: T;
};

function isValidEnv(env: string): env is Env {
  return ENVS.includes(env as Env);
}

export const getEnv = (): Env => {
  const env = process.env.APP_ENV ?? "";
  if (!isValidEnv(env)) {
    throw new Error(`invalid ENV value: ${env}`);
  }
  return env as Env;
};
