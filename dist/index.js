'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var arsnl = require('@kjbillings/arsnl');
var lodash = require('lodash');
var clsx = _interopDefault(require('clsx'));

const getToggleState = openByDefault => (
    arsnl.State({ value: openByDefault === true })
);

var toggleBox = ({
    r=arsnl.Node(),
    toggleState=getToggleState(),
    className,
    animationDurationMS=250,
    ...rest
}) => {
    const transition = `all ${animationDurationMS}ms ease-out`;

    const getSize = () => toggleState.value ? 'auto' : '0px';

    const el = arsnl.Node(() => ({
        ...rest,
        t: 'div',
        s: {
            height: getSize(),
            width: getSize(),
            transition,
        },
        r,
        className: clsx('toggle-box', className),
        ontransitionend: (e) => {
            if (toggleState.value) {
                e.target.style.height = 'auto';
                e.target.style.width = 'auto';
            }
        },
    }));

    const setStyle = (height, width) => (
        el.setAttribute('style', `height: ${height}; width: ${width}; transition: ${transition}`)
    );

    arsnl.subscribe(toggleState, (key, value) => {
        const delay = value ? animationDurationMS : 100;
        setStyle(`${r.scrollHeight}px`, `${r.scrollWidth}px`);
        setTimeout(() => setStyle(getSize(), getSize()), delay);
    });

    return el
};

// --------------- layout ------------------ //

const div = (args) => {
    const propsGiven = !arsnl.isDomNode(args) && lodash.isObject(args) && !lodash.isArray(args);
    const props = propsGiven
        ? { ...args, t: 'div' }
        : { r: args, t: 'div' };
    return arsnl.Node(props)
};

const section = props => (
    arsnl.Node({
        ...props,
        t: 'section',
    })
);

const hr = props => (
    arsnl.Node({
        ...props,
        t: 'hr'
    })
);

const br = () => arsnl.Node({ t: 'br' });

const board = props => (
    arsnl.Node({
        ...props,
        t: 'div',
        className: clsx('board', props.className),
    })
);

var menuToggle = (r, open) => {
    const button = arsnl.Node(() => ({
        t: 'button',
        onclick: () => {
            open.value = !open.value;
        },
        r
    }));
    return (
        arsnl.Node(() => ({
            s: {
                width: '100%',
                textAlign: 'right',
            },
            r: button
        }))
    )
};

const getPosition = (position) => (
    lodash.reduce(['top', 'left', 'right', 'bottom'], (style, value) => {
        if (lodash.includes(position, value)) {
            style[value] = 0;
        }
        return style
    }, {})
);

var ambit = ({
    className,
    position,
    openByDefault,
    toggle,
    menu,
}) => {
    const toggleState = getToggleState(openByDefault);
    return (
        arsnl.Node({
            className: clsx('ambit', className),
            style: {
                ...getPosition(position),
            },
            r: [
                menuToggle(toggle, toggleState),
                toggleBox({
                    r: menu,
                    toggleState
                }),
            ]
        })
    )
};

const build = (t, r, other) => arsnl.Node({ ...other, t, r });

// --------------- Headings ------------------ //

const h1 = (text, other) => build('h1', text, other);

const h2 = (text, other) => build('h2', text, other);

const h3 = (text, other) => build('h3', text, other);

const h4 = (text, other) => build('h4', text, other);

const h5 = (text, other) => build('h5', text, other);

const h6 = (text, other) => build('h6', text, other);

// --------------- Body ------------------ //

const span = (text, other) => build('span', text, other);

const p = (text, other) => build('p', text, other);

const i = (text, other) => build('i', text, other);

const strong = (text, other) => build('strong', text, other);

const u = (text, other) => build('u', text, other);

const comment = str => (
    arsnl.Node({
        t: 'comment',
        r: str,
    })
);

const svg = props => (
    arsnl.Node({
        preserveAspectRatio: "xMidYMid meet",
        viewBox: '0 0 16 16',
        ...props,
        t: 'svg',
    })
);

const g = props => (
    arsnl.Node({
        ...props,
        t: 'svg:g',
    })
);

const path = props => (
    arsnl.Node({
        ...props,
        t: 'svg:path',
    })
);

exports.ambit = ambit;
exports.board = board;
exports.br = br;
exports.comment = comment;
exports.div = div;
exports.g = g;
exports.getToggleState = getToggleState;
exports.h1 = h1;
exports.h2 = h2;
exports.h3 = h3;
exports.h4 = h4;
exports.h5 = h5;
exports.h6 = h6;
exports.hr = hr;
exports.i = i;
exports.menuToggle = menuToggle;
exports.p = p;
exports.path = path;
exports.section = section;
exports.span = span;
exports.strong = strong;
exports.svg = svg;
exports.toggleBox = toggleBox;
exports.u = u;
