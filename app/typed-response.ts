import type { Response } from "@remix-run/node"

export interface TypedResponse<D> extends Response {
  json(): Promise<D>
}
