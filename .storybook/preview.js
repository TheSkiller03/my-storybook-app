/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    //intercetta automaticamente le funzioni che iniziano con on
     actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        // abilita i controlli per le props di tipo colore
       color: /(background|color)$/i,
       // abilita i controlli per le props di tipo data
       date: /Date$/i,
      },
    },
  },
};

export default preview;