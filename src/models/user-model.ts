import { Schema, model } from 'mongoose';


export interface ContactBody {
    name: string;
    email: string;
    message: string;
}

const schema = new Schema<ContactBody>({
    name: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
});

export const ContactModel = model<ContactBody>('Contact', schema);