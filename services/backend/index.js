// import express from "express";
// import cors from "cors";
// import helmet from "helmet";
// import morgan from "morgan";
// import { config } from "dotenv";
export {};
// config();
// const PORT = process.env.PORT ? Number(process.env.PORT) : 4000;
// const app = express();
// app.use(helmet());
// app.use(cors({ origin: process.env.FRONTEND_API_URL || true }));
// app.use(express.json());
// app.use(morgan("dev"));
// // Health
// app.get("/health", (_req, res) => res.json({ status: "ok" }));
// // Simple auth stub
// app.post("/auth/login", (req, res) => {
//   const { username } = req.body;
//   if (!username) return res.status(400).json({ error: "username required" });
//   // NOTE: replace with real auth
//   const token = Buffer.from(`${username}:fakejwt`).toString("base64");
//   res.json({ access_token: token, token_type: "bearer" });
// });
// // Projects example
// let projects: Array<{ id: string; name: string; owner: string }> = [];
// app.get("/projects", (_req, res) => {
//   res.json(projects);
// });
// app.post("/projects", (req, res) => {
//   const { name, owner } = req.body;
//   if (!name || !owner)
//     return res.status(400).json({ error: "name & owner required" });
//   const p = { id: String(Date.now()), name, owner };
//   projects.push(p);
//   res.status(201).json(p);
// });
// app.get("/projects/:id", (req, res) => {
//   const p = projects.find((x) => x.id === req.params.id);
//   if (!p) return res.status(404).json({ error: "not found" });
//   res.json(p);
// });
// // Minimal chain endpoints (stub)
// app.post("/chain/tx", (req, res) => {
//   const tx = { id: String(Date.now()), payload: req.body, status: "pending" };
//   // In a real implementation push to mempool / persist
//   res.status(202).json(tx);
// });
// app.get("/chain/tx/:id", (req, res) => {
//   // stub: return fake confirmed tx
//   res.json({ id: req.params.id, status: "confirmed", block: "1" });
// });
// app.listen(PORT, () => {
//   console.log(`Backend listening on port ${PORT}`);
// });
//# sourceMappingURL=index.js.map