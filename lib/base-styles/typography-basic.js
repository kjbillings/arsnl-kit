import { parseCss } from 'jetpak-css'

export const getTypographyBasic = () => {
    const { style } = parseCss({
        'i, em': {
            fontStyle: 'italic',
        },
        'b, strong': {
            fontWeight: 'bold',
        },
        'p': {
            margin: '1em 0',
        },
        '.uppercase': {
            textTransform: 'uppercase',
        },
        '.no-decoration, .no-decoration:hover, .no-decoration:focus': {
            textDecoration: 'none',
        },
        'a, a:hover, a:visited, a:active, a:focus': {
            color: 'inherit',
            transition: 'all 125ms ease-out',
        },
        'a:hover, a:focus': {
            filter: 'brightness(150%)',
        },
        '.truncate': {
            maxWidth: '100%',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
        }
    }, { tagsOnly: true })
    return style
}
