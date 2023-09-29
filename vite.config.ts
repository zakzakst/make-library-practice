import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig(({ command }) => {
  return {
    build: {
      lib: {
        entry: resolve(__dirname, "src/lib/index.ts"),
        name: "TaxLib",
        fileName: "tax-lib",
        // 生成するモジュール形式を配列で指定します。デフォルトで['es', 'umd'] なのでこの場合はなくても大丈夫です。
        formats: ["es", "umd"],
      },
    },
    publicDir: command === "build" ? false : "public",
  };
});
