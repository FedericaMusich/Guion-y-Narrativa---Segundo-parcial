const act_2 = {

    // Dentro del cuarto...
    panel_dentro_cuarto: {
        background: "assets/9.jpg",
        dialogue: "Laila te comenta que te invitó porque tiene miedo de dormir sola y está teniendo pesadillas recurrentes. Sus padres dicen que debe madurar.",
        choices: [
            { text: "La cuestionas (estás de acuerdo con sus padres)", target: "panel_cuarto_decision_1" },
            { text: "La apoyas (apoyas La acompañarás en lo que necesite)", target: "panel_cuarto_decision_2" },
        ]
    },

    panel_cuarto_decision_1: {
        background: "assets/10.jpg",
        dialogue: "Laila parece triste “Sí, probablemente tengan razón... Ya vuelvo.”",
        choices: [
            { text: "Siguiente", target: "panel_cuarto_inspeccion" },
        ]
    },

    panel_cuarto_decision_2: {
        background: "assets/8.jpg",
        dialogue: "Laila sonríe: “Sabía que podía contar con vos. Ya vuelvo.”",
        choices: [
            { text: "Siguiente", target: "panel_cuarto_inspeccion" },
        ]
    },

    panel_cuarto_inspeccion: {
        background: "assets/7.jpg",
        dialogue: "Inspeccionas su cuarto.",
        choices: [
            { text: "Revisas su escritorio.", target: "panel_cuarto_escritorio" },
            { text: "Revisas la TV", target: "panel_cuarto_tv" },
        ]
    },

    // Camino al escritorio...
    panel_cuarto_escritorio: {
        background: "assets/11.jpg",
        dialogue: "Revisas su escritorio...",
        choices: [
            { text: "Te comes sus caramelos", target: "panel_cuarto_caramelos" },
            { text: "Te acercas a la foto", target: "panel_cuarto_foto" },
        ]
    },

    panel_cuarto_caramelos: {
        background: "assets/12.jpg",
        dialogue: "Dejas el envoltorio sobre el escritorio.",
        choices: [
            { text: "Abres el cajón", target: "panel_cuarto_cajon" },
        ]
    },

    panel_cuarto_foto: {
        background: "assets/13.jpg",
        dialogue: "Ves una foto de ustedes, ambas pequeñas, ambas sonriendo.",
        choices: [
            { text: "Un lindo recuerdo pasa por tu mente...", target: "panel_cuarto_recuerdo" },
        ]
    },

    panel_cuarto_recuerdo: {
        background: "assets/14.jpg",
        dialogue: "Siempre fueron inseparables...",
        choices: [
            { text: "Decides abrir el cajón", target: "panel_cuarto_cajon" },
        ]
    },

    panel_cuarto_cajon: {
        background: "assets/15.jpg",
        dialogue: "Encuentras dientes y palillos.",
        choices: [
            { text: "Te das vuelta", target: "panel_cuarto_detras" },
        ]
    },

    // Camino a la TV...
    panel_cuarto_tv: {
        background: "assets/16.jpg",
        dialogue: "La televisión está apagada.",
        choices: [
            { text: "Decides prenderla", target: "panel_tv_prendida" },
        ]
    },

    panel_tv_prendida: {
        background: "assets/17.jpg",
        dialogue: "Hay interferencia en la señal.",
        choices: [
            { text: "Sigues mirando...", target: "panel_tv_maldita" },
        ]
    },

    panel_tv_maldita: {
        background: "assets/18.jpg",
        dialogue: "Varias caras te observan. Te parece raro.",
        choices: [
            { text: "Cambias de canal", target: "panel_tv_maldita_p2" },
        ]
    },

    panel_tv_maldita_p2: {
        background: "assets/19.jpg",
        dialogue: "Manos salen de la pantalla como si quisieran agarrarte...",
        choices: [
            { text: "Intentas alejarte de la televisión. Te das la vuelta.", target: "panel_cuarto_detras" },
        ]
    }

};
