export const getButtons = (theme) => {
    const { size, colors } = theme
    const { withUnit } = size
    return {
        button: {
            cursor: 'pointer',
            borderWidth: 0,
            borderColor: 'transparent',
            borderRadius: withUnit(0.5),
            color: colors.default.dark,
            background: colors.default.light,
            padding: `${withUnit(0.5)} ${withUnit(0.75)}`,

            '&:hover, &:focus': {
                background: colors.default.lightest,
                color: colors.default.darkest,
            },
            '&:not(:disabled), &:not(.disabled)': {
                cursor: 'pointer',
            },
            '&.primary': {
                background: colors.primary.medium,
                color: colors.default.light,
            },
            '&.primary:hover': {
                background: colors.primary.dark,
                color: colors.default.lightest,
            },

            '&.secondary': {
                background: colors.secondary.medium,
                color: colors.default.lightest,
            },
            '&.secondary:hover': {
                background: colors.secondary.dark,
                color: colors.default.lightest,
            },

            '&.dark': {
                background: colors.default.dark,
                color: colors.default.lightest,
            },
            '&.dark:hover': {
                background: colors.default.medium,
                color: colors.default.lightest,
            },
        },
        linkStyle: {
            background: 'none',
            color: 'inherit',
            fontSize: 'inherit',
            fontWeight: 'inherit',
            letterSpacing: 'inherit',
            lineHeight: 'inherit',
            font: 'inherit',
            display: 'inline-block',
            padding: '0',
            border: 'none',

            '&:hover, &:focus': {
                background: 'none',
                color: 'inherit',
                textDecoration: 'underline',
            },
        },

    }
}
