/**
 * This rule matches any character except the forward slashes.
 * This is the default rule when nothing else is specified.
 *
 * @param length specifies the precise length of the argument
 * @param minLength specifies the minimum length for the argument
 * @param maxLength specifies the maximum length for the argument
 */
export function string({ maxLength, minLength, length });

/**
 * rule for the greedy splat matcher
 */
export function greedySplat();

/**
 * rule for the splat matcher
 */
export function splat();

/**
 * This rule mathces only if the value is specified in the values array
 */
export function any(...values);

/**
 * This rule matches non negative integers.
 * The following parameters can be specified:
 *
 * @param fixedLength specifies the precise length of the argument
 * @param max specifies the minimum value assignable
 * @param min specifies the maximum value assignable
 */
export function int({ max, min, fixedLength });

/**
 * This rule matches only valid UUIDs.
 */
export function uuid();
/**
 * Utility functions to create custom URL rules
 */
export function createRule({ regex, validate, convert });
