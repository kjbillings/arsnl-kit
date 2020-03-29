import {
    Node,
    State,
    subscribe,
} from '@kjbillings/arsnl'
import clsx from 'clsx'

import './toggle-box.scss'

export const getToggleState = openByDefault => (
    State({ value: openByDefault === true })
)

export default ({
    r=Node(),
    toggleState=getToggleState(),
    className,
    animationDurationMS=250,
    ...rest
}) => {
    const transition = `all ${animationDurationMS}ms ease-out`

    const getSize = () => toggleState.value ? 'auto' : '0px'

    const el = Node(() => ({
        ...rest,
        t: 'div',
        s: {
            height: getSize(),
            width: getSize(),
            transition,
        },
        r,
        className: clsx('toggle-box', className),
        ontransitionend: (e) => {
            if (toggleState.value) {
                e.target.style.height = 'auto'
                e.target.style.width = 'auto'
            }
        },
    }))

    const setStyle = (height, width) => (
        el.setAttribute('style', `height: ${height}; width: ${width}; transition: ${transition}`)
    )

    subscribe(toggleState, (key, value) => {
        const delay = value ? animationDurationMS : 100
        setStyle(`${r.scrollHeight}px`, `${r.scrollWidth}px`)
        setTimeout(() => setStyle(getSize(), getSize()), delay)
    })

    return el
}
