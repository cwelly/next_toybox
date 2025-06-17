import { render, screen } from "@testing-library/react";
import RoasterCard from "./RoasterCard";

describe("Header", () => {
  // 1. 로딩 시 DB에서 고른 팩션의 병종들이 불러와졌나

  // 2. 아미리스트에서 추가버튼을 누르면 `내 로스터`에 정상적으로 추가되는가
  // 3. 등록 시 정상적으로 서버에 메소드를 보내는가
  it("renders the logo", () => {
    render(<RoasterCard />);
    // const heading = screen.getByRole("heading", { level: 1 });
    // expect(heading).toBeInTheDocument();
  });
});
