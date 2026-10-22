import { Router } from 'express';
import healthRoutes from './health.js';

const router = Router();

router.use('/', healthRoutes);

// Future route modules will be mounted here:
// router.use('/auth', authRoutes);
// router.use('/transactions', transactionRoutes);
// router.use('/budgets', budgetRoutes);
// router.use('/goals', goalRoutes);
// router.use('/bills', billRoutes);
// router.use('/ai', aiRoutes);

export default router;
