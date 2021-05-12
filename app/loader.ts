import type { AppLoadContext, Request } from "@remix-run/node"
import { useRouteData } from "@remix-run/react"
import type { TypedResponse } from "./typed-response"

type Params = Record<string, string>
type MaybePromise<T> = Promise<T> | T

export type LoaderArgs = {
  request: Request
  context: AppLoadContext
  params: Params
}

// prettier-ignore
type TypedLoaderFunction<Data> = (args: LoaderArgs) =>
  MaybePromise<Data | TypedResponse<Data>>

export type LoaderData<Fn> = Fn extends TypedLoaderFunction<infer Data>
  ? Data
  : unknown

export function loaderFunction<Data>(fn: TypedLoaderFunction<Data>) {
  return fn
}

export function useRouteDataTyped<Fn>(): LoaderData<Fn> {
  return useRouteData()
}
