import { Request, Response } from 'express';
import { createMenuObject } from '../helpers/createMenuObject';
import User from '../models/User';

export const cadastro = async (req: Request, res: Response) => {
	
		res.render('pages/home', {
		tituloPagina: 'Página Cadastro',
		menu: createMenuObject('cad'),
	});
}