import { Schema, model, Document } from 'mongoose';

interface IText extends Document {
    content: string;
    createdAt: Date;
    updatedAt: Date;
}

const TextSchema = new Schema<IText>({
    content: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

export const Text = model<IText>('Text', TextSchema);