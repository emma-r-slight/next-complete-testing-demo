import { Greeting } from "./Greeting";
import { render, screen } from "@testing-library/react";

test("displays greeting", () => {
  render(<Greeting />);

  const headingElement = screen.getByRole("heading", {
    name: /Hello, World!/,
  });

  expect(headingElement).toBeInTheDocument();
});
