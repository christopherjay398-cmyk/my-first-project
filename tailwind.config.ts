import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: { extend: {
    colors: { brand: { 50:"#effcf8",100:"#d8f7ed",200:"#b3eedb",300:"#82dfc4",400:"#4bc9a6",500:"#20ad89",600:"#128b70",700:"#10705c",800:"#10594b",900:"#10493f" } },
    boxShadow: { soft:"0 12px 40px rgba(15, 67, 55, .08)" },
    borderRadius: { "4xl":"2rem" }
  }},
  plugins: []
};
export default config;
