declare global {
    namespace NodeJS {
      interface ProcessEnv {
        REACT_APP_ID: string;
        REACT_APP_SERVER_SECRET: string;
      }
    }
  }
  
  export {}