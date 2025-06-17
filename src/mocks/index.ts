// src/mocks/index.ts
export async function initMocks() {
  if (typeof window === "undefined") return;

  const { worker } = await import("./browser");
  await worker.start();
}
