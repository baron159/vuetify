import propsFactory from '../propsFactory'

test.each([
  [String, undefined, String],
  [String, '', { type: String, default: '' }],
  [{ type: String }, '', { type: String, default: '' }],
  [null, undefined, null],
] as const)('propsFactory %#', (definition, defaults, result) => {
  expect(
    propsFactory({ foo: definition })(
      defaults === undefined ? defaults : { foo: defaults }
    )
  ).toStrictEqual({ foo: result })
})
