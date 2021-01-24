import clsx from 'clsx'
import { waitForRender } from 'arsnl'
import { div } from '../../tags'
import { hasClass } from '../../utilities'
import { ActiveMarker } from '../../atomic/indicators'
import './index.scss'

const ACTIVE_ITEM_CLASS = 'active'


const injectBeforeParent = (activeItem, marker) => {
    const parent = activeItem.parentElement
    if (!isNull(parent)) {
        parent.insertAdjacentElement('beforebegin', marker)
    }
}

const setOffsets = (el, marker) => {
    marker.style.marginLeft = px(el.offsetLeft)
    marker.style.marginTop = px(el.offsetTop)
}

export const buttonGroup = config => {
    const {
        rounded,
        vertical,
        showIndicator,
        indicatorPosition,
        classes,
        buttons,
        states,
        selectedValue,
    } = config
    let activeItem
    let marker
    const render = [
        div({
            render: buttons.map(btn => {
                if (btn.value === selectedValue) {
                    btn.class += ACTIVE_ITEM_CLASS
                    activeItem = btn
                }
                return btn
            })
        })
    ]
    waitForRender(() => {
        if (!isUndefined(activeItem)) {
            const existingMarker = getExistingMarker(activeItem)
            if (existingMarker) {
                setOffsets(activeItem, existingMarker)
            } else {
                marker = createMarker(activeItem, side)
                injectBeforeParent(activeItem, marker)
            }
        }
    })
    return div(() => ({
        class: clsx('button-group relative', classes, { vertical, rounded }),
        render,
    }), states)
}
