import { forEach, get } from 'lodash'

export const getFontFace = theme => {
    const fontFaces = get(theme, 'typography.fontFaces', get(theme, 'typography.fontFace', {}))
    const properties = []
    forEach(fontFaces, (value, key) => {
        const parts = key.split('-')
        const weight = parts[0] || 'normal'
        const style = parts[1] || 'normal'
        properties.push({
            'font-family': value.fontFamily,
            'src': `url(${value.src})`,
            'font-weight': weight,
            'font-style': style,
        })
    })
    return { '@font-face': properties }
}
