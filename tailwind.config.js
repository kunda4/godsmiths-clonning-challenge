/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      spacing: {
        "some-key": "1.5rem",
      },
    },
  },
  plugins: [],
};
