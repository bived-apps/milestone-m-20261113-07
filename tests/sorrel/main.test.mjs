import assert from "node:assert/strict"
import test from "node:test"
import { sorrel } from "../../src/sorrel/index.mjs"

test("sorrel trims", () => {
  assert.equal(sorrel(" a "), "a")
})
