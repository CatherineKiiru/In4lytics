module.exports = {
  // env: {
  //   "browser": true,
  //   "es2020": true,
  //   "jest": true,
  //   "node": true
  // },
  // settings: {
  //   "react": {
  //     "version": "detect"
  //   }
  // },
  // extends: [
  //   "eslint:recommended",
  //   "plugin:react/recommended",
  //   "plugin:@typescript-eslint/eslint-recommended",
  //   "plugin:@typescript-eslint/recommended",
  //   "plugin:prettier/recommended",
  //   "plugin:tailwindcss/recommended"
  // ],
  // parser: "@typescript-eslint/parser",
  // parserOptions: {
  //   ecmaFeatures: {
  //     jsx: true
  //   },
  //   ecmaVersion: 11,
  //   sourceType: "module"
  // },
  // plugins: ["react", "react-hooks", "@typescript-eslint", "tailwindcss"],
  // rules: {
  //   "react-hooks/rules-of-hooks": "error",
  //   "react-hooks/exhaustive-deps": "warn",
  //   "react/prop-types": "off",
  //   "react/react-in-jsx-scope": "off",
  //   "@typescript-eslint/explicit-module-boundary-types": "off",
  //   "@typescript-eslint/no-non-null-assertion": "off",
  //   "tailwindcss/classnames-order": "warn",
  //   "tailwindcss/no-custom-classname": "warn",
  //   "tailwindcss/no-contradicting-classname": "error"
  // }
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    "plugin:prettier/recommended",
    "plugin:tailwindcss/recommended"
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
}
