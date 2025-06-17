// src/mocks/handlers.js
import { rest } from "msw";

export const handlers = [
  rest.get("/api/roster", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        { id: 1, unitName: "Space Marines", points: 100, faction: "Imperium" },
        { id: 2, unitName: "Ork Boyz", points: 75, faction: "Xenos" },
      ])
    );
  }),
];
