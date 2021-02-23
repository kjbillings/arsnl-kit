import { parseCss } from 'jetpak-css'

export const getShape = (theme) => {
    const { withUnit } = theme.size
    const { style } = parseCss({
        corners: {
            borderRadius: withUnit(0.5),
        },
        cornersMd: {
            borderRadius: withUnit(0.5),
        },
        cornersSm: {
            borderRadius: withUnit(0.25),
        },
        cornersLg: {
            borderRadius: withUnit(1),
        },
        circle: {
            borderRadius: '50%',
        },
        square: {
            borderRadius: 0,
        },
    }, { prefix: false })
    return style
}
