import { Node } from 'arsnl'
import { isObject, isArray } from 'lodash'
import clsx from 'clsx'

import './index.scss'

export { default as toggleBox, getToggleState } from './toggle-box'

// --------------- layout ------------------ //

export const board = props => (
    r({
        ...props,
        tag: 'div',
        class: clsx('board', props.class),
    })
)

export const card = props => (
    r({
        ...props,
        tag: 'div',
        class: clsx('card', props.class),
    })
)
