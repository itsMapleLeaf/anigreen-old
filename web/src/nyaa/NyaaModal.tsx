import { Transition } from "@headlessui/react"
import { FocusOn } from "react-focus-on"
import { tw } from "twind"
import { CloseIcon } from "../ui/icons"
import Portal from "../ui/Portal"

export default function NyaaModal({
	query,
	onClose,
}: {
	query: string | undefined
	onClose: () => void
}) {
	return (
		<Transition show={query != null}>
			<Portal>
				<Transition.Child
					className={tw`transition duration-300 relative`}
					enterFrom={tw`opacity-0`}
					enterTo={tw`opacity-100`}
					leaveFrom={tw`opacity-100`}
					leaveTo={tw`opacity-0`}
				>
					<div
						className={tw`fixed inset-0 bg-black bg-opacity-75 flex flex-col p-4`}
					>
						<FocusOn
							className={tw`h-full`}
							onClickOutside={onClose}
							onEscapeKey={onClose}
						>
							<Transition.Child
								className={tw`flex flex-col space-y-4 h-full transition transform`}
								enterFrom={tw`scale-95`}
								enterTo={tw`scale-100`}
								leaveFrom={tw`scale-100`}
								leaveTo={tw`scale-95`}
							>
								<button
									type="button"
									onClick={onClose}
									className={tw`self-end p-3 -m-3`}
								>
									<CloseIcon />
								</button>
								<div
									className={tw`flex-1 bg-gray-800 rounded-lg overflow-hidden shadow`}
								>
									<iframe
										title="Nyaa Search"
										src={`https://nyaa.si/?f=1&c=1_2&q=${query}`}
										width="100%"
										height="100%"
										frameBorder="0"
									/>
								</div>
							</Transition.Child>
						</FocusOn>
					</div>
				</Transition.Child>
			</Portal>
		</Transition>
	)
}
