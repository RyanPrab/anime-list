import Home from "../pages";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";

describe("Home", () => {
  it("renders a homepage", () => {
    render(<Home />);
    // check if all components are rendered
    expect(screen.getByText("Get started by editing")).toBeInTheDocument();
  });
});
