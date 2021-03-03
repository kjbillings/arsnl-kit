import { parseCss } from 'jetpak-css'

export const getTypographyDisplay = (theme) => {
    const { withUnit } = theme.size
    const { style } = parseCss({
        'h1, .h1, h2, .h2, h3, .h3, h4, .h4, h5, .h5, h6, .h6': {
            fontWeight: 600,
            letterSpacing: withUnit(0.05),
        },
        'h1, .h1, h2, .h2': {
            letterSpacing: withUnit(0.05),
        },
        'h1, .h1': {
            fontSize: withUnit(2.5),
        },
        'h2, .h2': {
            fontSize: withUnit(2),
        },
        'h3, .h3': {
            fontSize: withUnit(1.8),
        },
        'h4, .h4': {
            fontSize: withUnit(1.5),
        },
        'h5, .h5': {
            fontSize: withUnit(1.25),
        },
        'h6, .h6': {
            fontSize: withUnit(1),
        },
    }, { tagsOnly: true })
    return style
}
