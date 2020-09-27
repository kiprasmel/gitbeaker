import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import builtins from 'rollup-plugin-node-builtins';
import globals from 'rollup-plugin-node-globals';
import pkg from './package.json';
import { terser } from 'rollup-plugin-terser';
import { commonConfig, commonPlugins } from '../../rollup.config';

export default [
  {
    ...commonConfig,
    output: {
      file: pkg.browser,
      name: 'gitbeaker',
      format: 'umd',
      exports: 'named',
      globals: { 'form-data': 'FormData' },
      external: ['form-data'],
    },
    plugins: [
      globals(),
      builtins(),
      resolve({ browser: true }),
      commonjs(),
      ...commonPlugins,
      terser(),
    ],
  },
];
