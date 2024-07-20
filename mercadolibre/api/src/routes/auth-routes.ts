import express from "express";
import Route from "../models/route";
import authValidation from "../validations/auth-validations";

const registerRoute: Route = {
  path: "/api/register",
  handler: (req, res) => {
    const validationErrors = authValidation.validationResult(req);
    res.send(validationErrors);
  },
};

const loginRoute: Route = {
  path: "/api/login",
  handler: (req, res) => {
    res.send("Take me all the way");
  },
};

const recoverPasswordRoute: Route = {
  path: "/api/recover-password",
  handler: (req, res) => {
    res.send("Recover my password");
  },
};

const configureAuthRoutes = (app: express.Application) => {
  app.post(
    registerRoute.path,
    authValidation.validateEmail,
    authValidation.validatePassword,
    authValidation.validatePasswordConfirmation,
    registerRoute.handler,
  );
  app.post(loginRoute.path, loginRoute.handler);
  app.post(recoverPasswordRoute.path, recoverPasswordRoute.handler);
};

export default configureAuthRoutes;
