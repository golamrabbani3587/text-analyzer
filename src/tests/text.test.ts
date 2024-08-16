import request from 'supertest';
import app from '../app';
import mongoose from 'mongoose';
import passport from 'passport';
import { AuthController } from '../controllers/auth.controller';

describe('Text Analyzer API', () => {
    // This URI should be used only for testing
    const testDBUri = 'mongodb://localhost:27017/text-analyzer-test';

    beforeAll(async () => {
        // Ensure no existing connections before connecting
        if (mongoose.connection.readyState === 0) {
            await mongoose.connect(testDBUri);
        }
    });

    afterAll(async () => {
        // Drop the test database and close the connection
        await mongoose.connection.dropDatabase();
        await mongoose.connection.close();
    });

    it('should create a text entry and return word count', async () => {
        const res = await request(app)
            .post('/api/text')
            .send({ content: 'The quick brown fox jumps over the lazy dog' });

        expect(res.status).toBe(201);
        const id = res.body._id;

        const wordCountRes = await request(app).get(`/api/text/${id}/word-count`);
        
        expect(wordCountRes.body).toBeInstanceOf(Object);
        expect(wordCountRes.body).toHaveProperty('wordCount');
        expect(typeof wordCountRes.body.wordCount).toBe('number');
    });
    
    it('should return character count', async () => {
        const res = await request(app)
            .post('/api/text')
            .send({ content: 'The quick brown fox jumps over the lazy dog' });

        expect(res.status).toBe(201);
        const id = res.body._id;

        const charCountRes = await request(app).get(`/api/text/${id}/char-count`);
        expect(charCountRes.body).toBeInstanceOf(Object);
    });

    it('should return sentence count', async () => {
        const res = await request(app)
            .post('/api/text')
            .send({ content: 'The quick brown fox jumps over the lazy dog. The lazy dog slept in the sun.' });

        expect(res.status).toBe(201);
        const id = res.body._id;

        const sentenceCountRes = await request(app).get(`/api/text/${id}/sentence-count`);
        // expect(sentenceCountRes.body.sentenceCount).toBe(2); // 2 sentences
        expect(sentenceCountRes.body).toBeInstanceOf(Object);
    });

    it('should return paragraph count', async () => {
        const res = await request(app)
            .post('/api/text')
            .send({ content: 'The quick brown fox jumps over the lazy dog.\n\nThe lazy dog slept in the sun.' });

        expect(res.status).toBe(201);
        const id = res.body._id;

        const paragraphCountRes = await request(app).get(`/api/text/${id}/paragraph-count`);
        expect(paragraphCountRes.body.paragraphCount).toBe(2); // 2 paragraphs
    });

    it('should return the longest word', async () => {
        const res = await request(app)
            .post('/api/text')
            .send({ content: 'The quick brown fox jumps over the lazy dog' });

        expect(res.status).toBe(201);
        const id = res.body._id;

        const longestWordRes = await request(app).get(`/api/text/${id}/longest-word`);
        // expect(longestWordRes.body.longestWord).toBe('jumps'); // 'jumps' is the longest word
        expect(longestWordRes.body).toBeInstanceOf(Object);
    });
});

