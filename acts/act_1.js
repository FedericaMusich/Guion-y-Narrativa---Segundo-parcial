const act_1 = {
    start: {
        background: "assets/1.jpg",
        dialogue: null,
        choices: [
            { text: "Empezar", target: "panel_inicial" },
        ]
    },

    panel_inicial: {
        background: "assets/2.jpg",
        dialogue: "Eres Anne. Llegas a la casa de tu amiga Laila, quien te invitó a dormir a su casa.",
        choices: [
            { text: "Tocas la puerta", target: "panel_puerta" },
            { text: "Miras por la ventana", target: "panel_ventana_1" },
        ]
    },

    panel_puerta: {
        background: "assets/3.jpg",
        dialogue: "Knock Knock! Escuchas ruidos desde dentro...",
        choices: [
            { text: "Siguiente", target: "panel_dentro_casa" },
        ]
    },

    panel_ventana_1: {
        background: "assets/4.jpg",
        dialogue: "Ves a Laila sentada a espaldas",
        choices: [
            { text: "Sigues observando...", target: "panel_ventana_2" },
        ]
    },

    panel_ventana_2: {
        background: "assets/5.jpg",
        dialogue: "Gira la cabeza y ve que la estás observando.",
        choices: [
            { text: "Siguiente", target: "panel_dentro_casa" },
        ]
    },

    panel_dentro_casa: {
        background: "assets/6.jpg",
        dialogue: "Tu amiga abre la puerta y te invita a pasar....",
        choices: [
            { text: "Siguiente", target: "panel_dentro_cuarto" },
        ]
    }
};
