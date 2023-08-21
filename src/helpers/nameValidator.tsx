export const nameValidator = (name: string) => {
	if (!name || name.length <= 0) return 'Nome não pode ser vazio.';
	return '';
};
