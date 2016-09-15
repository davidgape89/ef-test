// Feel free to extend this interface
// depending on your app specific config.
export interface EnvConfig {
  API?: string;
  ENV?: string;
}

export const Config: EnvConfig = JSON.parse('<%= ENV_CONFIG %>');

export const SERV_URL: string = 'ws://54.228.248.101:8888/telemetry';

