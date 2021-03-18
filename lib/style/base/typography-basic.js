export const getTypographyBasic = (theme) => {
    const { withUnit } = theme.size
    return {
        'i, em': {
            fontStyle: 'italic',
        },
        'b, strong': {
            fontWeight: 'bold',
        },
        p: {
            margin: '1em 0',
            lineHeight: withUnit(1.25),
            fontWeight: '300',
            letterSpacing: withUnit(0.01),
        },
        uppercase: {
            textTransform: 'uppercase',
        },
        'noDecoration, noDecoration:hover, noDecoration:focus': {
            textDecoration: 'none',
        },
        'a, a:hover, a:visited, a:active, a:focus': {
            color: 'inherit',
            transition: 'all 125ms ease-out',
        },
        'a:hover, a:focus': {
            filter: 'brightness(150%)',
        },
        truncate: {
            maxWidth: '100%',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
        },
        light: {
            fontWeight: 100,
        },
        noAir: {
            letterSpacing: withUnit(0.01),
        },
        air: {
            letterSpacing: withUnit(0.5),
        },
    }
}
