import { isFunction, isString } from 'lodash'
import { r, isConfig, resolveConfig } from 'arsnl'
import clsx from 'clsx'
import { css } from 'jetpak-css'

// import './index.scss'

const build = (tag, defaultAttrs={}) => (
    (configOrRender, configOrTrackers) => {
        if (isConfig(configOrRender)) {
            return r(() => {
                const conf = resolveConfig(configOrRender)
                return {
                    ...defaultAttrs,
                    ...conf,
                    class: clsx(defaultAttrs.class, conf.class),
                    tag
                }
            }, configOrTrackers)
        }

        if (isConfig(configOrTrackers)) {
            const conf = resolveConfig(configOrTrackers)
            return r({
                ...defaultAttrs,
                ...conf,
                class: clsx(defaultAttrs.class, conf.class),
                render: configOrRender,
                tag
            })
        }

        return r({
            ...defaultAttrs,
            render: configOrRender,
            tag
        })
    }
)
export const a =           build('a')
export const abbr =        build('abbr')
export const address =     build('address')
export const area =        build('area')
export const article =     build('article')
export const aside =       build('aside')
export const audio =       build('audio')
export const b =           build('b')
export const base =        build('base')
export const bdi =         build('bdi')
export const bdo =         build('bdo')
export const blockquote =  build('blockquote')
export const body =        build('body')
export const br =          build('br')
export const button =      build('button')
export const canvas =      build('canvas')
export const caption =     build('caption')
export const cite =        build('cite')
export const code =        build('code')
export const col =         build('col')
export const colgroup =    build('colgroup')
export const command =     build('command')
export const comment =     build('comment')
export const datalist =    build('datalist')
export const dd =          build('dd')
export const del =         build('del')
export const details =     build('details')
export const dfn =         build('dfn')
export const div =         build('div')
export const dl =          build('dl')
export const dt =          build('dt')
export const em =          build('em')
export const embed =       build('embed')
export const fieldset =    build('fieldset')
export const figcaption =  build('figcaption')
export const figure =      build('figure')
export const footer =      build('footer')
export const form =        build('form')
export const h1 =          build('h1')
export const h2 =          build('h2')
export const h3 =          build('h3')
export const h4 =          build('h4')
export const h5 =          build('h5')
export const h6 =          build('h6')
export const head =        build('head')
export const header =      build('header')
export const hgroup =      build('hgroup')
export const hr =          build('hr')
export const html =        build('html')
export const i =           build('i')
export const iframe =      build('iframe')
export const img =         build('img')
export const input =       build('input')
export const ins =         build('ins')
export const kbd =         build('kbd')
export const keygen =      build('keygen')
export const label =       build('label')
export const legend =      build('legend')
export const li =          build('li')
export const link =        build('link')
export const map =         build('map')
export const mark =        build('mark')
export const menu =        build('menu')
export const meta =        build('meta')
export const meter =       build('meter')
export const nav =         build('nav')
export const noscript =    build('noscript')
export const object =      build('object')
export const ol =          build('ol')
export const optgroup =    build('optgroup')
export const option =      build('option')
export const output =      build('output')
export const p =           build('p')
export const path =        build('svg:path')
export const param =       build('param')
export const pre =         build('pre')
export const progress =    build('progress')
export const q =           build('q')
export const rp =          build('rp')
export const rt =          build('rt')
export const ruby =        build('ruby')
export const s =           build('s')
export const samp =        build('samp')
export const script =      build('script')
export const section =     build('section')
export const select =      build('select')
export const small =       build('small')
export const source =      build('source')
export const span =        build('span')
export const strong =      build('strong')
export const style =       build('style')
export const sub =         build('sub')
export const summary =     build('summary')
export const sup =         build('sup')
export const svg = (...args) => {
    if (args.length === 1 && isString(args[0])) {
        const styles = css({svgIcon: { display: 'flex', alignItems: 'center', justifyContent: 'center'}})
        const el = r({
            tag: 'div',
            class: styles.svgIcon,
        })
        el.innerHTML = args[0]
        return el
    }
    return build('svg', { preserveAspectRatio: "xMidYMid meet", viewBox: '0 0 32 32' })(...args)
}
export const table =       build('table')
export const tbody =       build('tbody')
export const td =          build('td')
export const textarea =    build('textarea')
export const tfoot =       build('tfoot')
export const th =          build('th')
export const thead =       build('thead')
export const time =        build('time')
export const title =       build('title')
export const tr =          build('tr')
export const track =       build('track')
export const u =           build('u')
export const ul =          build('ul')
export const _var =        build('var')
export const video =       build('video')
export const wbr =         build('wbr')