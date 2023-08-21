export const emailValidator = (email: string) => {
	const re = /\S+@\S+\.\S+/;
	if (!email || email.length <= 0) return 'Email não pode ser vazio.';
	if (!re.test(email)) return 'Opa! Precisamos de um endereço de e-mail válido.';
	return '';
};  