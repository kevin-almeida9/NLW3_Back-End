import { Router } from 'express'
import multer from 'multer'

import uploadConfig from './config/upload'
import OrphanagesCpntroller from "./controllers/OrphanagesController";

const routes = Router();
const upload = multer(uploadConfig);

//padrão controller - index, show, create, update, delete 

routes.get('/orphanages', OrphanagesCpntroller.index);
routes.get('/orphanages/:id', OrphanagesCpntroller.show);
routes.post('/orphanages', upload.array('images'), OrphanagesCpntroller.create);

export default routes;