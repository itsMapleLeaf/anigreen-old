import { css } from "twind/css"
import type { KeyframeTransition } from "./keyframes"

export function radixTransition(transition: KeyframeTransition) {
	return css({
		"&": {
			animationDuration: "0.3s",
			animationFillMode: "forwards",
		},
		"&[data-state='open']": {
			animationName: transition.in,
		},
		"&[data-state='closed']": {
			animationName: transition.out,
		},
	})
}
