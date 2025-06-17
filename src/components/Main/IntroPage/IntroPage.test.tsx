import React from "react";
import { render, screen } from "@testing-library/react";
import IntroPage from "./IntroPage";

describe("IntroPage", () => {
  // 1. 핵심 텍스트 콘텐츠가 잘 렌더링되는가?
  // - 핵심 콘텐츠란? - 이미지, 텍스트 , 링크-버튼 ,
  it("main contents exist", () => {
    render(<IntroPage />);
    //
    // expect(screen.getByRole("heading", { name: "hi" })).toBeInTheDocument();
  });
  // 2. 네비게이션 요소 ( 헤더/푸터/링크 )
  it("navigation exist", () => {
    render(<IntroPage />);
    const logo = screen.queryByRole("img", { name: /logo/i });
    // expect(logo).toBeInTheDocument();
  });
  // 5.
  // 6. 스냅샷 테스트 ( 전체 렌더링 확인용)
  // 7. 모바일/반응형 대응
  // 8. 비정상적인 상태 처리( 에러 메세지 표시 및 적재 )
});
