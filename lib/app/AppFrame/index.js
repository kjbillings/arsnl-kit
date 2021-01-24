import { div } from '../../tags'
import theme from '../theme'
import './index.scss'

export const AppFrame = conf => {
    const render = conf.center
    return div({
        class: 'app-frame',
        style: {
            color: theme.getColor('default.light'),
            background: theme.getColor('default.darkest'),
        },
        render: [
            conf.left,
            conf.top,
            conf.center,
            conf.bottom,
            conf.right,
        ]
    })
}

const style = {
    color: theme.getColor('primary.light'),
    background: theme.getColor('primary.dark'),
}

export const AppNavTop = render => (
    div({
        class: 'app-frame-top',
        style,
        render,
    })
)

export const AppNavBottom = render => (
    div({
        class: 'app-frame-bottom',
        style,
        render,
    })
)

export const AppNavLeft = render => (
    div({
        class: 'app-frame-left',
        style,
        render,
    })
)

export const AppNavRight = render => (
    div({
        class: 'app-frame-right',
        style,
        render,
    })
)

export const AppFrameCenter = render => (
    div({
        class: 'app-frame-center',
        render,
    })
)
