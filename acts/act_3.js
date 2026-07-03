const act_3 = {
    panel_cuarto_detras: {
        background: "assets/20.jpg",
        dialogue: "Laila sonríe sin dientes.",
        choices: [
            { text: "¿¿QUÉ ESTÁ PASANDO??", target: "panel_despertar" },
        ]
    },

    panel_despertar: {
        background: "assets/21.jpg",
        dialogue: "Te despiertas... “Fue sólo una pesadilla, ¿verdad?”",
        choices: [
            { text: "Escuchas un grito...", target: "panel_grito" },
        ]
    },

    panel_grito: {
        background: "assets/22.jpg",
        dialogue: "Estás aterrada. El grito proviene de fuera de la habitación.",
        choices: [
            { text: "Te acercas a la puerta de la habitación...", target: "panel_pasillo" },
        ]
    },

    panel_pasillo: {
        background: "assets/23.jpg",
        dialogue: "El marco de la puerta emana una fuerte luz. Tu miedo sigue alli.",
        choices: [
            { text: "Laila te necesita...", target: "panel_hall" },
        ]
    },
};
