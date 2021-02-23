import { parseCss } from 'jetpak-css'

import { getBase } from './base'
import { getButtons } from './buttons'
import { getColors } from './colors'
import { getGraphicalElements } from './graphical-elements'
import { getLayout } from './layout'
import { getReset } from './reset'
import { getShape } from './shape'
import { getSpacing } from './spacing'
import { getTransitions } from './transitions'
import { getTypographyBasic } from './typography-basic'
import { getTypographyDisplay } from './typography-display'

export const getBaseStyles = (theme) => ({
    ...getReset(theme),
    ...getBase(theme),
    ...getButtons(theme),
    ...getTypographyBasic(theme),
    ...getTypographyDisplay(theme),
    ...getGraphicalElements(theme),
    ...getShape(theme),
    ...getSpacing(theme),
    ...getTransitions(theme),
    ...getLayout(theme),
    ...getColors(theme),
})
