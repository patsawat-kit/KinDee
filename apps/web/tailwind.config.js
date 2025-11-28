const sharedConfig = require("@kindee/config/tailwind.config");

module.exports = {
    ...sharedConfig,
    content: [
        ...sharedConfig.content,
    ],
};
