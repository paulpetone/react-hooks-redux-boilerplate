let _nowFn
beforeAll(() => {
  _nowFn = Date.now
  Date.now = jest.fn(() => 1482363367071)
})

afterAll(() => {
  Date.now = _nowFn
})
