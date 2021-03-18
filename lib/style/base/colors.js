export const getColors = theme => {
    const c = theme.colors
    const de = c.default
    const pr = c.primary
    const se = c.secondary
    const wa = c.warning
    const er = c.error
    const su = c.success
    return {

        backgroundLightest: { backgroundColor: de.lightest, },
        colorLightest: { color: de.lightest, },
        backgroundLight: { backgroundColor: de.light, },
        colorLight: { color: de.light, },
        backgroundMedium: { backgroundColor: de.medium, },
        colorMedium: { color: de.medium, },
        backgroundDark: { backgroundColor: de.dark, },
        colorDark: { color: de.dark, },
        backgroundDarkest: { backgroundColor: de.darkest, },
        colorDarkest: { color: de.darkest, },

        backgroundLightestPrimary: { backgroundColor: pr.lightest, },
        colorLightestPrimary: { color: pr.lightest, },
        backgroundLightPrimary: { backgroundColor: pr.light, },
        colorLightPrimary: { color: pr.light, },
        backgroundMediumPrimary: { backgroundColor: pr.medium, },
        colorMediumPrimary: { color: pr.medium, },
        'colorMediumPrimaryHover:hover': { color: pr.medium, },
        'colorMediumPrimaryFocus:focus': { color: pr.medium, },
        backgroundDarkPrimary: { backgroundColor: pr.dark, },
        colorDarkPrimary: { color: pr.dark, },
        backgroundDarkestPrimary: { backgroundColor: pr.darkest, },
        colorDarkestPrimary: { color: pr.darkest, },

        backgroundLightestSecondary: { backgroundColor: se.lightest, },
        colorLightestSecondary: { color: se.lightest, },
        backgroundLightSecondary: { backgroundColor: se.light, },
        colorLightSecondary: { color: se.light, },
        backgroundMediumSecondary: { backgroundColor: se.medium, },
        colorMediumSecondary: { color: se.medium, },
        backgroundDarkSecondary: { backgroundColor: se.dark, },
        colorDarkSecondary: { color: se.dark, },
        backgroundDarkestSecondary: { backgroundColor: se.darkest, },
        colorDarkestSecondary: { color: se.darkest, },

        backgroundLightestWarning: { backgroundColor: wa.lightest, },
        colorLightestWarning: { color: wa.lightest, },
        backgroundLightWarning: { backgroundColor: wa.light, },
        colorLightWarning: { color: wa.light, },
        backgroundMediumWarning: { backgroundColor: wa.medium, },
        colorMediumWarning: { color: wa.medium, },
        backgroundDarkWarning: { backgroundColor: wa.dark, },
        colorDarkWarning: { color: wa.dark, },
        backgroundDarkestWarning: { backgroundColor: wa.darkest, },
        colorDarkestWarning: { color: wa.darkest, },

        backgroundLightestError: { backgroundColor: er.lightest, },
        colorLightestError: { color: er.lightest, },
        backgroundLightError: { backgroundColor: er.light, },
        colorLightError: { color: er.light, },
        backgroundMediumError: { backgroundColor: er.medium, },
        colorMediumError: { color: er.medium, },
        backgroundDarkError: { backgroundColor: er.dark, },
        colorDarkError: { color: er.dark, },
        backgroundDarkestError: { backgroundColor: er.darkest, },
        colorDarkestError: { color: er.darkest, },

        backgroundLightestSuccess: { backgroundColor: su.lightest, },
        colorLightestSuccess: { color: su.lightest, },
        backgroundLightSuccess: { backgroundColor: su.light, },
        colorLightSuccess: { color: su.light, },
        backgroundMediumSuccess: { backgroundColor: su.medium, },
        colorMediumSuccess: { color: su.medium, },
        backgroundDarkSuccess: { backgroundColor: su.dark, },
        colorDarkSuccess: { color: su.dark, },
        backgroundDarkestSuccess: { backgroundColor: su.darkest, },
        colorDarkestSuccess: { color: su.darkest, },

    }
}
