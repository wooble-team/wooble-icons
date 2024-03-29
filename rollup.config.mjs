import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';
import terser from '@rollup/plugin-terser';
import svgr from '@svgr/rollup';
import postcss from 'rollup-plugin-postcss';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import { readFile } from 'fs/promises';

const packageJson = JSON.parse(await readFile(new URL('./package.json', import.meta.url)));

export default [
	{
		input: 'src/index.ts',
		output: [
			{
				file: packageJson.main,
				format: 'cjs',
				sourcemap: true,
			},
			{
				file: packageJson.module,
				format: 'esm',
				sourcemap: true,
			},
		],
		plugins: [
			svgr(),
			peerDepsExternal(),
			resolve(),
			postcss(),
			commonjs(),
			typescript({ tsconfig: './tsconfig.json' }),
			terser(),
		],
	},
	{
		input: 'dist/esm/types/index.d.ts',
		output: [{ file: 'dist/index.d.ts', format: 'esm' }],
		plugins: [dts()],
		external: [/\.(css|less|scss|sass)$/],
	},
];
