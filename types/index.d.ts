export function batch(callback: () => void): void;
/**
 * A signal with a value property also exposed via toJSON, toString and valueOf.
 * When created via computed, the `value` property is **readonly**.
 * @template T
 */
export class Signal<T> {
    /** @param {T} value the value carried along the signal. */
    constructor(value: T);
    value: T;
    /** @returns {T} */
    then(): T;
    /** @returns {T} */
    toJSON(): T;
    /** @returns {T} */
    toString(): T;
    /** @returns {T} */
    valueOf(): T;
}
/**
 * Returns a read-only Signal that is invoked only when any of the internally
 * used signals, as in within the callback, is unknown or updated.
 * @template T
 * @type {<T>(fn: (v: T) => T, value?: T, options?: { equals?: boolean | ((prev: T, next: T) => boolean) }) => Signal<T>}
 */
export const computed: <T>(fn: (v: T) => T, value?: T, options?: {
    equals?: boolean | ((prev: T, next: T) => boolean);
}) => Signal<T>;
/**
 * Invokes a function when any of its internal signals or computed values change.
 *
 * Returns a dispose callback.
 * @template T
 * @type {<T>(fn: (v: T) => T, value?: T, options?: { async?: boolean }) => void}
 */
export const effect: <T>(fn: (v: T) => T, value?: T, options?: {
    async?: boolean;
}) => void;
/**
 * Returns a writable Signal that side-effects whenever its value gets updated.
 * @template T
 * @type {<T>(initialValue: T, options?: { equals?: boolean | ((prev: T, next: T) => boolean) }) => Signal<T>}
 */
export const signal: <T>(initialValue: T, options?: {
    equals?: boolean | ((prev: T, next: T) => boolean);
}) => Signal<T>;
