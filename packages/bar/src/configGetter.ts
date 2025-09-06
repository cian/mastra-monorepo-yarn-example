import { getEnv } from "./utils/envUtils";

interface EnvServerConfig {
    importantConfigurableFact: string;
};

const serverConfig: EnvServerConfig = {
    importantConfigurableFact: "aoeu",
};

const envServerConfigs = {
    local: serverConfig,
    dev: serverConfig,
    sandbox: serverConfig,
    prod: serverConfig,
};

const env = getEnv();

export const envServerConfig = envServerConfigs[env];
