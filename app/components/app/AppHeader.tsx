import { Disclosure } from "@headlessui/react"
import {
  BookmarkIcon,
  CalendarIcon,
  MenuIcon,
  XIcon,
} from "@heroicons/react/solid"
import type { ReactElement, ReactNode } from "react"
import { Link, useMatch } from "react-router-dom"
import Slot from "../react/Slot"
import { clearIconButtonStyle } from "../ui/components"
import { ViewerMenuLoggedIn, ViewerMenuLoggedOut } from "../viewer/viewer-menu"
import AppLogoLink from "./AppLogoLink"

export default function AppHeader({ viewer }: { viewer: any }) {
  return (
    <Disclosure>
      {({ open }) => (
        <>
          <div className="flex items-center">
            <Disclosure.Button
              type="button"
              className={`${clearIconButtonStyle} -my-1 sm:hidden mr-3`}
            >
              <span className="sr-only">Open main menu</span>
              {open ? <XIcon className="w-6" /> : <MenuIcon className="w-6" />}
            </Disclosure.Button>

            <AppLogoLink />

            <nav className="items-center hidden ml-4 sm:flex">
              <NavItems />
            </nav>

            <div className="flex-1" />

            {viewer ? (
              <ViewerMenuLoggedIn viewer={viewer} />
            ) : (
              <ViewerMenuLoggedOut />
            )}
          </div>

          <Disclosure.Panel className="grid gap-1 mt-2 sm:hidden">
            <NavItems />
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

function NavItems() {
  return (
    <>
      <NavRouterLink to="/watching">
        <BookmarkIcon className="w-5" />
        <span>Watching</span>
      </NavRouterLink>
      <NavRouterLink to="/schedule">
        <CalendarIcon className="w-5" />
        <span>Schedule</span>
      </NavRouterLink>
    </>
  )
}

function NavItem({
  active,
  children,
}: {
  active?: boolean
  children: ReactElement
}) {
  const baseStyle = `flex items-center block rounded-lg space-x-2 p-3 font-medium transition leading-none`
  const activeStyle = `text-green-400 bg-black bg-opacity-25`
  const inactiveStyle = `opacity-50 hover:opacity-100`

  return (
    <Slot
      element={children}
      className={`${baseStyle} ${active ? activeStyle : inactiveStyle}`}
    />
  )
}

function NavRouterLink({ children, to }: { children: ReactNode; to: string }) {
  const match = useMatch(to)
  return (
    <NavItem active={match != null}>
      <Link to={to}>{children}</Link>
    </NavItem>
  )
}
