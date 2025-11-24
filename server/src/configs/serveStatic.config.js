import path from "path";
import express from "express";

const mountStatic = (app) => {
  const baseDir = path.resolve();

  if (process.env.NODE_ENV === "production") {
    // serve static assets
    app.use(express.static(path.join(baseDir, "../client/dist")));

    // serve index.html for non-API routes
    app.get(/^\/(?!api).*/, (_, res) => {
      res.sendFile(path.join(baseDir, "../client", "dist", "index.html"));
    });
  }
};

export default mountStatic;
