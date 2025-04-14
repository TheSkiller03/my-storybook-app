import React from 'react';

type UserCardProps = {
	name: string;
	email: string;
};

/**
 * Componente che mostra le informazioni dell'utente, inclusi nome ed email.
 * @param name - Nome dell'utente.
 * @param email - Email dell'utente.
 */
export const UserCard: React.FC<UserCardProps> = ({ name, email }) => {
	return (
		<div style={{ border: '1px solid #ccc', padding: '1rem' }}>
			<h3>{name}</h3>
			<p>{email}</p>
		</div>
	);
};