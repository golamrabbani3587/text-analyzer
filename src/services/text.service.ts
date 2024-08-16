import { Text } from '../models/text.model';

export class TextService {
    static async createText(content: string) {
        const text = new Text({ content });
        return await text.save();
    }   
    static async getTextById(id:any) {
        const text = await Text.findOne({_id:id}).exec();;
        if (!text) throw new Error('Text not found');
        return text;
    }

    static async updateTextById(content: string, id:string) {
        const text = await Text.findByIdAndUpdate({_id:id},{ content });
        return text;
    }  

    static async deleteTextById(id:any) {
        const text = await Text.deleteOne({_id:id}).exec();;
        if (!text) throw new Error('Text not found');
        return text;
    }

    static async getListText() {
        const text = await Text.find().exec();;
        if (!text) throw new Error('Text not found');
        return text;
    }
    static async getWordCount(id: string) {
        const text = await Text.findById(id);
        if (!text) throw new Error('Text not found');
        return text.content.split(/\s+/).length;
    }

    static async getCharCount(id: string) {
        const text = await Text.findById(id);
        if (!text) throw new Error('Text not found');
        return text.content.length;
    }

    static async getSentenceCount(id: string) {
        const text = await Text.findById(id);
        if (!text) throw new Error('Text not found');
        return text.content.split(/[.!?](\s|$)/).filter(Boolean).length;
    }

    static async getParagraphCount(id: string) {
        const text = await Text.findById(id);
        if (!text) throw new Error('Text not found');
        return text.content.split(/\n\s*\n/).filter(Boolean).length;
    }

    static async getLongestWord(id: string) {
        const text = await Text.findById(id);
        if (!text) throw new Error('Text not found');
        const words = text.content.split(/\W+/).filter(Boolean);
        let longestWord = '';
        words.forEach(word => { 
            if (word.length > longestWord.length) {
                longestWord = word;
            }
        });
        return longestWord;
    }
}
