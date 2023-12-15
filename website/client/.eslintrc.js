/* eslint-disable import/no-commonjs */
module.exports = {
  root: true,
  env: {
    node: true,
    browser: true, // Add browser environment for frontend code
    es2021: true, // Use ES2021 features
  },
  extends: [
    'habitrpg/lib/vue', // Existing Vue-specific rules
    'plugin:react/recommended', // Add React recommended rules
    'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    'eslint:recommended', // Basic recommended ESLint rules
  ],
  ignorePatterns: ['dist/', 'node_modules/'],
  rules: {
    // Existing rules
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'vue/no-v-html': 'off',
    'vue/no-mutating-props': 'warn',
    'vue/html-self-closing': ['error', {
      html: {
        void: 'never',
        normal: 'never',
        component: 'always',
      },
      svg: 'never',
      math: 'never',
      tsx: 'never',
    }],
  },
  parserOptions: {
    parser: 'babel-eslint',
    ecmaFeatures: {
      jsx: true, // Enable linting for JSX
    },
    ecmaVersion: 12, // ECMAScript version
    sourceType: 'module',
  },
  settings: {
    react: {
      version: 'detect', // Automatically detect the React version
    },
  },
  plugins: [
    'react', // Include React plugin    'react', // use the react plugin
    '@typescript-eslint', // use the typescript plugin
  ],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {    // React-specific rules (add or adjust as needed)
        'react/react-in-jsx-scope': 'off', // Not needed for React 17+
        'react/jsx-uses-react': 'off', // Not needed for React 17+
        'react/jsx-uses-vars': 'error', // Prevent variables used in JSX from being marked as unused
        // Add more custom rules as per your project's coding standards
        '@typescript-eslint/no-unused-vars': ['error'],
        'no-unused-vars': 'off',
        'no-undef': 'off',
        'react/prop-types': 'off',
      },
      parser: '@typescript-eslint/parser', // specify the ESLint parser
      parserOptions: {
        ecmaVersion: 2021, // allows for the parsing of modern ECMAScript features
        sourceType: 'module', // allows for the use of imports
        ecmaFeatures: {
          jsx: true, // allows for the parsing of JSX
        }
    },
  },
  ]
};
