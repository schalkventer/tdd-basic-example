/* eslint-disable */

import React from "react";
import { Basic, LongTitle } from "./Task.stories";

describe("<Task />", () => {
  describe("Basic", () => {
    it("renders", () => {
      cy.mount(<Basic />);
      cy.get("h2").should("have.text", "Hello World");
    });
  });

  describe("LongTitle", () => {
    it("renders", () => {
      cy.mount(<LongTitle />);
    });
  });
});
