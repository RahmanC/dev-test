/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#7839EE",
        secondary: "rgba(236, 233, 254, 0.8)",
        "bg-interactive": "#875BF7",
        "bg-disabled": "#F5F5F5",
        "bg-mild": "#FCFCFC",
        "text-primary": "#292929",
        "text-foreground": "#424242",
        "text-secondary": "#737373",
        "text-supporting": "#737373",
      },
    },
  },
  plugins: [],
};
