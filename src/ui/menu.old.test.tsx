import { render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { Menu, MenuItem, MenuItems, MenuTrigger } from "./menu.old"

function setup() {
	const profileOnClick = jest.fn()

	render(
		<Menu>
			<MenuTrigger>
				<button type="button">Menu</button>
			</MenuTrigger>
			<MenuItems>
				<MenuItem>
					<button type="button" onClick={profileOnClick}>
						Profile
					</button>
				</MenuItem>
				<MenuItem>
					<a href="#logout">Log Out</a>
				</MenuItem>
			</MenuItems>
		</Menu>,
	)

	const trigger = () => screen.getByText(/menu/i)
	const profile = () => screen.getByText(/profile/i)
	const logout = () => screen.getByText(/log out/i)

	return {
		trigger,
		profile,
		profileOnClick,
		logout,
		assertVisible: () => {
			expect(profile()).toBeVisible()
			expect(logout()).toBeVisible()
		},
		assertHidden: () => {
			expect(profile()).not.toBeVisible()
			expect(logout()).not.toBeVisible()
		},
	}
}

test("button toggles menu", () => {
	const helpers = setup()

	helpers.assertHidden()
	userEvent.click(helpers.trigger())
	helpers.assertVisible()
	userEvent.click(helpers.trigger())
	helpers.assertHidden()
})

test("clicking an option closes the menu", () => {
	const helpers = setup()

	helpers.assertHidden()
	userEvent.click(helpers.trigger())
	helpers.assertVisible()
	userEvent.click(helpers.profile())
	helpers.assertHidden()
})

test("option callbacks", () => {
	const helpers = setup()

	userEvent.click(helpers.trigger())
	userEvent.click(helpers.profile())
	expect(helpers.profileOnClick).toBeCalled()
})

test("anchor tags navigate", async () => {
	const helpers = setup()

	userEvent.click(helpers.trigger())
	userEvent.click(helpers.logout())
	await waitFor(() => expect(window.location.hash).toBe("#logout"))
})

test("keyboard interaction with space", async () => {
	const helpers = setup()

	helpers.assertHidden()

	userEvent.tab()
	userEvent.type(helpers.trigger(), "{space}", { skipClick: true })
	helpers.assertVisible()

	userEvent.tab()
	expect(helpers.profile()).toHaveFocus()

	userEvent.type(helpers.profile(), "{space}", { skipClick: true })
	helpers.assertHidden()
	await waitFor(() => expect(helpers.trigger()).toHaveFocus()) // focus should _eventually_ return to trigger
})

test("closes with escape", async () => {
	const helpers = setup()

	helpers.assertHidden()

	userEvent.tab()
	userEvent.type(helpers.trigger(), "{space}", { skipClick: true })
	helpers.assertVisible()

	userEvent.type(helpers.trigger(), "{esc}", { skipClick: true })
	helpers.assertHidden()
})
