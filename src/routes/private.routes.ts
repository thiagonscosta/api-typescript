import { Router } from 'express';
const router = Router();

import passport from 'passport';

router.get('/dashboard', passport.authenticate('jwt'))
