/**
 * Normalize a number between two values
 *
 * @param value The value to normalize
 * @param min The minimum of the range
 * @param max The maximum of the range
 * @return The value normalized
 */
export const normalize = (value: number, min: number, max: number) =>
  value <= min ? min : value >= max ? max : value;

/**
 * Round the value if it has to
 *
 * @param value The value to round
 * @param hasFloat Indicates when we need a float or an integer
 * @return The value rounded (or not)
 */
export const round = (value: number, hasFloat: boolean) =>
  !hasFloat ? Math.floor(value) : +value;
