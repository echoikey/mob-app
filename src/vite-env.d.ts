/// <reference types="vite/client" />

// 模块类型申明：TypeScript 只能理解 .ts 文件，无法直接理解 .vue 文件。
declare module '*.vue' {
  import { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
