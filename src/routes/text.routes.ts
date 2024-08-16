import { Router } from 'express';
import { TextController } from '../controllers/text.controller';
import { checkAuthToken } from '../middlewares/checkToken';

const router = Router();
router.get('/text/list',checkAuthToken, TextController.getListText);
router.post('/text', checkAuthToken, TextController.analyzeText);
router.get('/text/:id', checkAuthToken, TextController.getTextById);
router.put('/text', checkAuthToken, TextController.updateTextById);
router.delete('/text/:id', checkAuthToken, TextController.deleteTextById);

router.get('/text/:id/word-count', checkAuthToken, TextController.getWordCount);
router.get('/text/:id/char-count', checkAuthToken, TextController.getCharCount);
router.get('/text/:id/sentence-count', checkAuthToken, TextController.getSentenceCount);
router.get('/text/:id/paragraph-count', checkAuthToken, TextController.getParagraphCount);
router.get('/text/:id/longest-word', checkAuthToken, TextController.getLongestWord);

export default router;