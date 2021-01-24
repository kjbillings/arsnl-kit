import { Node } from 'arsnl'
import { r } from 'arsnl'

export default (render, open) => {
    const button = r(() => ({
        tag: 'button',
        onclick: () => {
            open.value = !open.value
        },
        render
    }))
    return (
        r(() => ({
            style: {
                width: '100%',
                textAlign: 'right',
            },
            render: button
        }))
    )
}
