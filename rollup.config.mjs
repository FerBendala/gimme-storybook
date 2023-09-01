import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import scss from 'rollup-plugin-scss'
import postcss from 'rollup-plugin-postcss'
import dts from 'rollup-plugin-dts'
import path from 'path'

import { createRequire } from 'node:module'
const requireFile = createRequire( import.meta.url )
const packageJson = requireFile( './package.json' )

export default [{
    input: 'src/index.ts',
    output: [
        {
            file: packageJson.main,
            format: 'cjs',
            sourcemap: true
        },
        {
            file: packageJson.module,
            format: 'esm',
            sourcemap: true
        }
    ],
    plugins: [
        peerDepsExternal(),
        resolve(),
        commonjs(),
        typescript(),
        postcss( {
            extensions: ['.scss'],
            modules: true,
        } )
    ]
}, {
    input: 'lib/index.d.ts',
    output: [{
        file: 'lib/index.d.ts',
        format: 'es'
    }],
    plugins: [dts()],
    external: [/\.s?css$/]
}]