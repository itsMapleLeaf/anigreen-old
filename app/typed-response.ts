import { BodyInit, Response, ResponseInit } from "node-fetch"

export interface TypedResponse<D> extends Response {
  json(): Promise<D>
}

type TypedResponseConstructor = new <D>(
  body?: BodyInit,
  init?: ResponseInit,
) => TypedResponse<D>

export const TypedResponse: TypedResponseConstructor = Response

type Json =
  | string
  | number
  | boolean
  | null
  | Array<Json>
  | { [key: string]: Json | undefined }

export function json<D extends Json>(data: D, init?: ResponseInit) {
  return new TypedResponse<D>(JSON.stringify(data), {
    ...init,
    headers: {
      "Content-Type": "application/json",
      ...init?.headers,
    },
  })
}
