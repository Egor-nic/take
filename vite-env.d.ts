/// <reference types="vite/client" />

// https://github.com/microsoft/TypeScript/issues/38638
declare module '*&img' {
  const src: string;
  export default src;
}
declare module '*?jpg' {
  const src: string;
  export default src;
}
declare module '*?png' {
  const src: string;
  export default src;
}

declare const __STATIC_PICTURES_PATH__: string;
