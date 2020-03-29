import { Node } from '@kjbillings/arsnl'
import { comment } from './dev'

export const svg = props => (
    Node({
        preserveAspectRatio: "xMidYMid meet",
        viewBox: '0 0 16 16',
        ...props,
        t: 'svg',
    })
)

export const g = props => (
    Node({
        ...props,
        t: 'svg:g',
    })
)

export const path = props => (
    Node({
        ...props,
        t: 'svg:path',
    })
)
