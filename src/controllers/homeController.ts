import { Request, Response } from 'express';
import { Product } from '../models/Product';

type frase = {
	text: string,
	author: string
}

export const home = (req: Request, res: Response) => {
	let age: number = 58;
	let showOld: boolean = false;
	let priceFilter: number = 12

	if (age > 35) {
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
		firstName: 'Denny',
		lastName: 'Azevedo',
		showOld,
		products: list,
		priceFilter,
		expensives: expensiveList,
		fraseDoDia: frasesDoDia[fraseDeHoje]
	});
}