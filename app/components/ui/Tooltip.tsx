import { Arrow, Content, Root, Trigger } from "@radix-ui/react-tooltip"
import type { ReactNode } from "react"

type Props = {
  text: string
  children: ReactNode
}

export default function Tooltip({ text, children }: Props) {
  return (
    <Root delayDuration={300}>
      <Trigger style={{ textAlign: "inherit" }}>{children}</Trigger>
      <Content
        className="bg-white text-gray-900 rounded shadow p-1.5 text-sm leading-none font-medium"
        side="top"
        sideOffset={8}
      >
        <Arrow className="text-white fill-current" />
        {text}
      </Content>
    </Root>
  )
}
