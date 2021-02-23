import { parseCss } from 'jetpak-css'

export const getTransitions = (theme) => {
    const { withUnit } = theme.size
    const { style } = parseCss({

        'ease-out-125': { transition: 'all 125ms ease-out', },
        'ease-out-250': { transition: 'all 250ms ease-out', },
        'ease-out-500': { transition: 'all 500ms ease-out', },
        'ease-out-750': { transition: 'all 750ms ease-out', },
        'ease-out-1000': { transition: 'all 1000ms ease-out', },

    }, { prefix: false })
    return style
}
