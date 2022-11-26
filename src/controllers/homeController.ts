import { Request, Response } from 'express';
import { Product } from '../models/Product';
import User from '../models/User';

type frase = {
	text: string,
	author: string
}

export const home = async (req: Request, res: Response) => {
	let usuarios = await User
		.find({ interests: "Carro" })
		.sort({ "fullName.lastName": 1, age: -1});
	console.log("USUARIOS", usuarios);

	let showOld: boolean = false;
	let priceFilter: number = 12
	let firstName = "John"
	let lastName = "Doe"
	let age: number = 35;

	if (usuarios.length > 0) {
		firstName = usuarios[0].fullName.firstName;
		lastName = usuarios[0].fullName.lastName;
		age = usuarios[0].age;
	}
	
	if (age > 30) {
		showOld = true;
	}
	
	let frasesDoDia: frase[] = [
		{
			text: '"O sucesso nasce do querer, da determinação e persistência em se chegar a um objetivo. Mesmo não atingindo o alvo, quem busca e vence obstáculos, no mínimo fará coisas admiráveis"',
			author: 'José de Alencar'
		},
		{
			text: '"Se você quer ser bem-sucedido precisa de dedicação total, buscar seu último limite e dar o melhor de si mesmo”',
			author: 'Ayrton Senna'
		},
		{
			text: '“Dificuldades preparam pessoas comuns para destinos extraordinários”',
			author: 'C.S Lewis'
		},
		{
			text: '“Nenhum homem será um grande líder se quiser fazer tudo sozinho ou se quiser levar todo o crédito por fazer isso”',
			author:'Andrew Carnegie'
		}
	]

	let fraseDeHoje: number = Math.floor(Math.random() * frasesDoDia.length);
	let list = Product.getAll();
	let expensiveList = Product.getFromPriceAfter(priceFilter);

	res.render('pages/home', {
		titulo: 'Página Principal',
		firstName,
		lastName,
		showOld,
		products: list,
		priceFilter,
		expensives: expensiveList,
		fraseDoDia: frasesDoDia[fraseDeHoje]
	});
}