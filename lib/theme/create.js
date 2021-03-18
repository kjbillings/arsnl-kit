import { cloneDeep, get, set, merge } from 'lodash'
import DEFAULT_THEME from './default'

const UNIT_FIELDS = [
    'corners.none',
    'corners.sm',
    'corners.md',
    'corners.lg',
    'spacing.sm',
    'spacing.md',
    'spacing.lg',
]

const getUnit = theme => get(theme, 'size.unit', 'rem')

const setUnits = theme => {
    const unit = getUnit(theme)
    for (var i = 0; i < UNIT_FIELDS.length; i++) {
        const field = UNIT_FIELDS[i]
        const value = get(theme, field, 0)
        set(theme, field, value + unit)
    }
}

const createTheme = (theme, defaultTheme=DEFAULT_THEME) => {
    const formatted = merge(cloneDeep(defaultTheme), cloneDeep(theme))
    const withUnit = n => n + getUnit(formatted)
    setUnits(formatted)
    set(formatted, 'size.withUnit', withUnit)
    return formatted
}

export default createTheme
