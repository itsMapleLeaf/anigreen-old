import { Dialog, Transition } from "@headlessui/react"
import { XIcon } from "@heroicons/react/solid"
import * as React from "react"
import Slot from "../react/Slot"
import { fadeTransition, slideLeftTransition } from "./transitions"

export default function Drawer(props: {
	trigger: React.ReactElement
	children: React.ReactNode
}) {
	const [open, setOpen] = React.useState(false)

	return (
		<>
			<Slot element={props.trigger} onClick={() => setOpen(true)} />

			<Transition.Root as={React.Fragment} show={open}>
				<Dialog static open={open} onClose={setOpen}>
					<Transition.Child as={React.Fragment} {...fadeTransition}>
						<Dialog.Overlay tw="fixed inset-0 bg-black bg-opacity-75" />
					</Transition.Child>

					<Transition.Child as={React.Fragment} {...slideLeftTransition}>
						<div tw="fixed inset-y-0 left-0 flex items-start transform">
							<div
								tw="bg-gray-800 shadow h-full"
								onClickCapture={() => setOpen(false)}
							>
								{props.children}
							</div>

							<button type="button" tw="p-2" onClick={() => setOpen(false)}>
								<p tw="sr-only">Close</p>
								<XIcon tw="w-6" />
							</button>
						</div>
					</Transition.Child>
				</Dialog>
			</Transition.Root>
		</>
	)
}
