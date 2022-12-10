import { Router } from 'express';
import * as HomeController from '../controllers/homeController';
import * as CadastroController from '../controllers/cadastroController'
import * as ManutencaoController from '../controllers/manutencaoController'
import * as SobreController from '../controllers/sobreCntroller'

const router = Router();
router.get('/', HomeController.home);
router.get('/cadastro', CadastroController.cadastro);
router.get('/manutencao', ManutencaoController.manutencao)
router.get('/sobre', SobreController.sobre);

export default router;