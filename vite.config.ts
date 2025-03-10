import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
// 增强 <script setup> 的插件
import VueSetupExtend from 'vite-plugin-vue-setup-extend';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';

export default defineConfig({
  base: './',
  plugins: [
    vue(),
    VueSetupExtend(),
    AutoImport({
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      resolvers: [ElementPlusResolver()]
    })
  ],
  resolve: {
    alias: {
      '@': '/src',
      "~": '/src/assets'
    },
    extensions: ['.ts', '.tsx', '.mjs', '.js', '.jsx', '.json', '.vue']
  },
});
