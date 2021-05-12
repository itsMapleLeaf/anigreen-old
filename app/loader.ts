import type { AppLoadContext, Request } from "@remix-run/node"
import { useRouteData } from "@remix-run/react"
import type { TypedResponse } from "./typed-response"

type Params = Record<string, string>

type LoaderContext = {
  request: Request
  context: AppLoadContext
  params: Params
}

type MaybePromise<T> = Promise<T> | T

// prettier-ignore
type TypedLoaderFunction<Data> = (context: LoaderContext) =>
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
