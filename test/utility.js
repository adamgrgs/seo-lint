import { expect } from 'chai'
import helloWorld from '../src/lib/api'

describe('index test', () => {
  describe('helloWorld function', () => {
    it('should have a function', () => {
      expect(typeof helloWorld).to.equal('function')
    })

    it("should return 'Hello World' with arguments", () => {
      expect(helloWorld('A')).to.equal('Hello World A')
    })
  })
})
