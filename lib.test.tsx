import { test, /*describe, before, after, afterEach, beforeEach*/ } from 'tezt'
import React from 'react'
import { LIB_NAME } from './lib'
import expect from "expect"
import { render, fireEvent, waitForElement } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

test("it works", () => {
  const { getByText } = render(<LIB_NAME />)
  expect(getByText("It works!")).toBeTruthy()
})