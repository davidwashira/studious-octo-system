// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1a73e8",     // Primary color for buttons and links
        secondary: "#f3f4f6",   // Light gray for backgrounds
        accent: "#f59e0b",      // Accent color, e.g., for ratings or highlights
        dark: "#1f2937",        // Dark text color
      },
    },
  },
  plugins: [],
};
