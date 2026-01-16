/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_EMAILJS_SERVICE_ID: string;
    readonly VITE_EMAILJS_TEMPLATE_ID: string;
    readonly VITE_EMAILJS_PUBLIC_KEY: string;
    // add any other env variables you use
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }