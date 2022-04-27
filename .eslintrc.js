module.exports = {
    env: {
      browser: true,
      es2021: true,
    },
    extends: [
      "eslint:recommended",
      "plugin:react/recommended",
      "plugin:prettier/recommended",
      "plugin:react-hooks/recommended",
    ],
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: "latest",
      sourceType: "module",
    },
    plugins: ["react", "react-hooks", "prettier", "import"],
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      "no-console": "warn",
      "prettier/prettier": [
        "error",
        {
          singleQuote: false,
          traillingComma: "all",
          semi: true,
          tabWidth: 2,
          printWidth: 100,
          bracketSpacing: true,
          arrowParens: "always",
          endOfLine: "auto",
        },
      ],
      "no-unused-vars": [
        "warn",
        {
          args: "after-used",
          ignoreRestSiblings: false,
          argsIgnorePattern: "^_.*?$",
        },
      ],
      "import/order": ["warn", { "newlines-between": "always" }],
      "react/self-closing-comp": "warn",
      "react-hooks/rules-of-hooks": "warn",
      "react/jsx-sort-props": [
        "warn",
        {
          callbacksLast: true,
          shorthandFirst: true,
          noSortAlphabetically: false,
          reservedFirst: true,
        },
      ],
      "padding-line-between-statements": [
        "error",
        { blankLine: "always", prev: "*", next: "return" },
        { blankLine: "always", prev: ["const", "let", "var"], next: "*" },
        {
          blankLine: "any",
          prev: ["const", "let", "var"],
          next: ["const", "let", "var"],
        },
      ],
      "react/display-name": ["off", "always"],
      "react/prop-types": ["off", {}],
      "no-debugger": "warn",
      "react/react-in-jsx-scope": "off",
      "no-undef": "off",
    },
  };