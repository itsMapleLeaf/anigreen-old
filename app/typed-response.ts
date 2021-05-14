import { BodyInit, Response, ResponseInit } from "node-fetch"

export interface TypedResponse<D> extends Response {
  json(): Promise<D>
}

type TypedResponseConstructor = new <D>(
  body?: BodyInit,
  init?: ResponseInit,
) => TypedResponse<D>

export const TypedResponse: TypedResponseConstructor = Response

export const json = <D>(data: D, init?: ResponseInit) =>
  new TypedResponse<D>(JSON.stringify(data), init)
