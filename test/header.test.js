import Header from "../components/Header";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("Header", () => {
  it("renders a header", () => {
    render(<Header />);
    // check if all components are rendered
    expect(screen.getByText("Get Anime Recomendation Here")).toBeInTheDocument();
  });
});
