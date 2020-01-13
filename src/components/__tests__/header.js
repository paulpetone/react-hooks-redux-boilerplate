import React from "react"
import renderer from "react-test-renderer"

import Header from "../header"

let _nowFn
beforeEach(() => {
  _nowFn = Date.now
  Date.now = jest.fn(() => 1482363367072)
})

afterEach(() => {
  Date.now = _nowFn
})

describe("Header", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Header />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
