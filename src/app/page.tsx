import IntroPage from "@/components/Main/IntroPage/IntroPage";
if (process.env.NEXT_PUBLIC_API_MOCKING === "enabled") {
  // 개발 환경에서만 MSW 시작
  import("@/mocks").then(({ initMocks }) => initMocks());
}

export default function App() {
  return (
    <div>
      <IntroPage />
    </div>
  );
}
