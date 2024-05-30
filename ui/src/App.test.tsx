import { render, screen } from "@testing-library/react";

import * as stories from "./App.stories";
import { composeStories } from "@storybook/react";

const { Default } = composeStories(stories);

test("testing", () => {
  render(<Default />);

  const text = screen.getByText("loading...");

  expect(text).toBeInTheDocument();
});
