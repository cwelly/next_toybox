import { render, screen } from "@testing-library/react";
import RoasterCard from "./RoasterCard";

describe("Header", () => {
  it("renders the logo", () => {
    render(<RoasterCard />);

    // const heading = screen.getByRole("heading", { level: 1 });
    // expect(heading).toBeInTheDocument();
  });
});
