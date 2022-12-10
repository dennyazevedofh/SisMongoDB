import { Request, Response } from 'express';
import { createMenuObject } from '../helpers/createMenuObject';
import User from '../models/User';

export const sobre = async (req: Request, res: Response) => {
	
		res.render('pages/home', {
		tituloPagina: 'Página Sobre',
		menu: createMenuObject('sobre'),
	});
}