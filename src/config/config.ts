import { HOSTNAME } from "./constants";
import { TConfig } from "./declarations";
import { devConfig } from "./dev.config";
import { localConfig } from "./local.config";

export let config: TConfig;

//заготовка для других стендов, например: test, dev
switch (document.location.hostname) {
  case HOSTNAME.LOCAL:
    config = localConfig;
    break;
  case HOSTNAME.DEV:
    config = devConfig;
    break;
}
