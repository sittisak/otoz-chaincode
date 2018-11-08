const utils = require('../utils')


describe('Test utils', () => {

    it('string to buffer', () => {
        const testString = 'bankmagic'
        const stringBuffer = utils.toBuf(testString)
        expect(stringBuffer).toEqual(Buffer.from(stringBuffer))
    })

    it('object to buffer', () => {
        const testObj = {
            email: 'bankmagic',
            password: 'secret'
        }
        const objBuffer = utils.objToBuf(testObj)
        expect(objBuffer).toEqual(Buffer.from(JSON.stringify(testObj)))
    })

    it('bufffer to object', () => {
        const testObj = {
            email: 'bankmagic',
            password: 'secret'
        }
        const objExpect = utils.bufToObj(Buffer.from(JSON.stringify(testObj)))
        expect(testObj).toEqual(objExpect)
    })

    it('bufffer to float', () => {
        const testFloat = 1234.5678
        const floatBuffer = Buffer.from(testFloat.toString())
        const floatExpect = utils.bufToFloat(floatBuffer)
        expect(testFloat).toEqual(floatExpect)
    })

    it('check args length then true', () => {
        const expectArgs = 3
        const args = [0, 1, 2]
        const expectResolt = utils.checkArgsLength(args, expectArgs)
        expect(expectResolt).toEqual(true)
    })

    it('check args length then false', () => {
        const expectArgs = 4
        const args = [0, 1, 2]
        const expectResolt = utils.checkArgsLength(args, expectArgs)
        expect(expectResolt).toEqual(false)
    })

    it('is get state empty, should return true', () => {
        const value = Buffer.from('')
        const expectResolt = utils.isGetStateEmpty(value)
        expect(expectResolt).toEqual(true)
    })

    it('is get state empty, should return false', () => {
        const value = Buffer.from('1234')
        const expectResolt = utils.isGetStateEmpty(value)
        expect(expectResolt).toEqual(false)
    })

})