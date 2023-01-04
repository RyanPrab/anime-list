import Home from "../pages";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("Home", () => {
  it("renders a homepage",  () => {
    render(<Home />);
    const element = screen.getByTestId("anime-list");
    expect(element).toBeInTheDocument();
  });
});
