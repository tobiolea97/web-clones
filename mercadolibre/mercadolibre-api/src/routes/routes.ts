import express from "express";
import configureAuthRoutes from "./auth-routes";

const configureRoutes = (app: express.Application) => {
  configureAuthRoutes(app);
};

export default configureRoutes;
