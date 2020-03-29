import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'
import sass from 'rollup-plugin-sass'
import { main, peerDependencies } from './package.json'

export default {
    input: './lib/index.js',
    output: {
        file: main,
        format: 'cjs',
    },
    plugins: [
        commonjs({
            exclude: /node_modules/,
        }),
        resolve({ preferBuiltins: true }),
        sass(),
    ],
    external: Object.keys(peerDependencies || {}),
}
