import globals from "globals"
import pluginJs from "@eslint/js"
import pluginReact from "eslint-plugin-react"

export default [
    {
        files: ["**/*.{js,mjs,cjs,jsx}"],
        languageOptions: {
            globals: globals.browser,
            ecmaVersion: 12,
            sourceType: "module",
            ecmaFeuters: {
                jsx: true,
            },
        },
        plugins: {
            react: pluginReact,
        },
        rules: {
            ...pluginJs.configs.recommended.rules,
            ...pluginReact.configs.flat.recommended.rules,
            "react/react-in-jsx-scope": "off",
            //"semi": ["error", "never"], // Отключаем необходимость точек с запятой
            //"quote-props": ["error", "as-needed"],
            "react/jsx-filename-extension": [
                1,
                { extensions: [".js", ".jsx"] },
            ],
            "no-unused-vars": [
                "warn",
                { vars: "all", args: "after-used", ignoreRestSiblings: true },
            ],
        },
        settings: {
            react: {
                version: "detect", // Автоматическое определение версии React
            },
            "eslint.validate": ["javascript"],
        },
    },
]
