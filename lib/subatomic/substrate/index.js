import { Node, isDomNode } from '@kjbillings/arsnl'
import { isObject, isArray } from 'lodash'
import clsx from 'clsx'

import './index.scss'

export { default as toggleBox, getToggleState } from './toggle-box'

// --------------- layout ------------------ //

export const div = (args) => {
    const propsGiven = !isDomNode(args) && isObject(args) && !isArray(args)
    const props = propsGiven
        ? { ...args, t: 'div' }
        : { r: args, t: 'div' }
    return Node(props)
}

export const section = props => (
    Node({
        ...props,
        t: 'section',
    })
)

export const hr = props => (
    Node({
        ...props,
        t: 'hr'
    })
)

export const br = () => Node({ t: 'br' })

export const board = props => (
    Node({
        ...props,
        t: 'div',
        className: clsx('board', props.className),
    })
)
