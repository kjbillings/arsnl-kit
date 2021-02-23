import { parseCss } from 'jetpak-css'

export const getGraphicalElements = (theme) => {
    const { withUnit } = theme.size
    const { style } = parseCss({
        hr: {
            margin: `${withUnit(0.5)} ${withUnit(1)}`,
        },
        svg: {
            width: '1em',
            height: '1em',
            fill: 'currentColor',
            display: 'inline-block',
            visibility: 'visible',
        },
    }, { tagsOnly: true })
    return style
}
