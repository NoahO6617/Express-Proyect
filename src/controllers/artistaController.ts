
import { Request, Response } from 'express';
import Artista from '../models/artistaModel.ts';

// Obtener todos los artistas
export const listarArtistas = async (req: Request, res: Response) => {
  try {
    const artistas = await Artista.find();

    res.json(artistas);

  } catch (error) {
    res.status(500).json({
      mensaje: 'Error al obtener artistas'
    });
  }
};

// Obtener artista por ID
export const buscarArtista = async (req: Request, res: Response) => {
  try {
    const artista = await Artista.findById(req.params.id);

    if (!artista) {
      return res.status(404).json({
        mensaje: 'Artista no encontrado'
      });
    }

    res.json(artista);

  } catch (error) {
    res.status(400).json({
      mensaje: 'ID no válido'
    });
  }
};

// Crear artista
export const insertarArtista = async (req: Request, res: Response) => {
  try {
    const { nombre, genero, descripcion, imagen } = req.body;

    if (typeof nombre !== 'string' || !nombre.trim()) {
      return res.status(400).json({
        mensaje: 'El nombre es obligatorio'
      });
    }

    const artista = new Artista({
      nombre: nombre.trim(),
      genero,
      descripcion,
      imagen
    });

    await artista.save();

    res.status(201).json(artista);

  } catch (error) {
    res.status(500).json({
      mensaje: 'Error al crear artista'
    });
  }
};

// Actualizar artista
export const modificarArtista = async (req: Request, res: Response) => {
  try {
    const artista = await Artista.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true
      }
    );

    if (!artista) {
      return res.status(404).json({
        mensaje: 'Artista no encontrado'
      });
    }

    res.json(artista);

  } catch (error) {
    res.status(400).json({
      mensaje: 'Error al actualizar artista'
    });
  }
};

// Eliminar artista
export const borrarArtista = async (req: Request, res: Response) => {
  try {
    const artista = await Artista.findByIdAndDelete(req.params.id);

    if (!artista) {
      return res.status(404).json({
        mensaje: 'Artista no encontrado'
      });
    }

    res.json({
      mensaje: 'Artista eliminado correctamente'
    });

  } catch (error) {
    res.status(400).json({
      mensaje: 'ID no válido'
    });
  }
};
