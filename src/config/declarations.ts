export type TConfig = {
  readonly stand: "local" | "test" | "dev" | "preprod" | "prod";
  readonly host: {
    api: string;
  };
  readonly mock?: {
    api: boolean;
  };
};
