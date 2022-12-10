type MenuOption = '' | 'home' | 'cad' | 'manu' | 'sobre'

export const createMenuObject = (activeMenu: MenuOption) => {
	let returnObject = {
		home: false,
		cad: false,
		manu: false,
		sobre: false
	}

	if (activeMenu != '') {
		returnObject[activeMenu] = true
	}

	return returnObject
}