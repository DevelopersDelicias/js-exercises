const hello = require('../src/hello')

describe('hello', () => {
  describe('to single name', () => {
    it.each([
      ['Benjamin', 'Hello Benjamin!'],
      ['John', 'Hello John!'],
      ['Susan', 'Hello Susan!'],
    ])('%s', (name, expected) => {
      expect(hello(name)).toEqual(expected)
    })
  })
  describe('to names with nicknames', () => {
    it.each([
      ['Robert', 'Hello Bob!'],
      ['Katherine', 'Hello Katy!'],
      ['Garfield', 'Hello Mr. G!'],
    ])('%s', (name, expected) => {
      expect(hello(name)).toEqual(expected)
    })
  })

  describe('to long names', () => {
    it.each([
      ['Maximiliano', 'Hello Max!'],
      ['Evangeline', 'Hello Eva!'],
      ['Montserrat', 'Hello Mon!'],
    ])('%s', (name, expected) => {
      expect(hello(name)).toEqual(expected)
    })
  })

  describe('to names not capitalized', () => {
    it.each([
      ['ariana', 'Hello Ariana!'],
      ['CESAR', 'Hello Cesar!'],
      ['oRLAndO', 'Hello Orlando!'],
      ['robert', 'Hello Bob!'],
      ['KatheRine', 'Hello Katy!'],
      ['GARFIELD', 'Hello Mr. G!'],
    ])('%s', (name, expected) => {
      expect(hello(name)).toEqual(expected)
    })
  })

  describe('to anonymous people', () => {
    it.each([
      ['empty string', ''],
      ['only spaces', '        '],
      ['null name', null],
      ['undefined name', undefined],
    ])('%s', (_scenario, name) => {
      expect(hello(name)).toEqual('Hello Anonymous!')
    })
  })
})
