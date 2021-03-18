export const getGraphicalElements = (theme) => {
    const { withUnit } = theme.size
    return {
        hr: {
            margin: `${withUnit(0.5)} ${withUnit(1)}`,
        },
        svg: {
            width: '1em',
            height: '1em',
            fill: 'currentColor',
            display: 'inline-block',
            visibility: 'visible',
        },
    }
}
