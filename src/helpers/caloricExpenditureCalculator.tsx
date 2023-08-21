export const caloricExpenditureCalculator = (
	gender: string,
	currentWeight: number,
	height: number,
	age: number,
	activityFactor: string,
	caloricMultiplier: string,
	goal: string
) => {
	// verifica se todos os campos foram preenchidos corretamente
	if (!(
			gender.length > 0 &&
			currentWeight > 0 &&
			height > 0 &&
			age > 0 &&
			activityFactor.length > 0 &&
			caloricMultiplier.length > 0 &&
			goal.length > 0
	)) {
		return 0;
	}

	let factor = 1, calories = 0;

	// define um fator númerico de acordo com o fator da atividade física
	switch (activityFactor) {
		case "sedentario":
			factor = 1.2;
			break;
		case "leve":
			factor = 1.375;
			break;
		case "moderado":
			factor = 1.55;
			break;
		case "intenso":
			factor = 1.725;
			break;
		case "muito_intenso":
			factor = 1.9;
			break;
		default:
			factor = 1;
			break;
	}

	// define as calorias de acordo com o genero
	if(gender == 'Masculino')
		calories = (66 + (13.7 * currentWeight) + (5 * height) - (6.8 * age)) * factor;
	else
		calories = (655 + (9.6 * currentWeight) + (1.8 * height) - (4.7 * age)) * factor;
	
	// aumenta o gasto calorico de acordo com o objetivo
	if(goal == 'bulking' && Number(caloricMultiplier) != 0)
		calories = calories + (calories *  Number(caloricMultiplier));
	else if(goal == 'cutting' &&  Number(caloricMultiplier) != 0)
		calories = calories - (calories * Number(caloricMultiplier));
	
	// arredonda o valor das calorias para um numero inteiro
	calories = Math.round(calories);

	// retorna o valor das calorias caso o valor seja um numero inteiro maior que zero
	if (calories > 0 && Number.isInteger(calories))
		return calories;
	else 
		return 0;
}