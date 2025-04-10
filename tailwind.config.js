export const content = [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
];
export const theme = {
  extend: {
    spacing: {
      '128': '32rem'
    },
    colors: {
      primario: 'goldenrod',
      primarioClaro: 'gold',
      primarioTrans: '#dabd0484',
      secundario: 'rgba(0, 0, 0, 0.67)',
      terciario: 'rgb(138, 204, 138)',
      terciarioOscuro: 'rgb(12, 173, 12)',
    },
    boxShadow: {
      'gold': '15px 15px 20px rgba(212, 175, 55, 0.8)',
      'btn-gold': '0 0 25px goldenrod',
      'btn-gold-hover': '0 0 5px goldenrod, 0 0 25px goldenrod, 0 0 50px goldenrod'
    }
  }
};
export const plugins = [];