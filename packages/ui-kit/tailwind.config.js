const sharedConfig = require("@kindee/config/tailwind.config");

module.exports = {
    ...sharedConfig,
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
};
