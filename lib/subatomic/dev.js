import { Node } from '@kjbillings/arsnl'

export const comment = str => (
    Node({
        t: 'comment',
        r: str,
    })
)
