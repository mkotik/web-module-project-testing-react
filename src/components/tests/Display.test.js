import React from "react";
import { getByTestId, render, screen } from "@testing-library/react";
import Display from "../Display";
import userEvent from "@testing-library/user-event";
// import fetchShow from "../../api/fetchShow";
import { displayFunc } from "../../App.js";

const testShow = {
  image:
    "https://static.tvmaze.com/uploads/images/medium_portrait/200/501942.jpg",
  name: "testName",
  summary: "this is a test Summary",
  seasons: [
    {
      id: 1,
      name: "season1",
      episodes: [
        {
          id: 1,
          name: "test",
          image:
            "http://static.tvmaze.com/uploads/images/medium_landscape/67/168918.jpg",
          season: 1,
          number: 1,
          summary: "this is a test summary",
          runtime: 1,
        },
      ],
    },
  ],
};

test("Display renders without any props", async () => {
  render(<Display />);
});

test("show component displays when fetch button is press", async () => {
  render(<Display />);
  const button = screen.getByRole("button");
  userEvent.click(button);
  const show = await screen.queryByTestId("show-container");
  setTimeout(() => expect(show).toBeInTheDocument(), 1000);
});

test("amount of select options equals that of test data", async () => {
  render(<Display />);
  const button = screen.getByRole("button");
  userEvent.click(button);
  const options = screen.queryByTestId("season-options");
  setTimeout(() => expect(options.length).toBe(testShow.seasons.length), 1000);
});

test("is displayFunc executed", () => {
  const testFunc = jest.fn(() => 1);
  render(<Display displayFunc={testFunc} />);
  const button = screen.getByRole("button");
  userEvent.click(button);
  setTimeout(() => console.log(testFunc.mock.calls), 1000);
});

///Tasks:
//1. Add in nessisary imports and values to establish the testing suite.
//2. Test that the Display component renders without any passed in props.
//3. Rebuild or copy a show test data element as used in the previous set of tests.
//4. Test that when the fetch button is pressed, the show component will display. Make sure to account for the api call and change of state in building your test.
//5. Test that when the fetch button is pressed, the amount of select options rendered is equal to the amount of seasons in your test data.
//6. Notice the optional functional prop passed in to the Display component client code. Test that when the fetch button is pressed, this function is called.
