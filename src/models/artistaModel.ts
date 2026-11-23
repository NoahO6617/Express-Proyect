
import mongoose, { Schema, Document } from 'mongoose';

export interface IArtista extends Document {
  nombre: string;
  genero: string;
  descripcion: string;
  imagen: string;
}

const artistaSchema = new Schema<IArtista>({
  nombre: {
    type: String,
    required: true,
    trim: true
  },

  genero: {
    type: String,
    default: ''
  },

  descripcion: {
    type: String,
    default: ''
  },

  imagen: {
    type: String,
    default: ''
  }

}, {
  timestamps: true
});

const Artista = mongoose.model<IArtista>(
  'Artista',
  artistaSchema
);

export default Artista;
