import { Request, Response } from 'express';
import { createMenuObject } from '../helpers/createMenuObject';
import User from '../models/User';

export const manutencao = async (req: Request, res: Response) => {
	
		res.render('pages/home', {
		tituloPagina: 'Página Manutenção de Dados',
		menu: createMenuObject('manu'),
	});
}