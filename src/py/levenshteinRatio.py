def levenshteinRatio(target, source):
  """Compare `target` to `source` using LevenshteinRatio

  Parameters:
    target (str) -- The string to compare with `source`
    source (str) -- The string to compare with `target`

  Returns:
    int -- The Levenshtein distance between `target` and `source`
  """
  if isinstance(target, str) == False or isinstance(source, str) == False:
    return 0.0
  elif target == source:
    return 1.0

  distance = [ 0 ] * len(source)
  for i in range(len(distance)):
    distance[i] = [ 0 ] * len(target)
  for i in range(len(source)):
    distance[i][0] = i
  for j in range(len(target)):
    distance[0][j] = j

  for i in range(len(source)):
    for j in range(len(target)):
      cost = 0 if target[j - 1] == source[i - 1] else 1
      distance[i][j] = min(min(distance[i - 1][j] + 1, distance[i][j - 1] + 1), distance[i - 1][j - 1] + cost)

  return 1.0 - distance[len(source) - 1][len(target) - 1] / max(len(source), len(target))

if __name__ == '__main__':
  print(levenshteinRatio('example', 'exampel'))
