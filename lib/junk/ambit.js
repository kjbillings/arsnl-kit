import { Node, State } from 'arsnl'
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

const Ambit = ({
    class,
    position,
    openByDefault,
    toggle,
    menu,
}) => {
    const toggleState = getToggleState(openByDefault)
    return (
        r({
            class: clsx('ambit', class),
            style: {
                ...getPosition(position)
            },
            render: [
                menuToggle(toggle, toggleState),
                toggleBox({
                    render: menu,
                    toggleState
                }),
            ]
        })
    )
}

export default Ambit
