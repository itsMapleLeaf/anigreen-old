import type { CSSProperties, CSSRules, Directive } from "twind"
import { apply, keyframes } from "twind/css"

// dear god
type CSSThing = Directive<CSSRules | CSSProperties> | CSSRules | CSSProperties

export type KeyframeTransition = {
	in: Directive<string>
	out: Directive<string>
}

function createKeyframeTransition(start: CSSThing, end: CSSThing) {
	return {
		// @ts-expect-error
		in: keyframes({ from: start, to: end }),
		// @ts-expect-error
		out: keyframes({ from: end, to: start }),
	}
}

export const fade = createKeyframeTransition(
	apply`opacity-0`,
	apply`opacity-100`,
)

export const slideLeft = createKeyframeTransition(
	{ transform: `translateX(-100%)` },
	{ transform: `translateX(0)` },
)
