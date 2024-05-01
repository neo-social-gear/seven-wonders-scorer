const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      width: {
        main_content: '1024px',
      },
      colors: {
        text_black: '#333333',
        border_black: '#000000',
        bg_civilization_score: '#448AFF',
        bg_military_score: '#EB5757',
        bg_commercial_score: '#F2C94C',
        bg_science_score: '#27AE60',
        bg_guild_score: '#BB6BD9',
        bg_city_score: '#333333',
        bg_leader_score: '#F5F5F5',
        bg_wonder_score: '#EDB91B',
        bg_coin_score: '#F5D67A',
      },
    },
  },
  plugins: [],
};
