import { Request, Response } from 'express';
import { Product } from '../models/Product';

export const home = (req: Request, res: Response) => {
	let age: number = 58;
	let showOld: boolean = false;

	if (age > 50) {
		showOld = true;
	}
	
	let list = Product.getAll();
	let expensiveList = Product.getFromPriceAfter(12);

	res.render('pages/home', {
		firstName: 'Denny',
		lastName: 'Azevedo',
		showOld,
		products: list,
		expensives: expensiveList,
		frasesDoDia: []
	});
}