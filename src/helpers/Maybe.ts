import { raise } from "./raise"

export class Maybe<T> {
	private constructor(private readonly _value: T | null | undefined) {}

	static from<T>(value: T | null | undefined) {
		return new Maybe(value)
	}

	static empty<T>() {
		return new Maybe<T>(undefined)
	}

	map<U>(fn: (value: T) => U | null | undefined): Maybe<U> {
		return this._value == null ? Maybe.empty() : Maybe.from(fn(this._value))
	}

	mapMaybe<U>(fn: (value: T) => Maybe<U>): Maybe<U> {
		return this._value == null
			? Maybe.empty()
			: Maybe.from(fn(this._value).valueOrNil())
	}

	value(): T {
		return this._value ?? raise("Unexpected error: value is not defined")
	}

	valueOrNil(): T | undefined | null {
		return this._value
	}

	valueOr<U>(fallback: U): T | U {
		return this._value ?? fallback
	}
}
