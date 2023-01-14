import { Request, Response } from 'express';
import { createMenuObject } from '../helpers/createMenuObject';
import User from '../models/User';
import { Console } from 'console';

export const manutencao = async (req: Request, res: Response) => {
	let usuario = ''
	res.render('pages/manutencao', {
		tituloPagina: 'Página Manutenção de Dados',
		menu: createMenuObject('manu'),
		usuario,
		localizar: true
	});
}

export const buscar = async (req: Request, res: Response) => {
	let usuario = await User.findOne(
		{ "fullName.firstName": req.body.firstName ,
		 "fullName.lastName" : req.body.lastName }
	)
	console.log(usuario)
	res.render('pages/manutencao', {
		tituloPagina: 'Página Manutenção de Dados',
		menu: createMenuObject('manu'),
		usuario,
		localizar: false
	});
}

export const upUserAction = async (req: Request, res: Response) => {
	let emptyFields = false;
	let upUser = await User.findOne();
	if (
		req.body.firstName &&
		req.body.lastName &&
		req.body.email &&
		req.body.age &&
		req.body.interests
	) {
		try {
			console.log("usuário sendo adicionado!!");
			let interests = req.body.interests.split(',');
			upUser.fullName.firstName = req.body.firstName;
			if (req.body.midleName) {
				upUser.fullName.midleName = req.body.midleName;
			}
			upUser.fullName.lastName = req.body.lastName;
			upUser.age = parseInt(req.body.age);
			upUser.email = req.body.email;
			upUser.interests = interests;
			let resultado = await upUser.save();
			console.log(resultado);
			console.log('Usuário adicionado com sucesso!!');
		} catch (error) {
			console.log('Usuáro não adicionado!!');
		}
	} else {
		emptyFields = true;
	}
	let users = await User.find({}).sort({
		'fullName.lastName': 1,
		'fullName.firstName': -1
	});
	res.render('pages/cadastro', {
		emptyFields,
		users
	})
}