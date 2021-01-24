import { r } from 'arsnl'
import { svg, path } from '../../tags'

const iconRegEx = /<(?!\?xml|svg|!--|path|title|g).+[\s>]/gim
export const Icon = (def, props) => {
    const isPathological = iconRegEx.test(def)
    if (isPathological) {
        return (
            svg({
                ...props,
                render: (
                    def.match(/\sd="([^"]+)/g)
                        .map(str => (
                            path({
                                d: str.replace(/\sd="/g, '')
                            })
                        ))
                )
            })
        )
    } else {
        console.error(`ERROR: icon() is not pathological...\n ${def}`)
    }
}
