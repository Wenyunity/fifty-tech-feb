# Rules

Here were all rules, 1-50.

1. Does the response have an e?
2. Does the response have less than 9 e's?
3. Does the response begin and end with different characters?
4. Does the second character in the response appear later?
5. Does the response have a word with one character?
6. Does the response have two consecutive lowercase a's with 10 characters between them>
7. Does the response have a word with 50%+ of its characters being AEIOU?
8. Does the response have three words with greater than 7 characters?
9. Is the first word length in the response not a divisor of the response's length?
10. Does the response& **not** have exactly 10 words?
11. Does the response contain at least one word such that the character with charcode (64 + word length) is in it? (A-Z maps to 1-26 length)
12. Does the response contain at least one word such that the character with charcode (96 + word length) is in it? (a-z maps to 1-26 length)
13. Does the response have either a left parentheses without a right parentheses *or* a right parentheses before at least one left parentheses?
14. Does the response have more than 14 characters that aren't A-Za-z or spaces?
15. Does the response have two words with 5 letters that do not share any characters?
16. Is the length of the response's longest word **less** than the amount of words in the response?
17. Is the length of the response **less** than the charcode of the first character?
18. Does the response have a non-zero equal amount of two vowels?
19. Does the response satisfy the following inequality: 10 * Uppercase Letters < Lowercase Letters?
20. Does the response have a character that has a charcode over 200?
21. Remove all characters in the response except for "0123456789". Let A be the concatenation of what remains in the response. Let B be the sum of all charcodes remaining in the response. Is A > B?
22. Do you have the pattern "ABAB" in your response? (This pattern can be done with any two characters.)
23. Does "B" appear before "C" in your response? *{See Errors}*
24. Remove all characters in the response except for consonants. Does a single consonant appear 3 times in a row?
25. Is there an "o" in the final quarter of the response? (Round down.)
26. Is the response **not** a pangram?
27. Allowing letters in between, is the string "weny" in the response?
28. Remove all letters but JOILSTZ from the response. Are the remaining characters a legal 7-bag Tetris draw with at least one full bag? 
29. Does the response have an "L" in position X when counting from the beginning and an "R" in position X when counting from the end? (X must be the same)
30. Does the response have a majority of its letters in the top row?
31. Let A-Z be equal to 1-26. Is there a consecutive set of letters that sum to 31?
32. Take the alternating sum of charcodes in the response. Is that number positive?
33. Do you have three consecutive characters (c1, c2, c3) with charcodes that satisfy c1 + c2 = c3?
34. Is there a lowercase x in the response with the two characters adjacent to it having charcodes that multiply to 13400 or more? *(See Errors}*
35. Let A-Z be equal to 1-26. Does the response have a word with 5 or more letters where the first and last letters have a greater sum than all the other characters?
36. Does the response have four consecutive words that are lexicographically earlier? *{See Errors}*
37. Does the response have four consecutive words that are lexicographically later? *{See Errors}*
38. If the response is compared to the response with its first 8 characters removed, do at least 8 positions have the same character?
39. Take the alternating sum of word lengths in the response. Is that number positive?
40. Does the response have at least 40 unique symbols?
41. Let a-z be equal to 1-26. Are there three characters (a, b, c) that satisfy a^2 + b^2 = c^2?
42. Define "process" as follows: Given a character, jump to the index of its charcode. Repeat this process with the character at that index. Does this process infinitely loop with the response if it starts with the first character?
43. Sort the response's words in charcode order. Do at least three words hold the same position in the original response?
44. Does every fourth character in the response have a different symbol in it? (Automatically passes if < 8 characters)
45. Take the distances between consecutive vowels in the response. Are all lengths between (and including) 0-5 present?
46. Does the response have four consecutive characters with charcodes that differ by a constant value?
47. Does the response have two of the same character that is its charcode apart?
48. Does the response's length have 10 or more factors?
49. Is the sum of appearances of ZXCVBNM in the response a square number? (0 and 1 pass)
50. Does the response have exactly 100 characters *and* does the same character occupy positions (n, mod(3(n + 1), 50) for n between (and including) 0 and 49 *and* no character may appear more than twice? *{See Errors}*

## Errors

23. The code does not check that C exists in the response. Therefore, responses with only "B" will pass.
34. If x is the first character, this tech multiplies the charcode of "x" and the third character.
36 & 37. Non-alphabetic characters are ignored for this, but this may create an empty string. An empty string has not been tested.
50. indexOf and lastIndexOf seem to have some formatting characters. This may cause errors.
