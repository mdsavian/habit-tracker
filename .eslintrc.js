module.exports = {
  env: {
    browser: true,
    es2021: true,    
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'prettier',
  ],
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
    }
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',    
  ],
  rules: {
    'import/extensions': 'off',
    'react/jsx-props-no-spreading': 'off',
    'import/no-extraneous-dependencies': 'off',
    'react/jsx-filename-extension': ['warn', { extensions: ['.js', '.jsx', '.tsx', '.ts'] }],
    "react/react-in-jsx-scope": "off",
    'react/require-default-props': 'off',
    'react/no-danger': 'off',
    'import/prefer-default-export': 'off',  
    'no-unused-vars':'off'
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      }
    }
  }
};
