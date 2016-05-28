import { escapeSource, getAllMatches } from './regexUtils'
import { string, splat, greedySplat } from './rules'

// only for debug purposes
export function _clearCache();

export function getRoute(route);

/**
 * Matches a pathname with a specified pattern
 */
export function matchPattern(route, pathname);

/**
 * Returns a version of the given pattern with params interpolated. Throws
 * if there is a dynamic segment of the pattern for which there is no param.
 */
export function formatPattern(route, params);

export function getParams(route, pathname);
