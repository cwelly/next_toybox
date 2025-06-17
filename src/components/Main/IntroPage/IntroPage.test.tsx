import React from "react";
import { render, screen } from "@testing-library/react";
import IntroPage from "./IntroPage";

describe("IntroPage", () => {
  // 1. 핵심 텍스트 콘텐츠가 잘 렌더링되는가?
  it("main contents exist", () => {
    render(<IntroPage />);
    expect(screen.getByRole("heading", { name: "hi" })).toBeInTheDocument();
  });
});
