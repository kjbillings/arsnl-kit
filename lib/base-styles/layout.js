import { parseCss } from 'jetpak-css'

export const getLayout = () => {
    const { style } = parseCss({


        absolute: { position: 'absolute' },
        relative: { position: 'relative' },
        static: { position: 'static' },
        fixed: { position: 'fixed' },

        alignStart: { alignItems: 'flex-start' },
        alignCenter: { alignItems: 'center' },
        alignEnd: { alignItems: 'flex-end' },

        flex: { display: 'flex' },
        inlineFlex: { display: 'inline-flex' },
        fillArea: {
            height: '100%',
            width: '100%',
            position: 'relative',
        },
        flexCenter: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
        },
        flexColumn: { flexDirection: 'column', },

        inlineBlock: { display: 'inline-block' },
        block: { display: 'block' },
        inline: { display: 'inline' },

        spaceAround: { justifyContent: 'space-around' },
        spaceBetween: { justifyContent: 'space-between' },
        justifyStart: { justifyContent: 'flex-start' },
        justifyCenter: { justifyContent: 'center' },
        justifyEnd: { justifyContent: 'flex-end' },

        textCenter: { textAlign: 'center' },
        textLeft: { textAlign: 'left' },
        textRight: { textAlign: 'right' },

        alignMiddle: { verticalAlign: 'middle' },
        alignTop: { verticalAlign: 'top' },
        alignBaseline: { verticalAlign: 'baseline' },
        alignBottom: { verticalAlign: 'bottom' },

        overflowHidden: { overflow: 'hidden' },
        overflowVisible: { overflow: 'visible' },

        cursorPointer: { cursor: 'pointer' },
        clickable: { cursor: 'pointer' },

        center: { margin: '0 auto' },

    }, { prefix: false })
    return style
}
