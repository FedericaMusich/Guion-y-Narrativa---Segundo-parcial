const act_4 = {
    panel_hall: {
        background: "assets/24.jpg",
        dialogue: "Te encuentras en el hall de la casa. Sientes que tu sanidad se está desmoronando.",
        choices: [
            { text: "Vas al ático.", target: "panel_atico" },
            { text: "Te acercas a quien parece tu amiga.", target: "panel_demonio" },
            { text: "Corres hacia las escaleras.", target: "panel_escaleras" },
        ]
    },

    // ATICO
    panel_atico: {
        background: "assets/25.jpg",
        dialogue: "Te encuentras a Laila. Te explica que no te asustes, pero que tienen que irse de la casa",
        choices: [
            { text: "¿Qué está pasando?", target: "panel_atico_p2" },
        ]
    },

    panel_atico_p2: {
        background: "assets/26.jpg",
        dialogue: "Describe cómo sus padres vienen actuando extraño hace tiempo.",
        choices: [
            { text: "Decides cuestionarla.", target: "panel_atico_abandono" },
            { text: "La sigues...", target: "panel_atico_escape" },
        ]
    },

    panel_atico_abandono: {
        background: "assets/27.jpg",
        dialogue: "...",
        choices: [
            { text: "¿Laila?", target: "panel_atico_abandono_p1" },
        ]
    },

    panel_atico_abandono_p1: {
        background: "assets/30.jpg",
        dialogue: "Laila te abandona en el ático.",
        choices: [
            { text: "Siento un frío en la espalda...", target: "panel_atico_abandono_p2" },
        ]
    },

    panel_atico_abandono_p2: {
        background: "assets/28.jpg",
        dialogue: "Una mano te agarra del pie desde las sombras.",
        choices: [
            { text: "Te consume la oscuridad...", target: "end"},
        ]
    },

    panel_atico_escape: {
        background: "assets/38.jpg",
        dialogue: "Laila se pone contenta. “Sabía que podía confiar en vos...”",
        choices: [
            { text: "Escapan por la ventana.", target: "panel_atico_escape_p1" },
        ]
    },

    panel_atico_escape_p1: {
        background: "assets/30.jpg",
        dialogue: "Sientes una brisa tenue.",
        choices: [
            { text: "Libertad...", target: "panel_atico_esscape_p2"},
        ]
    },

    panel_atico_esscape_p2: {
        background: "assets/31.jpg",
        dialogue: "Los padres de Laila pegan carteles de “Personas desaparecidas” en la calle.",
        choices: [
            { text: "Nadie sabe dónde están...", target: "end"},
        ]
    },    

    // ESCALERAS
    panel_escaleras: {
        background: "assets/32.jpg",
        dialogue: "Te encuentras en las escaleras. Los padres de Laila ensangrentados, te explican que Laila los atacó y escapó corriendo de la casa asustada.",
        choices: [
            { text: "No lo podés creer...", target: "panel_escaleras_p2" },
        ]
    },

    panel_escaleras_p2: {
        background: "assets/33.jpg",
        dialogue: "Pegás carteles de “Persona desaparecida” en la calle.",
        choices: [
            { text: "Nadie sabe dónde está... Laila, te extraño...", target: "panel_escaleras_p3" },
        ]
    },

    panel_escaleras_p3: {
        background: "assets/34.jpg",
        dialogue: null,
        choices: [
            { text: "Te extraño, no me dejes sola.", target: "end"},
        ]
    },

    // DEMONIO
    panel_demonio: {
        background: "assets/35.jpg",
        dialogue: "Ya no parece tu amiga.",
        choices: [
            { text: "¿¿Laila??", target: "panel_demonio_p2" },
        ]
    },

    panel_demonio_p2: {
        background: "assets/36.jpg",
        dialogue: "Su cara está derritiéndose. Estás aterrada.",
        choices: [
            { text: "Sabía que vendrías por mí....", target: "panel_demonio_escape" },
        ]
    },

    panel_demonio_escape: {
        background: "assets/37.jpg",
        dialogue: "Manos salen detrás de ella. Intentas huir, pero ya es demasiado tarde.",
        choices: [
            { text: "Lágrimas brotan de tus ojos. Luego gritas. Luego nada.", target: "end" },
        ]
    },
    // END

    end: {
        background: "assets/29.jpg",
        dialogue: null,
        choices: [
            { text: "Este es tu final...", target: "start"},
        ]
    },
};
