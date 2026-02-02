// 1. TU PROGRESO (Modifica esto cada vez que leas)
const MI_CANTO_ACTUAL = 4;

// 2. LA BASE DE DATOS (Añade aquí los hitos que quieras)
const hitos = [
    // Introducción y Ante-infierno
    { n: 1, reino: "infierno", lugar: "Selva Oscura", desc: "Dante se pierde y es acechado por tres fieras. Aparece Virgilio." },
    { n: 2, reino: "infierno", lugar: "Colina del Deleite", desc: "Virgilio explica que Beatrice lo ha enviado para ayudar a Dante." },
    { n: 3, reino: "infierno", lugar: "Puerta del Infierno", desc: "Los ignavos (indecisos). Caronte cruza a las almas por el río Aqueronte." },

    // Círculos del Infierno Superior (Incontinencia)
    { n: 4, reino: "infierno", lugar: "Círculo I: Limbo", desc: "Almas que no recibieron el bautismo. Encuentro con los grandes poetas." },
    { n: 5, reino: "infierno", lugar: "Círculo II: Lujuria", desc: "Minos juzga a las almas. Torbellino infernal. Paolo y Francesca." },
    { n: 6, reino: "infierno", lugar: "Círculo III: Gula", desc: "Cerbero custodia a los glotones bajo una lluvia eterna. Ciacco." },
    { n: 7, reino: "infierno", lugar: "Círculo IV: Avaricia y Prodigalidad", desc: "Pluto vigila. Los condenados empujan grandes pesos entre sí." },
    { n: 8, reino: "infierno", lugar: "Círculo V: Ira y Pereza", desc: "Laguna Estigia. El barquero Flegias. Llegada a las murallas de Dite." },
    { n: 9, reino: "infierno", lugar: "Murallas de Dite", desc: "Aparecen las Furias y Medusa. Un ángel abre las puertas de la ciudad." },

    // Infierno Inferior (Malicia)
    { n: 10, reino: "infierno", lugar: "Círculo VI: Herejía", desc: "Sepulcros ardientes. Encuentro con Farinata degli Uberti." },
    { n: 11, reino: "infierno", lugar: "Borde del Círculo VII", desc: "Virgilio explica la estructura del bajo infierno mientras descansan." },
    { n: 12, reino: "infierno", lugar: "Círculo VII: Violencia (Prójimo)", desc: "El Minotauro. Río de sangre hirviente (Flegetonte) con Centauros." },
    { n: 13, reino: "infierno", lugar: "Círculo VII: Violencia (Uno mismo)", desc: "Bosque de los suicidas. Las almas se convierten en árboles picoteados por Harpías." },
    { n: 14, reino: "infierno", lugar: "Círculo VII: Violencia (Dios/Naturaleza)", desc: "Arenal ardiente bajo lluvia de fuego. El Viejo de Creta." },
    { n: 15, reino: "infierno", lugar: "Círculo VII: Sodomitas", desc: "Encuentro con Brunetto Latini, antiguo maestro de Dante." },
    { n: 16, reino: "infierno", lugar: "Círculo VII: Tres Florentinos", desc: "Dante habla con almas de políticos nobles de Florencia." },
    { n: 17, reino: "infierno", lugar: "El Descenso", desc: "El monstruo Gerión los lleva volando al octavo círculo (Fraude)." },

    // Malebolge (Círculo VIII - Fraude Simple)
    { n: 18, reino: "infierno", lugar: "Bolgia 1 y 2", desc: "Proxenetas, seductores y aduladores (sumergidos en estiércol)." },
    { n: 19, reino: "infierno", lugar: "Bolgia 3: Simoniacos", desc: "Papas corruptos enterrados de cabeza con los pies ardiendo." },
    { n: 20, reino: "infierno", lugar: "Bolgia 4: Adivinos", desc: "Caminan con la cabeza vuelta hacia atrás, incapaces de ver el futuro." },
    { n: 21, reino: "infierno", lugar: "Bolgia 5: Barateros", desc: "Políticos corruptos en brea hirviente vigilados por los diablos Malebranche." },
    { n: 22, reino: "infierno", lugar: "Bolgia 5 (Cont.)", desc: "Dante y Virgilio escapan de la persecución de los demonios." },
    { n: 23, reino: "infierno", lugar: "Bolgia 6: Hipócritas", desc: "Caminan con pesadas capas de plomo dorado. Los crucificados." },
    { n: 24, reino: "infierno", lugar: "Bolgia 7: Ladrones", desc: "Metamorfosis horribles con serpientes que muerden a los ladrones." },
    { n: 25, reino: "infierno", lugar: "Bolgia 7 (Cont.)", desc: "Vanni Fucci y más transformaciones entre hombres y reptiles." },
    { n: 26, reino: "infierno", lugar: "Bolgia 8: Consejeros fraudulentos", desc: "Llamas que envuelven almas. El famoso viaje de Ulises." },
    { n: 27, reino: "infierno", lugar: "Bolgia 8 (Cont.)", desc: "Guido da Montefeltro cuenta su caída por consejo falso." },
    { n: 28, reino: "infierno", lugar: "Bolgia 9: Sembradores de discordia", desc: "Almas mutiladas por una espada. Mahoma y Bertrand de Born." },
    { n: 29, reino: "infierno", lugar: "Bolgia 10: Falsificadores", desc: "Enfermedades horribles: lepra y sarna para los alquimistas." },
    { n: 30, reino: "infierno", lugar: "Bolgia 10 (Cont.)", desc: "Pelea entre falsificadores de personas y de monedas (Gianni Schicchi)." },

    // Círculo IX (Traición)
    { n: 31, reino: "infierno", lugar: "Pozo de los Gigantes", desc: "Anteo baja a los poetas al fondo del Infierno (Lago Cocito)." },
    { n: 32, reino: "infierno", lugar: "Círculo IX: Caína y Antenora", desc: "Traidores a la familia y a la patria, congelados en el hielo." },
    { n: 33, reino: "infierno", lugar: "Círculo IX: Tolomea", desc: "Conde Ugolino devorando el cráneo de Ruggieri. Traidores a los huéspedes." },
    { n: 34, reino: "infierno", lugar: "Círculo IX: Judeca (Lucifer)", desc: "El centro de la Tierra. Lucifer devora a Judas, Bruto y Casio. Salida al Purgatorio." },

    // Antepurgatorio
    { n: 35, reino: "purgatorio", lugar: "La Playa", desc: "Llegada de las almas en la barca del ángel. Catón de Útica." },
    { n: 36, reino: "purgatorio", lugar: "Antepurgatorio: Excomulgados", desc: "Almas que murieron fuera de la Iglesia. Encuentro con Manfredo de Sicilia." },
    { n: 37, reino: "purgatorio", lugar: "Antepurgatorio: Perezosos", desc: "Aquellos que se arrepintieron al final de su vida por negligencia." },
    { n: 38, reino: "purgatorio", lugar: "Valle de los Príncipes", desc: "Gobernantes que descuidaron sus deberes espirituales. Canto de 'Salve Regina'." },
    { n: 39, reino: "purgatorio", lugar: "La Puerta del Purgatorio", desc: "Un ángel graba siete 'P' en la frente de Dante con su espada." },

    // Las Siete Terrazas (Siete Pecados Capitales)
    { n: 40, reino: "purgatorio", lugar: "Terraza I: Soberbia", desc: "Caminan bajo pesadas piedras. Ejemplos de humildad esculpidos." },
    { n: 41, reino: "purgatorio", lugar: "Terraza I (Cont.)", desc: "Dante habla con Oderisi de Gubbio sobre la vanidad de la fama." },
    { n: 42, reino: "purgatorio", lugar: "Terraza II: Envidia", desc: "Almas con los ojos cosidos con alambre para que no miren con malicia." },
    { n: 43, reino: "purgatorio", lugar: "Terraza III: Ira", desc: "Caminan envueltos en un humo negro y espeso que ciega los ojos." },
    { n: 44, reino: "purgatorio", lugar: "Terraza III (Cont.)", desc: "Marco Lombardo diserta sobre el libre albedrío y la corrupción del mundo." },
    { n: 45, reino: "purgatorio", lugar: "Terraza IV: Pereza", desc: "Almas que corren sin descanso para compensar su tibieza en vida." },
    { n: 46, reino: "purgatorio", lugar: "Terraza V: Avaricia", desc: "Almas postradas boca abajo en el suelo. Encuentro con el Papa Adriano V." },
    { n: 47, reino: "purgatorio", lugar: "Terraza V (Cont.)", desc: "Terremoto en la montaña: el poeta Estacio ha terminado su purificación." },
    { n: 48, reino: "purgatorio", lugar: "Terraza VI: Gula", desc: "Almas famélicas bajo árboles cargados de frutas que no pueden alcanzar." },
    { n: 49, reino: "purgatorio", lugar: "Terraza VI (Cont.)", desc: "Forese Donati y la crítica a las costumbres de Florencia." },
    { n: 50, reino: "purgatorio", lugar: "Terraza VII: Lujuria", desc: "Almas que caminan a través de una muralla de fuego purificador." },
    { n: 51, reino: "purgatorio", lugar: "El Muro de Fuego", desc: "Dante debe atravesar las llamas para llegar al Paraíso Terrenal." },

    // Paraíso Terrenal
    { n: 52, reino: "purgatorio", lugar: "El Bosque Sagrado", desc: "Dante encuentra a Matelda. Virgilio ya no puede guiarlo más." },
    { n: 53, reino: "purgatorio", lugar: "La Procesión Mística", desc: "Una procesión triunfal con el Carro de la Iglesia y siete candelabros." },
    { n: 54, reino: "purgatorio", lugar: "Aparición de Beatrice", desc: "Dante llora por la partida de Virgilio. Beatrice lo reprende duramente." },
    { n: 55, reino: "purgatorio", lugar: "Río Leteo y Eunoé", desc: "Dante es sumergido para olvidar sus pecados y recordar sus buenas obras." },

    // Esferas Planetarias
    { n: 56, reino: "paraiso", lugar: "Cielo I: La Luna", desc: "Almas que no cumplieron sus votos por fuerza mayor. Piccarda Donati." },
    { n: 57, reino: "paraiso", lugar: "Cielo II: Mercurio", desc: "Almas que buscaron el honor y la gloria. El emperador Justiniano." },
    { n: 58, reino: "paraiso", lugar: "Cielo III: Venus", desc: "Almas de los amantes que dirigieron su amor hacia Dios. Carlos Martel." },
    { n: 59, reino: "paraiso", lugar: "Cielo IV: El Sol", desc: "Los sabios y teólogos. Santo Tomás de Aquino elogia a San Francisco." },
    { n: 60, reino: "paraiso", lugar: "Cielo IV (Cont.)", desc: "San Buenaventura elogia a Santo Domingo. Danza de los sabios." },
    { n: 61, reino: "paraiso", lugar: "Cielo V: Marte", desc: "Mártires de la fe. Una cruz gigante formada por luces. Cacciaguida." },
    { n: 62, reino: "paraiso", lugar: "Cielo VI: Júpiter", desc: "Gobernantes justos. Las luces forman un águila imperial que habla." },
    { n: 63, reino: "paraiso", lugar: "Cielo VII: Saturno", desc: "Los contemplativos. La Escala de Oro que sube hasta lo más alto." },
    { n: 64, reino: "paraiso", lugar: "Cielo VIII: Estrellas Fijas", desc: "Dante es examinado sobre la Fe, la Esperanza y la Caridad por los Apóstoles." },
    { n: 65, reino: "paraiso", lugar: "Cielo IX: Primer Móvil", desc: "El origen del tiempo y el movimiento. Los coros angélicos rodeando un punto de luz." },

    // El Empíreo
    { n: 66, reino: "paraiso", lugar: "El Río de Luz", desc: "Dante ve la luz divina como un río y luego como una Rosa Blanca." },
    { n: 67, reino: "paraiso", lugar: "La Rosa Celestial", desc: "San Bernardo sustituye a Beatrice. Dante ve a todos los santos sentados." },

    // Esferas Planetarias
    { n: 68, reino: "paraiso", lugar: "Esfera I: La Luna", desc: "Ascenso de Dante y Beatrice. Naturaleza de las manchas lunares." },
    { n: 69, reino: "paraiso", lugar: "La Luna: Votos Incumplidos", desc: "Piccarda Donati explica que el grado de beatitud es perfecto para todos." },
    { n: 70, reino: "paraiso", lugar: "Dudas de Dante", desc: "Beatrice explica dónde residen las almas y la libertad del alma." },
    { n: 71, reino: "paraiso", lugar: "Esfera II: Mercurio", desc: "Las almas que buscaron gloria activa. Encuentro con Justiniano." },
    { n: 72, reino: "paraiso", lugar: "Historia del Águila", desc: "Justiniano narra la historia del Imperio Romano." },
    { n: 73, reino: "paraiso", lugar: "La Redención", desc: "Beatrice explica el misterio de la Encarnación y la Crucifixión." },
    { n: 74, reino: "paraiso", lugar: "Esfera III: Venus", desc: "Los amantes. Carlos Martel habla sobre la herencia y el destino." },
    { n: 75, reino: "paraiso", lugar: "Venus: Cunizza y Folquet", desc: "Críticas a la corrupción de las ciudades italianas." },
    { n: 76, reino: "paraiso", lugar: "Esfera IV: El Sol", desc: "Los sabios. Santo Tomás de Aquino presenta a los grandes teólogos." },
    { n: 77, reino: "paraiso", lugar: "Vida de San Francisco", desc: "Santo Tomás (dominico) narra la vida del fundador de los franciscanos." },
    { n: 78, reino: "paraiso", lugar: "Vida de San Domingo", desc: "San Buenaventura (franciscano) elogia al fundador de los dominicos." },
    { n: 79, reino: "paraiso", lugar: "La Sabiduría de Salomón", desc: "Aclaraciones sobre la resurrección de los cuerpos." },
    { n: 80, reino: "paraiso", lugar: "Esfera V: Marte", desc: "Los guerreros de la fe forman una cruz luminosa. Aparece Cacciaguida." },
    { n: 81, reino: "paraiso", lugar: "La Antigua Florencia", desc: "El antepasado de Dante describe la pureza de la ciudad antigua." },
    { n: 82, reino: "paraiso", lugar: "La Profecía del Exilio", desc: "Cacciaguida predice el destierro de Dante y su misión como escritor." },
    { n: 83, reino: "paraiso", lugar: "Esfera VI: Júpiter", desc: "Los gobernantes justos. Las luces forman la frase 'Diligite Iustitiam'." },
    { n: 84, reino: "paraiso", lugar: "El Águila de la Justicia", desc: "El Águila habla con una sola voz sobre la inescrutable justicia divina." },
    { n: 85, reino: "paraiso", lugar: "Gobernantes en el Ojo", desc: "Almas paganas salvas (Trajano y Rifeo) y el misterio de la predestinación." },
    { n: 86, reino: "paraiso", lugar: "Esfera VII: Saturno", desc: "Los contemplativos. La escala dorada que llega al infinito." },
    { n: 87, reino: "paraiso", lugar: "Pedro Damián", desc: "Crítica al lujo de los prelados modernos. Silencio celestial." },
    { n: 88, reino: "paraiso", lugar: "San Benito", desc: "Lamento por la decadencia de las órdenes monásticas." },
    { n: 89, reino: "paraiso", lugar: "Esfera VIII: Estrellas Fijas", desc: "Triunfo de Cristo y visión de la Virgen María." },
    { n: 90, reino: "paraiso", lugar: "Examen sobre la Fe", desc: "San Pedro examina a Dante como si fuera un bachiller." },
    { n: 91, reino: "paraiso", lugar: "Examen sobre la Esperanza", desc: "San Santiago interroga a Dante sobre lo que espera del cielo." },
    { n: 92, reino: "paraiso", lugar: "Examen sobre la Caridad", desc: "San Juan interroga a Dante sobre el amor. Aparece Adán." },
    { n: 93, reino: "paraiso", lugar: "Ira de San Pedro", desc: "Denuncia contra los papas corruptos. Ascenso al Noveno Cielo." },
    { n: 94, reino: "paraiso", lugar: "Esfera IX: Primer Móvil", desc: "El origen del movimiento y el tiempo. El punto de luz cegadora." },
    { n: 95, reino: "paraiso", lugar: "Las Jerarquías Angélicas", desc: "Beatrice explica los nueve coros de ángeles que rodean a Dios." },
    { n: 96, reino: "paraiso", lugar: "Creación de los Ángeles", desc: "Disertación sobre el inicio del universo y la caída de Lucifer." },

    // El Empíreo (Más allá del tiempo y el espacio)
    { n: 97, reino: "paraiso", lugar: "El Río de Luz", desc: "Dante sale del universo físico. Ve la luz divina como un río de chispas." },
    { n: 98, reino: "paraiso", lugar: "La Rosa Celestial", desc: "La luz se transforma en una inmensa rosa blanca donde habitan los beatos." },
    { n: 99, reino: "paraiso", lugar: "San Bernardo", desc: "Beatrice vuelve a su trono. San Bernardo guía a Dante en el paso final." },
    { n: 100, reino: "paraiso", lugar: "La Visión de Dios", desc: "Dante ve la Trinidad y el misterio del Hombre. Su voluntad se une al Amor Universal." }
];

const container = document.getElementById('roadmap');
const stats = document.getElementById('stats');

function renderizarMapa() {
    stats.innerText = `Canto actual: ${MI_CANTO_ACTUAL} | Viajando por el ${hitos.find(h => h.n >= MI_CANTO_ACTUAL)?.reino || "Paraíso"}`;

    hitos.forEach(hito => {
        const isCompleted = MI_CANTO_ACTUAL > hito.n;
        const isActive = MI_CANTO_ACTUAL === hito.n;

        const card = document.createElement('div');
        card.className = `canto-card ${hito.reino} ${isActive ? 'active' : ''} ${isCompleted ? 'completed' : ''}`;

        card.innerHTML = `
            <div class="marker"></div>
            <div class="content">
                <div class="meta">${hito.reino} - Canto ${hito.n}</div>
                <h3>${isCompleted || isActive ? hito.lugar : '???'}</h3>
                <p>${isCompleted ? hito.desc : '???'}</p>
            </div>
        `;

        container.appendChild(card);
    });

    const target = document.querySelector('.active');
    if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
}

renderizarMapa();

function actualizarColorFondo() {
    // Buscamos los datos del canto actual en tu array de hitos
    const datosCanto = hitos.find(h => h.n === MI_CANTO_ACTUAL);
    
    // Si no hay datos específicos para ese canto, calculamos el reino por el número
    const reinoActual = datosCanto ? datosCanto.reino : 
                        (MI_CANTO_ACTUAL <= 34 ? "infierno" : 
                        (MI_CANTO_ACTUAL <= 67 ? "purgatorio" : "paraiso"));

    let color;
    switch (reinoActual) {
        case "infierno":
            color = "#1a0505"; // Un negro rojizo muy oscuro
            break;
        case "purgatorio":
            color = "#051a08"; // Un verde bosque profundo
            break;
        case "paraiso":
            color = "#050e1a"; // Un azul noche estrellada
            break;
        default:
            color = "#1a1a1a";
    }

    // Aplicamos el color al body usando la variable CSS
    document.body.style.setProperty('--bg-color-dinamico', color);
}

// Llama a esta función al final de tu función principal renderizarMapa()
// o justo después de definir MI_CANTO_ACTUAL
actualizarColorFondo();

window.onscroll = function() {
    // Calculamos cuánto scroll se ha hecho (0 a 1)
    const scrollH = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = window.scrollY / scrollH;

    let colorFondo;

    if (scrolled < 0.34) {
        // ZONA INFIERNO: De negro a rojo muy oscuro
        colorFondo = `rgb(${20 + scrolled * 100}, 5, 5)`; 
    } else if (scrolled < 0.67) {
        // ZONA PURGATORIO: De negro a verde bosque
        // Ajustamos el valor para que empiece de cero en esta sección
        const pScrolled = (scrolled - 0.34) / 0.33;
        colorFondo = `rgb(5, ${15 + pScrolled * 60}, 10)`;
    } else {
        // ZONA PARAÍSO: De negro a azul/dorado oscuro
        const paScrolled = (scrolled - 0.67) / 0.33;
        colorFondo = `rgb(5, ${10 + paScrolled * 40}, ${25 + paScrolled * 80})`;
    }

    document.body.style.backgroundColor = colorFondo;
};