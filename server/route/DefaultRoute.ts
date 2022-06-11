import express, { Router } from 'express';

import { getDefaultRoute } from '../controller/DefaultRouteController';

export const defaultRouter: Router = express.Router();

defaultRouter.get("*", getDefaultRoute);