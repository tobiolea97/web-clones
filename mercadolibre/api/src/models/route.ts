import express from "express";

interface Route {
    path: string;
    handler: (_req: express.Request, _res: express.Response) => void;
}

export default Route;
