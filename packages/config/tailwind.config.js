/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "../../packages/ui-kit/**/*.{js,ts,jsx,tsx}",
        "./**/*.{js,ts,jsx,tsx}",
        "./app/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
    },
    plugins: [],
};
