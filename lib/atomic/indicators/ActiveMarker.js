// import { isUndefined, isNull } from 'lodash'
// import { waitForRender, State } from 'arsnl'
import { div } from '../../tags'
import { px } from '../../utilities'
import './ActiveMarker.scss'

const ACTIVE_MARKER_CLASS = 'active-marker'

export const ActiveMarker = (activeElement, side="bottom") => {
    div({
        class: `${ACTIVE_MARKER_CLASS} ${side}`,
        style: {
            width: px(activeElement.offsetWidth),
            height: px(activeElement.offsetHeight),
            marginLeft: px(activeElement.offsetLeft),
            marginTop: px(activeElement.offsetTop),
            top: 0,
            left: 0,
        },
    })
}
// const isActiveItem = el => hasClass(el, ACTIVE_ITEM_CLASS)
// //
// const isActiveMarker = el => hasClass(el, ACTIVE_MARKER_CLASS)
// const px = n => `${n}px`
// const setOffsets = (marker, el) => {
//     marker.style.marginLeft = px(el.offsetLeft)
//     marker.style.marginTop = px(el.offsetTop)
// }
//
// const createMarker = (el, side) => (
//     div({
//         class: `${ACTIVE_MARKER_CLASS} ${side}`,
//         style: {
//             width: px(el.offsetWidth),
//             height: px(el.offsetHeight),
//             marginLeft: px(el.offsetLeft),
//             marginTop: px(el.offsetTop),
//             top: 0,
//             left: 0,
//         },
//     })
// )
//
//
// const injectBeforeParent = (activeElement, marker) => {
//     const parent = activeElement.parentElement
//     if (!isNull(parent)) {
//         parent.insertAdjacentElement('beforebegin', marker)
//     }
// }
//
// const getExistingMarker = (activeElement) => {
//     const parent = activeElement.parentElement
//     if (!isNull(parent)) {
//         const el = parent.previousElementSibling
//         if (el && isActiveMarker(el)) {
//             return el
//         }
//     }
// }
//
// export const getActiveMarkerWithItems = (items=[], side="bottom") => {
//     return items
// }
//
// // const getMarker = (items, side) => {
// //     const activeElement = getActiveElement(items)
// //     const existingMarker = getExistingMarker(activeElement)
// //     if (!isUndefined(activeElement)) {
// //         return (
// //             getExistingMarker(activeElement)
// //             || createMarker(activeElement, side)
// //         )
// //     }
// //     return undefined
// // }
// //
//
// export const activeMarker = (items=[], side="bottom") => {
//     waitForRender(() => {
//         const activeElement = getActiveElement(items)
//         if (!isUndefined(activeElement)) {
//             const existingMarker = getExistingMarker(activeElement)
//             if (existingMarker) {
//                 setOffsets(existingMarker, activeElement)
//             } else {
//                 injectBeforeParent(activeElement, createMarker(activeElement, side))
//             }
//         }
//     })
//
//     return div({
//         class: 'relative',
//         render: [
//             div(
//                 items,
//             ),
//         ]
//     })
// }\

// const createMarker = (el, side) => (
//     div({
//         class: `${ACTIVE_MARKER_CLASS} ${side}`,
//         style: {
//             width: px(el.offsetWidth),
//             height: px(el.offsetHeight),
//             marginLeft: px(el.offsetLeft),
//             marginTop: px(el.offsetTop),
//             top: 0,
//             left: 0,
//         },
//     })
// )
//
// const injectBeforeParent = (activeElement, marker) => {
//     const parent = activeElement.parentElement
//     if (!isNull(parent)) {
//         parent.insertAdjacentElement('beforebegin', marker)
//     }
// }
//
// const setOffsets = (marker, el) => {
//     marker.style.marginLeft = px(el.offsetLeft)
//     marker.style.marginTop = px(el.offsetTop)
// }
//
// const getExistingMarker = (activeElement) => {
//     const parent = activeElement.parentElement
//     if (!isNull(parent)) {
//         const el = parent.parentElement.firstElementChild
//         console.log(el);
//         if (!isNull(el) && isActiveMarker(el)) {
//             return el
//         }
//     }
// }


// import { isUndefined, isNull } from 'lodash'
// import { waitForRender, State } from 'arsnl'
// import { div } from '../../tags'
// import './ActiveMarker.scss'
// //
// // const ACTIVE_MARKER_CLASS = 'active-marker'
// // const hasClass = (el, className) => el.classList.contains(className)
// // const isActiveItem = el => hasClass(el, 'active')
// //
// // const isActiveMarker = el => hasClass(el, ACTIVE_MARKER_CLASS)
// // const px = n => `${n}px`
// // const setOffsets = (marker, el) => {
// //     marker.style.marginLeft = px(el.offsetLeft)
// //     marker.style.marginTop = px(el.offsetTop)
// // }
// //
// // const createMarker = (el, side) => (
// //     div({
// //         class: `${ACTIVE_MARKER_CLASS} ${side}`,
// //         style: {
// //             width: px(el.offsetWidth),
// //             height: px(el.offsetHeight),
// //             marginLeft: px(el.offsetLeft),
// //             marginTop: px(el.offsetTop),
// //             top: 0,
// //             left: 0,
// //         },
// //     })
// // )
// //
// const getActiveElement = items => items.filter(item => isActiveItem(item))[0]
// //
// // const injectBeforeParent = (activeElement, marker) => {
// //     const parent = activeElement.parentElement
// //     if (!isNull(parent)) {
// //         parent.insertAdjacentElement('beforebegin', marker)
// //     }
// // }
// //
// // const getExistingMarker = (activeElement) => {
// //     const parent = activeElement.parentElement
// //     if (!isNull(parent)) {
// //         const el = parent.previousElementSibling
// //         if (el && isActiveMarker(el)) {
// //             return el
// //         }
// //     }
// // }
// //
// // export const getActiveMarkerWithItems = (items=[], side="bottom") => {
// //     return items
// // }
// //
// // // const getMarker = (items, side) => {
// // //     const activeElement = getActiveElement(items)
// // //     const existingMarker = getExistingMarker(activeElement)
// // //     if (!isUndefined(activeElement)) {
// // //         return (
// // //             getExistingMarker(activeElement)
// // //             || createMarker(activeElement, side)
// // //         )
// // //     }
// // //     return undefined
// // // }
// // //
// //
// // export const activeMarker = (items=[], side="bottom") => {
// //     waitForRender(() => {
// //         const activeElement = getActiveElement(items)
// //         if (!isUndefined(activeElement)) {
// //             const existingMarker = getExistingMarker(activeElement)
// //             if (existingMarker) {
// //                 setOffsets(existingMarker, activeElement)
// //             } else {
// //                 injectBeforeParent(activeElement, createMarker(activeElement, side))
// //             }
// //         }
// //     })
// //
// //     return div({
// //         class: 'relative',
// //         render: [
// //             div(
// //                 items,
// //             ),
// //         ]
// //     })
// // }
//
//
// const ACTIVE_MARKER_CLASS = 'active-marker'
// const hasClass = (el, className) => el.classList.contains(className)
// const isActiveItem = el => hasClass(el, 'active')
//
// const isActiveMarker = el => hasClass(el, ACTIVE_MARKER_CLASS)
// const px = n => `${n}px`
// const setOffsets = (marker, el) => {
//     marker.style.marginLeft = px(el.offsetLeft)
//     marker.style.marginTop = px(el.offsetTop)
// }
//
// // const createMarker = (el, side) => (
// //     div({
// //         class: `${ACTIVE_MARKER_CLASS} ${side}`,
// //         style: {
// //             width: px(el.offsetWidth),
// //             height: px(el.offsetHeight),
// //             marginLeft: px(el.offsetLeft),
// //             marginTop: px(el.offsetTop),
// //             top: 0,
// //             left: 0,
// //         },
// //     })
// // )
// //
// const injectBeforeParent = (activeElement, marker) => {
//     const parent = activeElement.parentElement
//     if (!isNull(parent)) {
//         parent.insertAdjacentElement('beforebegin', marker)
//     }
// }
//
// const getExistingMarker = (activeElement) => {
//     const parent = activeElement.parentElement
//     if (!isNull(parent)) {
//         const el = parent.parentElement.firstElementChild
//         console.log(el);
//         if (!isNull(el) && isActiveMarker(el)) {
//             return el
//         }
//     }
// }
//
// export const activeMarker = (items=[], side="bottom") => {
//     const activeElement = getActiveElement(items)
//     const state = State({ value: {} })
//     waitForRender(() => {
//         const activeElement = getActiveElement(items)
//         state.value = {
//             width: px(activeElement.offsetWidth),
//             height: px(activeElement.offsetHeight),
//             marginLeft: px(activeElement.offsetLeft),
//             marginTop: px(activeElement.offsetTop),
//         }
//     })
//     return div({
//         class: 'relative',
//         render: [
//             div(() => ({
//                 class: `${ACTIVE_MARKER_CLASS} ${side}`,
//                 style: {
//                     ...state.value,
//                     top: 0,
//                     left: 0,
//                 },
//             }), [ state ]),
//             div(items)
//         ]
//     })
// }
