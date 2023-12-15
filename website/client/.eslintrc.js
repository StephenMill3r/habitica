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
    'eslint:recommended', // Basic recommended ESLint rules    
    '@vue/typescript/recommended', // Add Vue TypeScript recommended rules
    'plugin:react/recommended', // Add React recommended rules
    'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
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
      'react/react-in-jsx-scope': 'off', // Not needed for React 17+
      'react/jsx-uses-react': 'off', // Not needed for React 17+
      'react/jsx-uses-vars': 'error', // Prevent variables used in JSX from being marked as unused
      '@typescript-eslint/no-unused-vars': ['error'],
      'no-unused-vars': 'off',
      'no-undef': 'off',
      'react/prop-types': 'off',
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
  exclude: '/node_modules/',
};
