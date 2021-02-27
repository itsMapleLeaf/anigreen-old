import type { CSSProperties, CSSRules, Directive } from "twind"
import { css, keyframes } from "twind/css"

export function radixTransitionCustom({
	start,
	end,
}: {
	start: Directive<CSSProperties | CSSRules> | CSSProperties | CSSRules
	end: Directive<CSSProperties | CSSRules> | CSSProperties | CSSRules
}) {
	return css({
		"&": {
			animationDuration: "0.25s",
			animationFillMode: "forwards",
		},
		"&[data-state='open']": {
			// @ts-expect-error
			animationName: keyframes({ from: start, to: end }),
		},
		"&[data-state='closed']": {
			// @ts-expect-error
			animationName: keyframes({ from: end, to: start }),
		},
	})
}
