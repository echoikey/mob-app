import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
// 增强 <script setup> 的插件
import VueSetupExtend from 'vite-plugin-vue-setup-extend';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';

export default defineConfig({
  base: './',
  plugins: [
    vue(),
    VueSetupExtend(),
  ],
  resolve: {
    alias: {
      '@': 'src',
      "~": 'src/assets'
    },
    extensions: ['.ts', '.tsx', '.mjs', '.js', '.jsx', '.json', '.vue']
  },
});
