import { Node } from '@kjbillings/arsnl'

const build = (t, r, other) => Node({ ...other, t, r })

// --------------- Headings ------------------ //

export const h1 = (text, other) => build('h1', text, other)

export const h2 = (text, other) => build('h2', text, other)

export const h3 = (text, other) => build('h3', text, other)

export const h4 = (text, other) => build('h4', text, other)

export const h5 = (text, other) => build('h5', text, other)

export const h6 = (text, other) => build('h6', text, other)

// --------------- Body ------------------ //

export const span = (text, other) => build('span', text, other)

export const p = (text, other) => build('p', text, other)

export const i = (text, other) => build('i', text, other)

export const strong = (text, other) => build('strong', text, other)

export const u = (text, other) => build('u', text, other)
