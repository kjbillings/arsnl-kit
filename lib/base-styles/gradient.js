const angles = {
    mozWeb: {
        'diagonal-down': (a, b) => `-45deg, ${a} 0%, ${b} 100%`,
        'diagonal-up': (a, b) => `45deg, ${a} 0%, ${b} 100%`,
        vertical: (a, b) => `top, ${a} 0%, ${b} 100%`,
        horizontal: (a, b) => `left, ${a} 0%, ${b} 100%`,
        radial: (a, b) => `center, ellipse cover, ${a} 0%, ${b} 100%`,
    },
    generic: {
        'diagonal-down': (a, b) => `135deg, ${a} 0%,${b} 100%`,
        'diagonal-up': (a, b) => `45deg, ${a} 0%,${b} 100%`,
        vertical: (a, b) => `to bottom, ${a} 0%,${b} 100%`,
        horizontal: (a, b) => `to right, ${a} 0%,${b} 100%`,
        radial: (a, b) => `ellipse at center, ${a} 0%,${b} 100%`,
    },
}

export default function gradient (a, b, angle="vertical") {
    return {
        background: a,
        background: `-moz-linear-gradient(${angles.mozWeb[angle](a, b)})`,
        background: `-webkit-linear-gradient(${angles.mozWeb[angle](a, b)})`,
        background: `linear-gradient(${angles.generic[angle](a, b)})`,
    }
}
