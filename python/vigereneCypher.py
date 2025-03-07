# Position of each letter in the alphabet
pos = {
  'a': 0, 'b': 1, 'c': 2, 'd': 3, 'e': 4, 'f': 5, 'g': 6, 'h': 7, 'i': 8, 'j': 9,
  'k': 10, 'l': 11, 'm': 12, 'n': 13, 'o': 14, 'p': 15, 'q': 16, 'r': 17,
  's': 18, 't': 19, 'u': 20, 'v': 21, 'w': 22, 'x': 23, 'y': 24, 'z': 25
}
def ascii(char: str) -> int:
  """
  Get the ASCII value of a lowercase character - 'a'

  Keyword arguments:
    char (str) -- The character to get the ASCII value of

  Returns:
    int -- The ASCII value of `char`
  """
  return ord(char.lower()) - 97

def vigerene(str: str, key: str, decrypt: bool = False) -> str:
  """
  Encrypt or decrypt `str` with `key` using the vigerene cypher

  Keyword arguments:
    str (str):      The string to encrypt/decrypt
    key (str):      The key to use when encrypting/decrypting `str`
    decrypt (bool): Whether to encrypt or decrypt `str` (default False)

  Returns:
    res (str): The encrypted/decrypted version of `str` when using `key`
  """
  res = []  # The encrypted charset
  index = 0 # The current index of the character to encrypt

  # Loop through each character of the string to encrypt
  for char in str:
    # Get the positive shift of `char` in the alphabet if encrypting,
    # negative shift if decrypting
    rotation = ascii(key[index]) if decrypt == False else -ascii(key[index])

    # Append `char` to `res` if not alphanumeric, else shift to
    # the corresponding character matching with `key` and append it to `res`
    if char.isalpha():
      shift = 97 if char.islower() else 65
      res.append(chr((ord(char) + rotation - shift) % 26 + shift))
    else:
      res.append(char)

    # Update the index after each iteration
    index = 0 if index == (len(key) - 1) else + 1

  return ''.join(res)

if __name__ == '__main__':
  key = 'VeryGoodKey'
  str = 'Super secret gamer info: 5050'
  enc = vigerene(str, key)
  dec = vigerene(enc, key, True)

  print(vigerene.__doc__)
  print('Key: %s\nStr: %s\nEnc: %s\nDec: %s' % (key, str, enc, dec))
