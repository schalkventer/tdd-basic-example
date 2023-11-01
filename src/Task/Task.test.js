import { describe, test, expect } from "vitest";
import { addTaskFunctional } from "./Task.helpers";

describe("Task", () => {
  describe("addTaskFunctional", () => {
    test("start", () => {
      expect(
        addTaskFunctional({
          created: new Date("01/01/2020"),
          id: "1234567890",
          title: "Hello",
          position: "start",
          list: [
            {
              created: new Date("01/01/2021"),
              id: "987654321",
              title: "World",
              status: "completed",
            },
          ],
        })
      ).toEqual([
        {
          created: new Date("01/01/2020"),
          id: "1234567890",
          status: "pending",
          title: "Hello",
        },
        {
          created: new Date("01/01/2021"),
          id: "987654321",
          status: "completed",
          title: "World",
        },
      ]);
    });

    test("end", () => {
      expect(
        addTaskFunctional({
          created: new Date("01/01/2020"),
          id: "1234567890",
          title: "Hello",
          position: "end",
          list: [
            {
              created: new Date("01/01/2021"),
              id: "987654321",
              title: "World",
              status: "completed",
            },
          ],
        })
      ).toEqual([
        {
          created: new Date("01/01/2021"),
          id: "987654321",
          status: "completed",
          title: "World",
        },
        {
          created: new Date("01/01/2020"),
          id: "1234567890",
          status: "pending",
          title: "Hello",
        },
      ]);
    });
  });
});
