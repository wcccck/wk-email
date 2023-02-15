// vite.config.ts
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import viteJsx from "@vitejs/plugin-vue-jsx";
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";
import path from "path";
var vite_config_default = defineConfig({
  plugins: [vue(), viteJsx(), createSvgIconsPlugin({
    iconDirs: [path.resolve(process.cwd(), "src/assets/icons/svg")],
    symbolId: "icon-[dir]-[name]"
  })],
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:7777",
        changeOrigin: true,
        rewrite: (path2) => path2.replace(/^\/api/, "")
      }
    }
  },
  resolve: {
    alias: {
      "@": path.join("F:\\wkq-project\\wk-email", "/src")
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnXG5pbXBvcnQgdnVlIGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZSdcbmltcG9ydCB2aXRlSnN4IGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZS1qc3gnXG5pbXBvcnQge2NyZWF0ZVN2Z0ljb25zUGx1Z2lufSBmcm9tIFwidml0ZS1wbHVnaW4tc3ZnLWljb25zXCI7XG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJ1xuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW3Z1ZSgpLHZpdGVKc3goKSxjcmVhdGVTdmdJY29uc1BsdWdpbih7XG4gICAgaWNvbkRpcnM6W3BhdGgucmVzb2x2ZShwcm9jZXNzLmN3ZCgpLCdzcmMvYXNzZXRzL2ljb25zL3N2ZycpXSxcbiAgICBzeW1ib2xJZDonaWNvbi1bZGlyXS1bbmFtZV0nXG4gIH0pXSxcbiAgc2VydmVyOntcbiAgICBwcm94eTp7XG4gICAgICAnL2FwaSc6e1xuICAgICAgICB0YXJnZXQ6XCJodHRwOi8vbG9jYWxob3N0Ojc3NzdcIixcbiAgICAgICAgY2hhbmdlT3JpZ2luOnRydWUsXG4gICAgICAgIHJld3JpdGU6IChwYXRoKSA9PiBwYXRoLnJlcGxhY2UoL15cXC9hcGkvLCcnKVxuICAgICAgfSxcblxuICAgIH1cbiAgfSxcbiAgcmVzb2x2ZTp7XG4gICAgYWxpYXM6e1xuICAgICAgJ0AnOnBhdGguam9pbihcIkY6XFxcXHdrcS1wcm9qZWN0XFxcXHdrLWVtYWlsXCIsJy9zcmMnKVxuICAgIH1cbiAgfVxufSlcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBQSxTQUFTLG9CQUFvQjtBQUM3QixPQUFPLFNBQVM7QUFDaEIsT0FBTyxhQUFhO0FBQ3BCLFNBQVEsNEJBQTJCO0FBQ25DLE9BQU8sVUFBVTtBQUdqQixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTLENBQUMsSUFBSSxHQUFFLFFBQVEsR0FBRSxxQkFBcUI7QUFBQSxJQUM3QyxVQUFTLENBQUMsS0FBSyxRQUFRLFFBQVEsSUFBSSxHQUFFLHNCQUFzQixDQUFDO0FBQUEsSUFDNUQsVUFBUztBQUFBLEVBQ1gsQ0FBQyxDQUFDO0FBQUEsRUFDRixRQUFPO0FBQUEsSUFDTCxPQUFNO0FBQUEsTUFDSixRQUFPO0FBQUEsUUFDTCxRQUFPO0FBQUEsUUFDUCxjQUFhO0FBQUEsUUFDYixTQUFTLENBQUNBLFVBQVNBLE1BQUssUUFBUSxVQUFTLEVBQUU7QUFBQSxNQUM3QztBQUFBLElBRUY7QUFBQSxFQUNGO0FBQUEsRUFDQSxTQUFRO0FBQUEsSUFDTixPQUFNO0FBQUEsTUFDSixLQUFJLEtBQUssS0FBSyw2QkFBNEIsTUFBTTtBQUFBLElBQ2xEO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbInBhdGgiXQp9Cg==
