import { parseCss } from 'jetpak-css'

export const getBase = (theme) => {
    const { style } = parseCss({
        body: {
            margin: 0,
            lineHeight: 1,
            fontFamily: theme.typography.fontFamily,
            fontSize: theme.size.base,
        },
    }, { tagsOnly: true })
    return style
}
