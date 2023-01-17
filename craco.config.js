const path = require("path");

module.exports = {
    webpack: {
        alias: {
            "@": path.resolve(__dirname, "src/"),
            "@pages": path.resolve(__dirname, "./src/Pages"),
            "@components": path.resolve(__dirname, "./src/Components"),
            "@interfaces": path.resolve(__dirname, "./src/Interfaces"),
            "@api": path.resolve(__dirname, "./src/API"),
            "@layouts": path.resolve(__dirname, "./src/Layouts"),
            "@redux": path.resolve(__dirname, "./src/Redux"),
            "@configs": path.resolve(__dirname, "./src/Configs"),
            "@modules": path.resolve(__dirname, "./src/Modules"),
            "@utils": path.resolve(__dirname, "./src/Utils"),
            "@hooks": path.resolve(__dirname, "./src/Hooks"),
            "@translations": path.resolve(__dirname, "./src/Translations"),
            //   "@validations": path.resolve(__dirname, "./src/Validations"),
        },
    },
    jest: {
        configure: {
            moduleNameMapper: {
                "^@components(.*)$": "<rootDir>/src/Components$1",
                "^@utils(.*)$": "<rootDir>/src/Utils",
                "^@layouts(.*)$": "<rootDir>/src/Layouts",
                "^@redux(.*)$": "<rootDir>/src/Redux",
            },
            roots: ["<rootDir>/src/", "<rootDir>/tests/"],
            testMatch: ["<rootDir>/tests/**/?(*.)+(spec|test).[jt]s?(x)"],
            setupFilesAfterEnv: "<rootDir>/src/setupTests.ts",
        },
    },
};
