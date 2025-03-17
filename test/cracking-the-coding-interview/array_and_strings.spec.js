const { expect } = require('chai')

describe('array_and_strings', function () {
  it('is_unique', function () {
    function is_unique(str) {
      if (str.length > 128) {
        return false
      }
      var chars_ascii = new Array(128).fill(false)
      for (let i = 0; i < str.length; i++) {
        let charCodeAt = str[i].charCodeAt(0)
        if (charCodeAt < 0 || charCodeAt > 128) {
          console.log(`${str[i]} is not ASCII char in ${str}`)
          return false
        }
        let chars_ascii_index = charCodeAt - 'a'.charCodeAt(0)
        if (chars_ascii[chars_ascii_index]) {
          console.log(`${str} is not unique because of ${str[i]} at ${i}`)
          return false
        }
        chars_ascii[chars_ascii_index] = true
      }
      console.log(`${str} is unique`)
      return true
    }

    expect(is_unique('abcde')).to.equal(true)
    expect(is_unique('abcda')).to.equal(false)
    expect(is_unique('abcdA')).to.equal(true)
    expect(is_unique('abcdefghijklmnopqrstuvwxyz')).to.equal(true)

    // Generate a string with the first 128 ASCII characters
    let asciiString = ''
    for (let i = 0; i < 128; i++) {
      asciiString += String.fromCharCode(i)
    }
    // Test the function with the ASCII string
    expect(is_unique(asciiString)).to.equal(true)
    expect(is_unique(asciiString + 'a')).to.equal(false)
    // non-ASCII characters
    expect(is_unique('abcdéf')).to.equal(false)
  })
})
