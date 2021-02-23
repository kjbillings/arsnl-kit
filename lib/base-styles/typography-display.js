import { parseCss } from 'jetpak-css'

export const getTypographyDisplay = (theme) => {
    const { withUnit } = theme.size
    const { style } = parseCss({
        'h1, h2, .h1, .h2': {
            fontWeight: 100,
            letterSpacing: withUnit(0.05),
        },
        'h4, h5, h6, .h4, .h5, .h6': {
            fontWeight: 200,
        },
        'h1, .h1': {
            fontSize: withUnit(3),
        },
        'h2, .h2': {
            fontSize: withUnit(2.5),
        },
        'h3, .h3': {
            fontSize: withUnit(2),
            fontWeight: 100,
            letterSpacing: withUnit(0.5),
        },
        'h4, .h4': {
            fontSize: withUnit(1.8),
        },
        'h5, .h5': {
            fontSize: withUnit(1.5),
        },
        'h6, .h6': {
            fontSize: withUnit(1.25),
        },
    }, { tagsOnly: true })
    return style
}
