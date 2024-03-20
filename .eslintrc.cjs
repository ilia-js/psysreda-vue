module.exports = {
  root: true,
  env: {
    node: true,
  },
  plugins: ["@typescript-eslint", "prettier", "import"],
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/typescript/recommended",
    "plugin:prettier/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    "semi": ["error", "always"],
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "prettier/prettier": [
      "error",
      {
        trailingComma: "es5",
        printWidth: 120,
        endOfLine: "auto",
        semi: true,
        singleQuote: false,
        attributeGroups: [
          "^v-if$",
          "^v-else$",
          "^v-show$",
          "^v-for$",
          "^v-model$",
          "^v-model:",
          "^:model-value",
          "^:",
          "^@",
        ],
        attributeIgnoreCase: true,
        attributeSort: "ASC",
      },
    ],
    "sort-imports": [
      "error",
      {
        ignoreCase: false,
        ignoreDeclarationSort: true, // Do not want to sort import lines, use `eslint-plugin-import` instead.
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ["none", "all", "multiple", "single"],
        allowSeparatedGroups: true,
      },
    ],
    "import/no-unresolved": "error",
    "import/order": [
      "error",
      {
        "newlines-between": "always",
        groups: [
          "builtin", // Built-in imports (come from NodeJS native) go first.
          "external", // External imports.
          "internal", // Absolute imports.
          ["sibling", "parent"], // Relative imports, the sibling and parent types they can be mingled together.
          "index", // Index imports.
          "unknown", // Unknown.
        ],
        alphabetize: {
          order: "asc", // Sort in ascending order. Options: ["ignore", "asc", "desc"].
          caseInsensitive: true, // ignore case. Options: [true, false].
        },
      },
    ],
    // As CL built on web-components we need to turn off this rule
    "vue/no-deprecated-slot-attribute": "off",

    // Required so we can inject values without additional check that are not required at all.
    "@typescript-eslint/no-non-null-assertion": "off",
  },
  settings: {
    "import/resolver": {
      typescript: {
        project: "./tsconfig.json",
      },
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
        moduleDirectory: ['node_modules', 'src/'],
        paths: ["src"],
      }
    },
  },
  overrides: [
    {
      files: ["**/__tests__/*.{j,t}s?(x)", "**/tests/unit/**/*.spec.{j,t}s?(x)"],
      env: {
        jest: true,
      },
    },
  ],
};
