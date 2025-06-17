import { render, screen } from "@testing-library/react";
import AddRoaster from "./AddRoaster";

// AddRoaster 컴포넌트에 대한 테스트 20250617
// 이 컴포넌트는 사용자가 아미를 선택하면서 호출됩니다. ex) space marine or orks
// 해당 컴포넌트는 해당 아미 리스트 + 사용자가 추가할 아미 리스트로 이루어 집니다.
describe("Add Roaster", () => {
  // 1. 로딩 시 DB에서 고른 팩션의 병종들이 불러와졌나
  it(" check loaded army list ", () => {
    render(<AddRoaster faction={"necrons"} />);
    const category = screen.getByRole("heading", { name: "battleline" });
    expect(category).toBeInTheDocument();
  });

  // 2. 아미리스트에서 추가버튼을 누르면 `내 로스터`에 정상적으로 추가되는가
  // 3. 등록 시 정상적으로 서버에 메소드를 보내는가
});
