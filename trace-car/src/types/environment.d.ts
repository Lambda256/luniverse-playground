
export {};

declare global {
  interface ProcessEnv extends ImportMetaEnv {
    VITE_ACCESS_KEY: string;
    VITE_SECRET_KEY: string;
  }
}