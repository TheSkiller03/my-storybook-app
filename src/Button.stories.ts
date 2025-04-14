import type { Meta, StoryObj } from '@storybook/react';
import { Button} from './Button';
import { within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

const meta: Meta<typeof Button> = {
    component: Button, // componente da testare
    tags: ['autodocs'], // tags per la documentazione 
    title: 'Base Components/Button', // titolo del componente
};

export default meta; // esporta il meta per essere utilizzato in altri file

type Story = StoryObj<typeof Button>; // definisce il tipo di storia per il componente Button

export const Primary: Story = {
    args: {
        label: 'Click Me',
        onClick: () => alert('Button clicked!'), // funzione da eseguire al click del pulsante
    },
};

export const Disable: Story = {
    args: {
      label: 'Click Me (disable)',
      onClick: () => alert('Clicked!'),
      disabled: null
    }
  }

export const WithInteraction: Story = {
    args: {
        label: 'Click Me',
        onClick: async () => {
            alert('Button clicked!');
            await new Promise((resolve) => setTimeout(resolve, 5000)); // simula un'operazione asincrona di 5 secondi
            alert('Button re-enabled!');
        },
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement); // ottiene l'elemento canvas
        const button = canvas.getByRole("button"); // ottiene il pulsante
        await userEvent.click(button); // simula il click sul pulsante
    },
};
