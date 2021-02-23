import { parseCss } from 'jetpak-css'

export const getButtons = (theme) => {
    const { size, colors } = theme
    const { withUnit } = size
    const { style } = parseCss({
        'button': {
            cursor: 'pointer',
            borderWidth: 0,
            borderColor: 'transparent',
            borderRadius: withUnit(0.5),
            color: colors.default.dark,
            background: colors.default.light,
            padding: `${withUnit(0.5)} ${withUnit(0.75)}`,
        },
        'button:hover, button:focus': {
            background: colors.default.lightest,
            color: colors.default.darkest,
        },
        'button:not(:disabled), button:not(.disabled)': {
            cursor: 'pointer',
        },
        '.link': {
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
        },
        '.link:hover, .link:focus': {
            background: 'none',
            color: 'inherit',
            textDecoration: 'underline',
        },

        'button.primary': {
            background: colors.primary.medium,
            color: colors.default.light,
        },
        'button.primary:hover': {
            background: colors.primary.dark,
            color: colors.default.lightest,
        },

        'button.secondary': {
            background: colors.secondary.medium,
            color: colors.default.lightest,
        },
        'button.secondary:hover': {
            background: colors.secondary.dark,
            color: colors.default.lightest,
        },

        'button.dark': {
            background: colors.default.dark,
            color: colors.default.lightest,
        },
        'button.dark:hover': {
            background: colors.default.medium,
            color: colors.default.lightest,
        },

    }, { tagsOnly: true })
    return style
}
