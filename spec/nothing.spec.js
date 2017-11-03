// Copyright (c) 2017 The Regents of the University of Michigan.
// All Rights Reserved. Licensed according to the terms of the Revised
// BSD License. See LICENSE.txt for details.

/* eslint-env mocha */
const expect = require("chai").expect;
const nothing = require("../lib/nothing");

describe("nothing", () => {
  it("is an object", () => {
    expect(nothing).to.be.an.instanceof(Object);
  });
});
