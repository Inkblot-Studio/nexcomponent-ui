import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';
import postcss from 'rollup-plugin-postcss';
import babel from '@rollup/plugin-babel';
import { readFileSync, copyFileSync, existsSync } from 'fs';
import { join } from 'path';

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
      }),
      // Copy CSS files to root dist directory for backward compatibility
      {
        name: 'copy-css-files',
        writeBundle() {
          try {
            // Check if the CSS file exists before copying
            const cssPath = join('dist', 'esm', 'style.css');
            const cssMapPath = join('dist', 'esm', 'style.css.map');
            
            if (existsSync(cssPath)) {
              copyFileSync(cssPath, 'dist/style.css');
              console.log('✅ CSS file copied to dist/style.css');
            }
            
            if (existsSync(cssMapPath)) {
              copyFileSync(cssMapPath, 'dist/style.css.map');
              console.log('✅ CSS map file copied to dist/style.css.map');
            }
          } catch (error) {
            console.warn('⚠️ Could not copy CSS files to root dist directory:', error.message);
          }
        }
      }
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
  // Type declarations are handled by TypeScript compiler directly
  // The dist/index.d.ts is created by the TypeScript compiler
];