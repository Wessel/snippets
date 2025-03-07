def levenshteinRatio(target: str, source: str) -> float:
  """Compare `target` to `source` using LevenshteinRatio

  Parameters:
    target (str) -- The string to compare with `source`
    source (str) -- The string to compare with `target`

  Returns:
    float -- The Levenshtein distance between `target` and `source`
  """
  if isinstance(target, str) == False or isinstance(source, str) == False:
    return 0.0
  elif target == source:
    return 1.0

  len_source = len(source)
  len_target = len(target)
  distance = [ [ 0 ] * len_target for _ in range(len_source) ]

  for i in range(len_source):
    distance[i][0] = i

  for i in range(len_target):
    distance[0][i] = i

  for i in range(len_source):
    for j in range(len_target):
      cost = 0 if target[j - 1] == source[i - 1] else 1
      distance[i][j] = min(min(distance[i - 1][j] + 1, distance[i][j - 1] + 1), distance[i - 1][j - 1] + cost)

  return (1.0 - distance[len_source - 1][len_target - 1] / max(len_source, len_target))

if __name__ == '__main__':
  print(levenshteinRatio.__doc__)
  print(levenshteinRatio('example', 'exampel'))
