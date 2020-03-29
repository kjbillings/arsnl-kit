import { Node, State } from '@kjbillings/arsnl'
import { reduce, includes } from 'lodash'
import clsx from 'clsx'

import { toggleBox, getToggleState } from '../subatomic/substrate'
import menuToggle from './menu-toggle'

const getPosition = (position) => (
    reduce(['top', 'left', 'right', 'bottom'], (style, value) => {
        if (includes(position, value)) {
            style[value] = 0
        }
        return style
    }, {})
)

export default ({
    className,
    position,
    openByDefault,
    toggle,
    menu,
}) => {
    const toggleState = getToggleState(openByDefault)
    return (
        Node({
            className: clsx('ambit', className),
            style: {
                ...getPosition(position),
            },
            r: [
                menuToggle(toggle, toggleState),
                toggleBox({
                    r: menu,
                    toggleState
                }),
            ]
        })
    )
}
