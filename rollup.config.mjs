import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';
import postcss from 'rollup-plugin-postcss';
import babel from '@rollup/plugin-babel';
import { readFileSync } from 'fs';

const packageJson = JSON.parse(readFileSync('./package.json', 'utf8'));

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: true,
        exports: 'named',
      },
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: true,
        exports: 'named',
      },
    ],
    plugins: [
      resolve({
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
      }),
      commonjs({
        include: 'node_modules/**',
      }),
      typescript({ 
        tsconfig: './tsconfig.json', 
        exclude: [
          '**/*.test.tsx', 
          '**/*.test.ts', 
          '**/*.stories.tsx', 
          '**/*.stories.ts',
          '**/stories/**',
          '**/storybook/**'
        ],
        declaration: true,
        declarationDir: 'dist/types',
        sourceMap: true,
      }),
      postcss({ 
        extensions: ['.scss', '.css'], 
        inject: false, 
        extract: 'style.css',
        minimize: true,
        sourceMap: true,
      }),
      babel({
        babelHelpers: 'bundled',
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        presets: [
          ['@babel/preset-react', { runtime: 'automatic' }], 
          '@babel/preset-typescript'
        ],
        exclude: 'node_modules/**',
      })
    ],
    external: [
      'react', 
      'react-dom', 
      'react/jsx-runtime',
      'framer-motion',
      'lucide-react',
      '@headlessui/react',
      'classnames',
      'styled-components'
    ],
  },
  {
    input: 'dist/types/index.d.ts',
    output: [{ 
      file: 'dist/index.d.ts', 
      format: 'esm',
      sourcemap: true,
    }],
    plugins: [
      dts({
        respectExternal: true,
        compilerOptions: {
          baseUrl: './',
          paths: {
            '@/*': ['src/*']
          }
        }
      })
    ],
    external: [/\.scss$/, /\.css$/],
  },
];