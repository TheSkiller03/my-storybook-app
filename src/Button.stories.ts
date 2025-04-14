import type { Meta, StoryObj } from '@storybook/react';
import { Button} from './Button';

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
//nuova storia per il bottone 
//modifica il componente BUtton per supportare la disabilitazione 
//aggiungere una proprietà per disabilitarlo
//se la proprietà è null gestire all'onClick prima la disabilitazione 
//simulare l'operazione del ckick con un setTimeout di 5 secondo


