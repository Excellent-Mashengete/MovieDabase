module.exports = {
    content: ['./src/**/*.{html,js,ts}',
    './public/navbar/*.{html,js}',
    './auth/navbar/*.{html,js}'],
    plugins: [require('daisyui')],
    darkMode: true,
    daisyui:{
        themes:["light", "dark","cupcake" ],
    },
};
