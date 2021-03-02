/**
 * @since 3.0.0
 */
import { Refinement } from 'fp-ts/function'
import { HKT, Kind, Kind2, URIS, URIS2 } from 'fp-ts/HKT'

/**
 * @since 3.0.0
 */
export type Literal = string | number | boolean | null

/**
 * @since 3.0.0
 */
export interface Schemable<S> {
  readonly URI?: S
  readonly literal: <A extends readonly [Literal, ...ReadonlyArray<Literal>]>(...values: A) => HKT<S, A[number]>
  readonly string: HKT<S, string>
  readonly number: HKT<S, number>
  readonly boolean: HKT<S, boolean>
  readonly nullable: <A>(or: HKT<S, A>) => HKT<S, null | A>
  readonly struct: <A>(properties: { [K in keyof A]: HKT<S, A[K]> }) => HKT<S, { [K in keyof A]: A[K] }>
  readonly partial: <A>(properties: { [K in keyof A]: HKT<S, A[K]> }) => HKT<S, Partial<{ [K in keyof A]: A[K] }>>
  readonly record: <A>(codomain: HKT<S, A>) => HKT<S, Record<string, A>>
  // tslint:disable-next-line: readonly-array
  readonly array: <A>(item: HKT<S, A>) => HKT<S, Array<A>>
  readonly tuple: <A extends ReadonlyArray<unknown>>(...components: { [K in keyof A]: HKT<S, A[K]> }) => HKT<S, A>
  readonly intersect: <B>(right: HKT<S, B>) => <A>(left: HKT<S, A>) => HKT<S, A & B>
  readonly sum: <T extends string>(
    tag: T
  ) => <A>(members: { [K in keyof A]: HKT<S, A[K] & Record<T, K>> }) => HKT<S, A[keyof A]>
  readonly lazy: <A>(id: string, f: () => HKT<S, A>) => HKT<S, A>
}

/**
 * @since 3.0.0
 */
export interface Schemable1<S extends URIS> {
  readonly URI?: S
  readonly literal: <A extends readonly [Literal, ...ReadonlyArray<Literal>]>(...values: A) => Kind<S, A[number]>
  readonly string: Kind<S, string>
  readonly number: Kind<S, number>
  readonly boolean: Kind<S, boolean>
  readonly nullable: <A>(or: Kind<S, A>) => Kind<S, null | A>
  readonly struct: <A>(properties: { [K in keyof A]: Kind<S, A[K]> }) => Kind<S, { [K in keyof A]: A[K] }>
  readonly partial: <A>(properties: { [K in keyof A]: Kind<S, A[K]> }) => Kind<S, Partial<{ [K in keyof A]: A[K] }>>
  readonly record: <A>(codomain: Kind<S, A>) => Kind<S, Record<string, A>>
  // tslint:disable-next-line: readonly-array
  readonly array: <A>(item: Kind<S, A>) => Kind<S, Array<A>>
  readonly tuple: <A extends ReadonlyArray<unknown>>(...components: { [K in keyof A]: Kind<S, A[K]> }) => Kind<S, A>
  readonly intersect: <B>(right: Kind<S, B>) => <A>(left: Kind<S, A>) => Kind<S, A & B>
  readonly sum: <T extends string>(
    tag: T
  ) => <A>(members: { [K in keyof A]: Kind<S, A[K] & Record<T, K>> }) => Kind<S, A[keyof A]>
  readonly lazy: <A>(id: string, f: () => Kind<S, A>) => Kind<S, A>
}

/**
 * @since 3.0.0
 */
export interface Schemable2C<S extends URIS2, E> {
  readonly URI?: S
  readonly literal: <A extends readonly [Literal, ...ReadonlyArray<Literal>]>(...values: A) => Kind2<S, E, A[number]>
  readonly string: Kind2<S, E, string>
  readonly number: Kind2<S, E, number>
  readonly boolean: Kind2<S, E, boolean>
  readonly nullable: <A>(or: Kind2<S, E, A>) => Kind2<S, E, null | A>
  readonly struct: <A>(properties: { [K in keyof A]: Kind2<S, E, A[K]> }) => Kind2<S, E, { [K in keyof A]: A[K] }>
  readonly partial: <A>(
    properties: { [K in keyof A]: Kind2<S, E, A[K]> }
  ) => Kind2<S, E, Partial<{ [K in keyof A]: A[K] }>>
  readonly record: <A>(codomain: Kind2<S, E, A>) => Kind2<S, E, Record<string, A>>
  // tslint:disable-next-line: readonly-array
  readonly array: <A>(item: Kind2<S, E, A>) => Kind2<S, E, Array<A>>
  readonly tuple: <A extends ReadonlyArray<unknown>>(
    ...components: { [K in keyof A]: Kind2<S, E, A[K]> }
  ) => Kind2<S, E, A>
  readonly intersect: <B>(right: Kind2<S, E, B>) => <A>(left: Kind2<S, E, A>) => Kind2<S, E, A & B>
  readonly sum: <T extends string>(
    tag: T
  ) => <A>(members: { [K in keyof A]: Kind2<S, E, A[K] & Record<T, K>> }) => Kind2<S, E, A[keyof A]>
  readonly lazy: <A>(id: string, f: () => Kind2<S, E, A>) => Kind2<S, E, A>
}

/**
 * @since 3.0.0
 */
export interface WithUnknownContainers<S> {
  // tslint:disable-next-line: readonly-array
  readonly UnknownArray: HKT<S, Array<unknown>>
  readonly UnknownRecord: HKT<S, Record<string, unknown>>
}

/**
 * @since 3.0.0
 */
export interface WithUnknownContainers1<S extends URIS> {
  // tslint:disable-next-line: readonly-array
  readonly UnknownArray: Kind<S, Array<unknown>>
  readonly UnknownRecord: Kind<S, Record<string, unknown>>
}

/**
 * @since 3.0.0
 */
export interface WithUnknownContainers2C<S extends URIS2, E> {
  // tslint:disable-next-line: readonly-array
  readonly UnknownArray: Kind2<S, E, Array<unknown>>
  readonly UnknownRecord: Kind2<S, E, Record<string, unknown>>
}

/**
 * @since 3.0.0
 */
export interface WithUnion<S> {
  readonly union: <A extends readonly [unknown, ...ReadonlyArray<unknown>]>(
    ...members: { [K in keyof A]: HKT<S, A[K]> }
  ) => HKT<S, A[number]>
}

/**
 * @since 3.0.0
 */
export interface WithUnion1<S extends URIS> {
  readonly union: <A extends readonly [unknown, ...ReadonlyArray<unknown>]>(
    ...members: { [K in keyof A]: Kind<S, A[K]> }
  ) => Kind<S, A[number]>
}

/**
 * @since 3.0.0
 */
export interface WithUnion2C<S extends URIS2, E> {
  readonly union: <A extends readonly [unknown, ...ReadonlyArray<unknown>]>(
    ...members: { [K in keyof A]: Kind2<S, E, A[K]> }
  ) => Kind2<S, E, A[number]>
}

/**
 * @since 3.0.0
 */
export interface WithRefine<S> {
  readonly refine: <A, B extends A>(refinement: Refinement<A, B>, id: string) => (from: HKT<S, A>) => HKT<S, B>
}

/**
 * @since 3.0.0
 */
export interface WithRefine1<S extends URIS> {
  readonly refine: <A, B extends A>(refinement: Refinement<A, B>, id: string) => (from: Kind<S, A>) => Kind<S, B>
}

/**
 * @since 3.0.0
 */
export interface WithRefine2C<S extends URIS2, E> {
  readonly refine: <A, B extends A>(
    refinement: Refinement<A, B>,
    id: string
  ) => (from: Kind2<S, E, A>) => Kind2<S, E, B>
}

/**
 * @since 3.0.0
 */
export function memoize<A, B>(f: (a: A) => B): (a: A) => B {
  const cache = new Map()
  return (a) => {
    if (!cache.has(a)) {
      const b = f(a)
      cache.set(a, b)
      return b
    }
    return cache.get(a)
  }
}

// -------------------------------------------------------------------------------------
// utils
// -------------------------------------------------------------------------------------

const typeOf = (x: unknown): string => (x === null ? 'null' : typeof x)

/**
 * @internal
 */
export const intersect_ = <A, B>(a: A, b: B): A & B => {
  if (a !== undefined && b !== undefined) {
    const tx = typeOf(a)
    const ty = typeOf(b)
    if (tx === 'object' || ty === 'object') {
      return Object.assign({}, a, b)
    }
  }
  return b as any
}
