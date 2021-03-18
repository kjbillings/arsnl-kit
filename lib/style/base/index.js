import { merge } from 'lodash'

import { getBase } from './base'
import { getButtons } from './buttons'
import { getColors } from './colors'
import { getGraphicalElements } from './graphical-elements'
import { getLayout } from './layout'
import { getReset } from './reset'
import { getShape } from './shape'
import { getSpacing } from './spacing'
import { getTransitions } from './transitions'
import { getFontFace } from './typography-font'
import { getTypographyBasic } from './typography-basic'
import { getTypographyDisplay } from './typography-display'

const getBaseStyles = (theme) => {
    return merge(
        getFontFace(theme),
        getReset(theme),
        getBase(theme),
        getButtons(theme),
        getTypographyDisplay(theme),
        getTypographyBasic(theme),
        getGraphicalElements(theme),
        getShape(theme),
        getSpacing(theme),
        getTransitions(theme),
        getLayout(theme),
        getColors(theme),
    )
}

export default getBaseStyles
