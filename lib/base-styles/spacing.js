import { parseCss } from 'jetpak-css'

export const getSpacing = (theme) => {
    const { withUnit } = theme.size
    const { style } = parseCss({
        'p-1': { padding: withUnit(1), },
        'p-2': { padding: withUnit(2), },
        'p-3': { padding: withUnit(3), },
        'pt-1': { paddingTop: withUnit(1), },
        'pt-2': { paddingTop: withUnit(2), },
        'pt-3': { paddingTop: withUnit(3), },
        'pl-1': { paddingLeft: withUnit(1), },
        'pl-2': { paddingLeft: withUnit(2), },
        'pl-3': { paddingLeft: withUnit(3), },
        'pr-1': { paddingRight: withUnit(1), },
        'pr-2': { paddingRight: withUnit(2), },
        'pr-3': { paddingRight: withUnit(3), },
        'pb-1': { paddingBottom: withUnit(1), },
        'pb-2': { paddingBottom: withUnit(2), },
        'pb-3': { paddingBottom: withUnit(3), },

        'm-1': { margin: withUnit(1), },
        'm-2': { margin: withUnit(2), },
        'm-3': { margin: withUnit(3), },
        'mt-1': { marginTop: withUnit(1), },
        'mt-2': { marginTop: withUnit(2), },
        'mt-3': { marginTop: withUnit(3), },
        'ml-1': { marginLeft: withUnit(1), },
        'ml-2': { marginLeft: withUnit(2), },
        'ml-3': { marginLeft: withUnit(3), },
        'mr-1': { marginRight: withUnit(1), },
        'mr-2': { marginRight: withUnit(2), },
        'mr-3': { marginRight: withUnit(3), },
        'mb-1': { marginBottom: withUnit(1), },
        'mb-2': { marginBottom: withUnit(2), },
        'mb-3': { marginBottom: withUnit(3), },


        'l-0': { left: 0 },
        'r-0': { right: 0 },
        'b-0': { bottom: 0 },
        't-0': { top: 0 },

        'h-1': { height: withUnit(1), },
        'h-2': { height: withUnit(2), },
        'h-3': { height: withUnit(3), },
        'h-100': { height: '100%' },
        'h-100-vh': { height: '100vh' },

        'mh-1': { minHeight: withUnit(1), },
        'mh-2': { minHeight: withUnit(2), },
        'mh-3': { minHeight: withUnit(3), },
        'mh-100': { minHeight: '100%' },
        'mh-100-vh': { minHeight: '100vh' },

        'w-1': { width: withUnit(1), },
        'w-2': { width: withUnit(2), },
        'w-3': { width: withUnit(3), },
        'w-100': { width: '100%' },
        'w-100-vw': { width: '100vw' },
        'mw-100': { minWidth: '100%' },
        'mw-100-vh': { minWidth: '100vw' },
        'mw-1': { minWidth: withUnit(1), },
        'mw-2': { minWidth: withUnit(2), },
        'mw-3': { minWidth: withUnit(3), },

    }, { prefix: false })
    return style
}
