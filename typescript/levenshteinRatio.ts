/**
 * Compare `target` to `source` using LevenshteinRatio
 *
 * @param {string} target The string to compare with `source`
 * @param {string} source The string to compare with `target`
 * @returns {number} The Levenshtein distance between `target` and `source`
 * @example
 *
 * levenshteinRatio('exampel', 'example')
 * // => 0.7142857142857143
 */
export function levenshteinRatio(target: string, source:string): number {
  if (source === null || target === null || source.length === 0 || target.length === 0) return 0.0;
  if (source === target) return 1.0;

  let distance = new Array(source.length + 1);
  for (let i = 0; i < distance.length; i++) distance[i] = new Array(target.length + 1);

  for (let i = 0; i <= source.length; distance[i][0] = i++);
  for (let j = 0; j <= target.length; distance[0][j] = j++);

  for (let i = 1; i <= source.length; i++) {
    for (let j = 1; j <= target.length; j++) {
      let cost = target.charAt(j - 1) === source.charAt(i - 1) ? 0 : 1;
      distance[i][j] = Math.min(Math.min(distance[i - 1][j] + 1, distance[i][j - 1] + 1) ,distance[i - 1][j - 1] + cost);
    }
  }

  return 1.0 - distance[source.length][target.length] / Math.max(source.length, target.length);
};