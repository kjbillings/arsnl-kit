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
            '../arsnl/**',
            '../jetpak-css/**',
        ]
    },
    plugins: [
        resolve({
            preferBuiltins: true,
        }),
        commonjs({
            include: [
                'node_modules/**',
                '../arsnl/**',
                '../jetpak-css/**',
            ],
            namedExports: {
                'node_modules/lodash/lodash.js': [
                    'cloneDeep',
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
                    'merge',
                    'reduce',
                ]
            }
        }),
        sass({ output: true }),
    ]
}
