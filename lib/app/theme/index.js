import { get } from 'lodash'
import { namespace } from 'arsnl'
import DEFAULT_THEME from './default'

const getTheme = () => (
    get(window, `${namespace}.theme`, DEFAULT_THEME)
)

const getPalette = () => (
    get(getTheme(), 'palette')
)

const getColor = path => get(getPalette(), path)

export default {
    getTheme,
    getPalette,
    getColor,
}
