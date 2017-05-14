import * as c from './constant-name'


export const actionCreateTitle = (title) => {
	return {
		type: c.CREATE_TITLE,
		title
	}
}

export const actionCreateHowGood = (howGood) => {
	return {
		type: c.CREATE_HOW_GOOD,
		howGood
	}
}

export const actionCreateHowBad = (howBad) => {
	return {
		type: c.CREATE_HOW_BAD,
		howBad
	}
}