import { Request, Response } from 'express';
import { TextService } from '../services/text.service';

export class TextController {
    static async analyzeText(req: Request, res: Response) {
        try {
            const text = await TextService.createText(req.body.content);
            res.status(201).json(text);
        } catch (error) {
            res.status(500).json({ error: 'There have an issue please check the data you provided' });
        }
    }

    static async updateTextById(req: Request, res: Response) {
        try {
            const text = await TextService.updateTextById(req.body.content, req.body.id);
            res.status(201).json(text);
        } catch (error) {
            res.status(500).json({ error: 'There have an issue please check the data you provided' });
        }
    }

    static async deleteTextById(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const text = await TextService.deleteTextById(id);
            res.status(201).json(text);
        } catch (error) {
            res.status(500).json({ error: 'There have an issue please check the data you provided' });
        }
    }


    static async getTextById(req: Request, res: Response) {
        try {
                const { id } = req.params;
                const listText = await TextService.getTextById(id);
                res.status(200).json({ listText });
            } catch (error) {
                res.status(500).json({ error: 'There have an issue please check the data you provided' });
            }
        }
        static async getListText(req: Request, res: Response) {
            try {
                    const listText = await TextService.getListText();
                    res.status(200).json({ listText });
                } catch (error) {
                    console.log('hello');
                    
                    console.log(error);
                    
                    res.status(500).json({ error: 'There have an issue please check the data you provided' });
                }
            }
    static async getWordCount(req: Request, res: Response) {
        try {
            const { id } = req.params;
                const wordCount = await TextService.getWordCount(id);
                res.status(200).json({ wordCount });
            } catch (error) {
                res.status(500).json({ error: 'There have an issue please check the data you provided' });
            }
        }
        
    static async getCharCount(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const charCount = await TextService.getCharCount(id);
            res.status(200).json({ charCount });
        } catch (error) {
            res.status(500).json({ error: 'There have an issue please check the data you provided' });
        }
    }

    static async getSentenceCount(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const sentenceCount = await TextService.getSentenceCount(id);
            res.status(200).json({ sentenceCount });
        } catch (error) {
            res.status(500).json({ error: 'There have an issue please check the data you provided' });
        }
    }

    static async getParagraphCount(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const paragraphCount = await TextService.getParagraphCount(id);
            res.status(200).json({ paragraphCount });
        } catch (error) {
            res.status(500).json({ error: 'There have an issue please check the data you provided' });
        }
    }

    static async getLongestWord(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const longestWord = await TextService.getLongestWord(id);
            res.status(200).json({ longestWord });
        } catch (error) {
            res.status(500).json({ error: 'There have an issue please check the data you provided' });
        }
    }

}
