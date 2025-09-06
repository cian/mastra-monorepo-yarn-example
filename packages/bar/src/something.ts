import { envServerConfig } from "./configGetter";
export const OTHER_NAME = 'OTHER_NAME'

export const getFactFromEnv = async () => {
    const fact = envServerConfig.importantConfigurableFact;
    return 'FACT=' + fact;
}
