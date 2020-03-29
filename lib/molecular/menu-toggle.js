import { Node } from '@kjbillings/arsnl'

export default (r, open) => {
    const button = Node(() => ({
        t: 'button',
        onclick: () => {
            open.value = !open.value
        },
        r
    }))
    return (
        Node(() => ({
            s: {
                width: '100%',
                textAlign: 'right',
            },
            r: button
        }))
    )
}
