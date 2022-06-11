import express, { Router } from 'express';

import { getPublicAPI } from '../controller/PublicApiController';

export const publicAPIRouter: Router = express.Router();

publicAPIRouter.get("/api/get", getPublicAPI);