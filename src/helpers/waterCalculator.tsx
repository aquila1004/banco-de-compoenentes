export const waterCalculator = (currentWeight: number) => {
	return {
		minimalWater: currentWeight * 35,
		maximalWater: currentWeight * 50,
	};
};  