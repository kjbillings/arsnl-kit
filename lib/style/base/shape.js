export const getShape = (theme) => {
    const { withUnit } = theme.size
    return {
        corners: {
            borderRadius: withUnit(0.5),
        },
        cornersMd: {
            borderRadius: withUnit(0.5),
        },
        cornersSm: {
            borderRadius: withUnit(0.25),
        },
        cornersLg: {
            borderRadius: withUnit(1),
        },
        circle: {
            borderRadius: '50%',
        },
        square: {
            borderRadius: 0,
        },
    }
}
