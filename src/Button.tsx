import React from 'react';

type ButtonProps = {
	label: string;
	onClick: () => void;
};

/**
 * Componente che riceve via props una label e una funzione onClick.
 * @param label - La label da visualizzare sul pulsante.
 * @param onClick - La funzione da eseguire al click del pulsante.
 */
export const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
	return <button onClick={onClick}>{label}</button>;
};