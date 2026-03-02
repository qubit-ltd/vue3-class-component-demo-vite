////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2023.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import js from '@eslint/js';
import vue from 'eslint-plugin-vue';
import babelParser from '@babel/eslint-parser';

export default [
  // Base recommended configuration
  js.configs.recommended,

  // Vue essential configuration for .vue files
  ...vue.configs['flat/essential'],

  // Custom configuration
  {
    files: ['**/*.js', '**/*.vue'],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      parserOptions: {
        parser: babelParser,
        requireConfigFile: false,
        babelOptions: {
          presets: ['@babel/preset-env'],
          plugins: [
            ['@babel/plugin-proposal-decorators', { legacy: true }],
            '@babel/plugin-transform-class-properties'
          ]
        }
      },
      globals: {
        // Node.js globals
        process: 'readonly',
        Buffer: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
        global: 'readonly',
        // Browser globals
        window: 'readonly',
        document: 'readonly',
        navigator: 'readonly',
        console: 'readonly',
        // Vue compiler macros
        defineProps: 'readonly',
        defineEmits: 'readonly',
        defineExpose: 'readonly',
        withDefaults: 'readonly'
      }
    },
    rules: {
      // Custom rules can be added here
      // 'no-param-reassign': 'off',
      // 'no-void': 'off',
      // 'no-nested-ternary': 'off',
      // 'max-classes-per-file': 'off',
    }
  },

  // Ignore patterns
  {
    ignores: [
      'node_modules/**',
      'dist/**',
      '.yarn/**',
      'coverage/**',
      'doc/**'
    ]
  }
];
