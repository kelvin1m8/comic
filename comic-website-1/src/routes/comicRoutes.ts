import { Router } from 'express';
import ComicController from '../controllers/comicController';

const router = Router();
const comicController = new ComicController();

export function setComicRoutes(app) {
    app.post('/upload', comicController.uploadComic.bind(comicController));
    app.get('/comic/:id', comicController.getComic.bind(comicController));
}