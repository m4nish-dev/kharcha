import { Router } from 'express';

const router = Router();

/**
 * @route   GET /api/health
 * @desc    Health-check endpoint — confirms the API is running
 * @access  Public
 */
router.get('/health', (_req, res) => {
  res.json({
    success: true,
    message: 'Kharcha API is running',
    timestamp: new Date().toISOString(),
  });
});

export default router;
