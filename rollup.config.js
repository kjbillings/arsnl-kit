import resolve from '@rollup/plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import sass from 'rollup-plugin-sass'
import { main } from './package.json'

export default {
    input: './lib/index.js',
    output: {
        file: main,
        format: 'cjs',
    },
    watch: {
        include: [
            'src/**',
        ]
    },
    plugins: [
        resolve({
            preferBuiltins: true,
        }),
        commonjs({
            include: [
                'node_modules/**',
                '../arsnl/dist/index.js',
                '../jetpak-css/dist/index.js',
            ],
            namedExports: {
                'node_modules/lodash/lodash.js': [
                    'get',
                    'set',
                    'forEach',
                    'includes',
                    'isArray',
                    'isString',
                    'isEmpty',
                    'isNull',
                    'isObject',
                    'isFunction',
                    'isUndefined',
                    'reduce',
                ]
            }
        }),
        sass({ output: true }),
    ]
}
