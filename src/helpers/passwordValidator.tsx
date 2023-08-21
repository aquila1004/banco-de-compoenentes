export const passwordValidator = (password: string) => {
	if (!password || password.length <= 0) return 'Senha não pode ser vazia.';
	if (password.length < 8) return 'Senha deve ter pelo menos 8 caracteres.';
	return '';
};