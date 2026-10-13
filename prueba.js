/* =========================================================================
   SCRIPT ÚNICO · sin dependencias externas
   -------------------------------------------------------------------------
   1. DATOS EDITABLES   → fechas de la gira y equipo
   2. Utilidades
   3. Portada (apertura de las cordilleras)
   4. Entradas animadas y contadores
   5. Carrusel Cover Flow 3D
   6. Listado de fechas y grilla del equipo
   ========================================================================= */
(function () {
    "use strict";
    /* =======================================================================
   1. DATOS EDITABLES
   -----------------------------------------------------------------------
   Para agregar o quitar una fecha basta con añadir o borrar un objeto de
   este arreglo: el carrusel, el contador "01 / 16", la barra de progreso
   y el listado inferior se recalculan solos.
   image       ruta de la fotografía (4:5 vertical)
   dateShort   aparece bajo la foto, en mayúsculas
   dateLong    aparece en el listado de fechas
   location    ciudad
   venue       sede
   title       título de la actividad
   description una o dos frases (a veces metí demasiado)
   people      asistentes aproximados
   soon        true si la fecha todavía no ocurrió
   ======================================================================= */
    const FECHAS = [
        {
            image: "images/fechas/fecha-01.jpg",
            dateShort: "9 NOV 2025",
            dateLong: "9 de noviembre de 2025",
            location: "Caraz",
            venue: "Sitio arqueológico de Tumshukayko",
            title: "Jornada piloto",
            description:
                "Luego de ver la laguna de Parón bajo la luna llena, la primera vez que el relato se dijo en voz alta fue entre los muros preincas de Tumshukayko, sacudidos por antiguos sismos y deslizamientos.",
            people: "~25 personas"
        },
        {
            image: "images/fechas/fecha-02.jpg",
            dateShort: "29 NOV 2025",
            dateLong: "29 de noviembre de 2025",
            location: "Caraz",
            venue: "Municipalidad Provincial de Huaylas · Caraz Cultura",
            title: "Primera fecha pública",
            description:
                "El auditorio se llenó pese al duelo de la ciudad y la final de la Libertadores. La actividad reunió a todas las generaciones en un solo espacio. Docentes de la UNASAM, ingenieros del INAIGEM y defensores de la laguna Parón terminaron sentados en la misma fila.",
            people: "~120 personas"
        },
        {
            image: "images/fechas/fecha-03.jpg",
            dateShort: "13 DIC 2025",
            dateLong: "13 de diciembre de 2025",
            location: "Caraz",
            venue: "D'Chary · Club Unión Caraz",
            title: "Velada en una pizzería",
            description:
                "La prueba de que la presentación no pertenece a un solo formato: puede vivir en un auditorio o entre mesas de una pizzería sin perder la fuerza de su mensaje.",
            people: "~25 personas"
        },
        {
            image: "images/fechas/fecha-04.jpg",
            dateShort: "18 DIC 2025",
            dateLong: "18 de diciembre de 2025",
            location: "Huaraz",
            venue: "Auditorio Huascarán · Cámara de Comercio de Áncash",
            title: "Día Internacional de las Montañas",
            description:
                "Elegida conferencia magistral e introducida por el profesor Javier León León. Al cierre se abrió el panel científico «Rol de la ciencia para entender las montañas».",
            people: "~200 personas"
        },
        {
            image: "images/fechas/fecha-05.jpg",
            dateShort: "30 DIC 2025",
            dateLong: "30 de diciembre de 2025",
            location: "Caraz",
            venue: "Casona Lara · en alianza con Aqará",
            title: "Presentación a cielo abierto",
            description: "Bajo la luz de la luna y al aire libre, una de las fechas más hermosas y recordadas.",
            people: "~60 personas"
        },
        {
            image: "images/fechas/fecha-06.jpg",
            dateShort: "7 ENE 2026",
            dateLong: "7 de enero de 2026",
            location: "Huaraz",
            venue: "Auditorio de la DDC Áncash · AGOEMA",
            title: "Auditorio de la DDC Áncash",
            description:
                "Cerca de doscientas personas principalmente ligadas al guiado de montaña llenaron el auditorio con apenas dieciocho horas de difusión.",
            people: "~200 personas"
        },
        {
            image: "images/fechas/fecha-07.jpg",
            dateShort: "16 ENE 2026",
            dateLong: "16 de enero de 2026",
            location: "Yungay",
            venue: "Auditorio Huáscar y Huandy · Centro Cultural",
            title: "187.º aniversario de la Batalla de Yungay",
            description:
                "Dejó de ser una conferencia para volverse un acto de memoria. Al final, un foro con especialistas del INAIGEM abrió las preguntas del público.",
            people: "~50 personas"
        },
        {
            image: "images/fechas/fecha-08.jpg",
            dateShort: "30 ENE 2026",
            dateLong: "30 de enero de 2026",
            location: "Mancos",
            venue: "Salón Consistorial · 74.º aniversario del HDC Mancos",
            title: "El museo escondido de Mancos",
            description:
                "Tras la presentación llegó el encuentro con Walter Méndez y su colección de fósiles, cerámicas y rocas en «La casita de mi abuela».",
            people: "~50 personas"
        },
        {
            image: "images/fechas/fecha-09.jpg",
            dateShort: "18 ABR 2026",
            dateLong: "18 de abril de 2026",
            location: "Huaraz",
            venue: "Explorandes · Ft. Wilmer Sánchez",
            title: "Curso de Capacitación de Alta Montaña",
            description:
                "Clase magistral para EXPLORANDES junto a Wilmer Sánchez que incorporó La Memoria del Huascarán por primera vez.",
            people: "~30 personas"
        },
        {
            image: "images/fechas/fecha-10.jpg",
            dateShort: "21 ABR 2026",
            dateLong: "Abril de 2026",
            location: "Huaraz",
            venue: " Auditorio Principal · IESPP · Ft. Young Peruvian Leaders",
            title: "Consolidación de la Presentación",
            description:
                "Una fecha muy especial la vivimos junto con los docentes, estudiantes y egresados del Instituto Superior Tecnológico Eleazar Guzmán Barrón."
        },
        {
            image: "images/fechas/fecha-11.jpg",
            dateShort: "22 ABR 2026",
            dateLong: "22 de abril de 2026",
            location: "Huaraz",
            venue: "Café Mountrail · Cumbres Blancas, UNASAM y La Base",
            title: "Tres historias que revelaron la grandeza de la Cordillera Blanca",
            description:
                "1) De la Cumbre al Atlántico - Meverick Jeampiere. 2) De la Cordillera Blanca a la Antártida - Edwin Loarte, Katy Medina y Francisco Castillo. 3) La Memoria del Huascarán - Wilmer Sánchez.",
            people: "~60 personas"
        },
        {
            image: "images/fechas/fecha-12.jpg",
            dateShort: "25 ABR 2026",
            dateLong: "25 de abril de 2026",
            location: "Huaraz",
            venue: "Sala SUM · Centro Cultural de Huaraz",
            title: "Semana de la Tierra",
            description:
                "Por primera vez, la presentación tuvo una introducción en quechua y un final musical, elementos que desde esta fecha se convertirían en una parte fundamental de las futuras presentaciones."
        },
        {
            image: "images/fechas/fecha-13.jpg",
            dateShort: "14 MAY 2026",
            dateLong: "14 de mayo de 2026",
            location: "Yanama",
            venue: "Refugio Contrahierbas · Refugios Andinos, Chasing Glaciers y Cumbres Blancas",
            title: "El refugio como espacio de aprendizaje",
            description:
                "Estudiantes de la IEP San Juan Bosco y N.E.E.O. de Chalhua conocieron los documentales de Chasing Glaciers y la presentación de Meverick Jeampiere, transformaron un refugio en un espacio de aprendizaje y lectura del entorno.",
            people: "~60 personas"
        },
        {
            image: "images/fechas/fecha-14.jpg",
            dateShort: "29 MAY 2026",
            dateLong: "29 de mayo de 2026",
            location: "Yungay",
            venue: "Auditorio Huáscar y Huandy · Centro Cultural",
            title: "56 años del sismo-alud de 1970",
            description:
                "Una de las presentaciones más trascendentes de todas. Por primera vez Aine Gunn le integró música a la presentación. Albert Waters, habló sobre el drenaje ácido de roca, y Vangie Gomero, sobre Pintaykuna. Esta presentación incorporó por primera vez La Memoria del Huascarán para el público yungaíno.",
            people: "600 personas"
        },
        {
            image: "images/fechas/fecha-15.jpg",
            dateShort: "04 JUL 2026",
            dateLong: "04 de Julio de 2026",
            location: "Huaraz",
            venue: "UNASAM",
            title: "Festival de los Glaciares 2026",
            description:
                "Como actividad central, esta presentación articuló plenamente ciencia, arte y tecnología. En la actividad entre el público se contó con la presencia del Dr. Fernando Castillo, rector de la UNASAM y estudiantes de la Universidad Nacional José Faustino Sánchez Carrión de Lima, además de asistentes de otras instituciones."
        },
        {
            image: "images/fechas/fecha-16.jpg",
            dateShort: "01 AGO 2026",
            dateLong: "01 de Agosto de 2026",
            location: "Yungay",
            venue: "Refugio Don Bosco Huascarán · Campo Morrena · 4700 m s. n. m.",
            title: "Una nueva mirada desde el Huascarán",
            description:
                "Al pie del Huascarán, frente a la Cordillera Negra y bajo el vuelo de un cóndor andino, se narró la historia de ambas cordilleras. Wilmer Sánchez compartió La Memoria del Huascarán y uno de los asistentes, tras haber recorrido los Himalayas, los Alpes, confesó que aquellas aventuras ahora le parecían vacías después de esta experiencia.",
            people: "30 personas"
        }
    ];
    /* Equipo interdisciplinario ------------------------------------------- */
    const EQUIPO = [
        {
            photo: "images/equipo/meverick.jpg",
            name: "Meverick Jeampiere",
            role: "Creador y presentador",
            org: "Universidade Federal de São Paulo",
            bio: "Reconstruyó el relato tras siete años de viaje entre la desembocadura del Amazonas y la Cordillera Blanca.",
            skills: ["Biónica", "Programación", "Innovación tecnológica", "Dibujo artístico", "3D"]
        },
        {
            photo: "images/equipo/denisse.jpg",
            name: "Denisse Castillo",
            role: "Coautora y politóloga",
            org: "Pontificia Universidad Católica del Perú",
            bio: "Media las conversaciones con el público y traduce el relato en incidencia y política pública.",
            skills: ["Activismo ambiental", "Ciencia política", "Gestión de proyectos"]
        },
        {
            photo: "images/equipo/aine.jpg",
            name: "Aine Gunn",
            role: "Presentadora y cantautora",
            org: "State University of New York",
            bio: "Con su voz y música le da a las presentaciones una atmósfera más envolvente, esto unido a su formación científica expandió la experiencia sensorial de la presentación con el público.",
            skills: ["Canto", "Neurociencias", "Guitarra", "Camping", "Dibujo artístico"]
        },
        {
            photo: "images/equipo/albert.jpg",
            name: "Albert Waters",
            role: "Coautor y asesor técnico",
            org: "Instituto Nacional de Glaciares del Perú",
            bio: "Aporta la mirada glaciológica: qué está pasando hoy con el hielo que al retroceder está revelando una nueva forma de contaminación natural de alto impacto en las poblaciones afectadas.",
            skills: ["Glaciología", "Redacción", "Trekking", "Running", "Guitarra", "Canto"]
        },
        {
            photo: "images/equipo/adri.jpg",
            name: "Adrián Figueroa",
            role: "Asesor ambiental",
            org: "Universidad Nacional Santiago Antúnez de Mayolo",
            bio: "Activista y especialista ambiental, labora en el INAIGEM y es creador de los Embajadores de los Glaciares.",
            skills: ["Activismo ambiental", "Investigación", "Conexiones"]
        },
        {
            photo: "images/equipo/carolay.jpg",
            name: "Carolay Sánchez",
            role: "Coautora y asesora técnica",
            org: "Universidad Nacional Santiago Antúnez de Mayolo",
            bio: "Trabaja la forma: cómo se ve, se habita y se comunica un territorio de montaña.",
            skills: ["Diseño arquitectónico", "Comunicación científica"]
        },
        {
            photo: "images/equipo/vangie.jpg",
            name: "Vangie Gomero",
            role: "Innovación tecnológica",
            org: "Universidad Nacional Santiago Antúnez de Mayolo",
            bio: "Explora y crea tecnologías sostenibles e impulsa la urgente necesidad de llevar los desarrollos del laboratorio al servicio de la sociedad.",
            skills: ["Innovación tecnológica", "Ambientalismo", "Decoración"]
        },
        {
            photo: "images/equipo/mariagracia.jpg",
            name: "Mariagracia",
            role: "Gestión de proyectos",
            org: "Universidad ESAN",
            bio: "Ordena la gestión del proyecto y su vínculo con instituciones y aliados. Más allá de para comunicar la ciencia de una forma visual y estética.",
            skills: ["Gestión ambiental", "Comunicación científica", "Gestión de proyectos"]
        }
    ];

    /* Escala geológica y humana del Callejón de Huaylas.
   Ma = millones de años; ka AP = miles de años antes del presente.
   En fechas históricas se usan años de calendario para evitar ambigüedades. */
    const TIEMPO = [
        {
            era: "Jurásico tardío",
            age: "~150–145 Ma",
            key: true,
            title: "Un mar sobre el futuro Callejón",
            text: "Sedimentos marinos de la Formación Chicama se acumularon donde mucho después surgirían los Andes. Sus fósiles, entre ellos ammonites, conservan la memoria de aquel océano."
        },

        {
            era: "Cretácico–Paleógeno",
            age: "73–48 Ma",
            key: true,
            title: "Se construye el núcleo de la Cordillera Negra",
            text: "Varias intrusiones magmáticas se enfriaron dentro de la corteza. Estas edades registran la formación de sus rocas plutónicas, no la altura actual de la cordillera."
        },

        {
            era: "Paleógeno–Mioceno",
            age: "~53–14,6 Ma",
            key: false,
            title: "Volcanismo en la Cordillera Negra",
            text: "Sucesivos episodios volcánicos formaron gran parte del Grupo Calipuy. No fue una sola erupción ni un máximo continuo, sino una historia prolongada cuyos edificios fueron luego intensamente erosionados."
        },

        {
            era: "Mioceno",
            age: "14–5 Ma",
            key: true,
            title: "Se emplaza el batolito de la Cordillera Blanca",
            text: "El magma ingresó en pulsos y cristalizó como cuerpos superpuestos a unos 3–6 km de profundidad. La Cordillera Blanca no apareció de golpe: su batolito se construyó durante millones de años."
        },

        {
            era: "Mioceno",
            age: "11–9 Ma",
            key: false,
            title: "El Amazonas se invierte y alcanza el Atlántico",
            text: "La elevación de la Cordillera de los Andes, invierte el proto-Amazonas y los sedimentos andinos comenzaron a llegar al Atlántico ecuatorial. La Cordillera Blanca naciente se convertirá en un divisor continental de aguas."
        },

        {
            era: "Mioceno tardío",
            age: "~6,4 Ma",
            key: false,
            title: "El granito llega a la superficie",
            text: "En el sector sur aparece la primera evidencia de erosión del batolito: el granito, antes enterrado, empezó a quedar expuesto y a alimentar los sedimentos vecinos."
        },

        {
            era: "Mioceno tardío",
            age: "5,4 ± 0,1 Ma",
            key: true,
            title: "Nace la cuenca del Callejón de Huaylas",
            text: "La falla normal de la Cordillera Blanca comenzó a generar subsidencia en su bloque occidental. Los depósitos más antiguos de la cuenca registran el inicio de esta nueva etapa tectónica."
        },

        {
            era: "Plioceno–actualidad",
            age: "~5 Ma–hoy",
            key: true,
            title: "La Cordillera Blanca se eleva y se inclina",
            text: "El movimiento de la falla elevó el bloque oriental e inclinó el batolito cerca de 15° hacia el este. El desplazamiento acumulado se estima en unos 11 km."
        },

        {
            era: "Cuaternario",
            age: "~2 Ma–hoy",
            key: true,
            title: "Los glaciares esculpen el relieve",
            text: "Los ciclos glaciales profundizaron valles en U y aceleraron la exhumación. En los últimos dos millones de años, la erosión glaciar pasó a dominar la forma espectacular de la cordillera."
        },

        {
            era: "Pleistoceno tardío",
            age: "~30 ka AP–hoy",
            key: false,
            title: "El hielo del Huascarán guarda el clima",
            text: "Según los resultados más recientes de testigos extraídos de la cumbre sur y el collado, el Huascarán es un mensajero del tiempo que registra alrededor de treinta mil años de la historia climática del planeta."
        },

        {
            era: "Pleistoceno tardío",
            age: "~29 y ~16,5 ka AP",
            key: false,
            title: "Grandes avances glaciales tardíos",
            text: "Morrenas fechadas en la Cordillera Blanca registran al menos dos pulsos importantes del hielo. El paisaje actual conserva las huellas de avances y retrocesos sucesivos."
        },

        {
            era: "Pleistoceno tardío",
            age: "~12 100–11 800 cal AP",
            key: true,
            title: "Ocupación humana en Guitarrero",
            text: "Las dataciones más firmes sitúan aquí una de las ocupaciones humanas tempranas de los Andes. La cifra reemplaza estimaciones antiguas que atribuían al sitio una edad mayor."
        },

        {
            era: "Holoceno",
            age: "11,7 ka AP",
            key: true,
            title: "Comienza el Holoceno",
            text: "La escala geológica internacional sitúa aquí el final del Pleistoceno. El calentamiento y el retroceso del hielo fueron procesos graduales, no un cambio instantáneo ocurrido en un solo año."
        },

        {
            era: "Holoceno medio",
            age: "8,4–5,2 ka AP",
            key: false,
            title: "Un intervalo cálido en el Huascarán",
            text: "El registro isotópico del hielo identifica este intervalo como el más cálido de su propia secuencia holocena. Es una señal local de alta montaña, no una temperatura uniforme para todo el planeta."
        },

        {
            era: "Formativo Inicial",
            age: "3500–1500 a. C.",
            key: true,
            title: "Tumshukayko toma forma",
            text: "Las investigaciones arqueológicas sitúan en este intervalo la construcción y transformación de sus montículos monumentales. La cronología continúa afinándose con nuevas excavaciones."
        },

        {
            era: "Pequeña Edad de Hielo",
            age: "1590–1720 d. C.",
            key: false,
            title: "Un gran avance de los glaciares",
            text: "Muchas de las morrenas más prominentes de la Cordillera Blanca se formaron durante este avance. Hubo pulsos menores posteriores, aproximadamente entre 1780 y 1880."
        },

        {
            era: "República",
            age: "1821–2026",
            key: false,
            title: "Perú republicano",
            text: "Doscientos cinco años frente a millones de años de historia geológica: una escala que invita a preguntarnos si el territorio nos pertenece o si, más bien, nos debemos a él."
        },

        {
            era: "Siglo XX",
            age: "31 MAY 1970",
            key: true,
            title: "El sismo-alud de Yungay",
            text: "El terremoto desencadenó una avalancha de roca y hielo del Huascarán que, al incorporar nieve y sedimentos, se transformó en un flujo de escombros devastador. Su memoria sigue siendo esencial para comprender el riesgo."
        },

        {
            era: "Actualidad",
            age: "1962–2026",
            key: true,
            title: "Retroceso glaciar acelerado",
            text: "La Cordillera Blanca perdió cerca del 38,2 % de su superficie glaciar: pasó de aproximadamente 726 km² a 449 km². El cambio ya modifica el agua, los ecosistemas y los riesgos del territorio."
        }
    ];

    /* ============================ 2. UTILIDADES ============================ */
    const $ = (s, c) => (c || document).querySelector(s);
    const $$ = (s, c) => Array.from((c || document).querySelectorAll(s));
    const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    /* ============================ 3. PORTADA =============================== */
    /* Campo de estrellas generado una sola vez */
    (function stars() {
        const mk = (host, count, size) => {
            if (!host) return;
            let html = "";
            for (let i = 0; i < count; i++) {
                const x = (Math.random() * 100).toFixed(2);
                const y = (Math.random() * 72).toFixed(2);
                const s = (Math.random() * size + 0.6).toFixed(2);
                const o = (Math.random() * 0.6 + 0.25).toFixed(2);
                const d = (Math.random() * 5).toFixed(2);
                html += `<i style="left:${x}%;top:${y}%;width:${s}px;height:${s}px;opacity:${o};animation-delay:${d}s"></i>`;
            }
            host.innerHTML = html;
        };
        mk($("#stars1"), 110, 1.5);
        mk($("#stars2"), 46, 2.2);
    })();
    /* Apertura de las cordilleras según el progreso del scroll */
    (function heroScroll() {
        const hero = $("#inicio");
        const sticky = $("#heroSticky");
        const nav = $("#nav");
        if (!hero || !sticky) return;

        /* La rueda del mouse no hace scroll continuo: avanza a saltos de ~110 px.
     Si --p se calculara directo desde la posición del scroll, las cordilleras
     se abrirían dando esos mismos saltos. Por eso perseguimos el valor real
     con una interpolación: cada cuadro nos acercamos una fracción, y el salto
     de la rueda se vuelve movimiento continuo. En trackpad y en móvil, donde
     el scroll ya es fino, la diferencia es imperceptible.                   */
        const EASE = reduced ? 1 : 0.16; /* 1 = sin suavizado · más bajo = más suave */
        let current = 0,
            running = false;

        function measure() {
            const total = hero.offsetHeight - window.innerHeight;
            return clamp(-hero.getBoundingClientRect().top / Math.max(1, total), 0, 1);
        }

        function frame() {
            const target = measure();
            current += (target - current) * EASE;
            if (Math.abs(target - current) < 0.0005) current = target;

            sticky.style.setProperty("--p", current.toFixed(4));
            if (nav) nav.classList.toggle("is-stuck", window.scrollY > window.innerHeight * 0.85);

            if (current !== target) requestAnimationFrame(frame);
            else running = false;
        }
        function kick() {
            if (!running) {
                running = true;
                requestAnimationFrame(frame);
            }
        }

        window.addEventListener("scroll", kick, { passive: true });
        window.addEventListener("resize", kick);
        window.addEventListener("orientationchange", kick);

        current = measure();
        sticky.style.setProperty("--p", current.toFixed(4));
    })();
    /* ================= 4. ENTRADAS ANIMADAS Y CONTADORES =================== */
    (function reveals() {
        const items = $$(".reveal");
        if (!("IntersectionObserver" in window) || reduced) {
            items.forEach((el) => el.classList.add("is-in"));
            $$(".stat__n").forEach((el) => (el.dataset.done = "1"));
            return;
        }
        const io = new IntersectionObserver(
            (entries) => {
                entries.forEach((e) => {
                    if (!e.isIntersecting) return;
                    e.target.classList.add("is-in");
                    $$(".stat__n", e.target).forEach(countUp);
                    io.unobserve(e.target);
                });
            },
            { threshold: 0.14, rootMargin: "0px 0px -8% 0px" }
        );
        items.forEach((el) => io.observe(el));
        function countUp(el) {
            if (el.dataset.done) return;
            el.dataset.done = "1";
            const end = parseFloat(el.dataset.count || "0");
            const suffix = el.querySelector("small") ? el.querySelector("small").outerHTML : "";
            const dur = 1100,
                t0 = performance.now();
            (function step(now) {
                const t = clamp((now - t0) / dur, 0, 1);
                const e = 1 - Math.pow(1 - t, 3);
                el.innerHTML = String(Math.round(end * e)) + suffix;
                if (t < 1) requestAnimationFrame(step);
            })(t0);
        }
    })();
    /* ==================== 5. CARRUSEL COVER FLOW 3D ======================== */
    (function coverflow() {
        const stage = $("#cfStage");
        if (!stage || !FECHAS.length) return;
        const info = $("#cfInfo");
        const elNum = $("#cfNum"),
            elTotal = $("#cfTotal"),
            elPlace = $("#cfPlace");
        const elTitle = $("#cfTitle"),
            elDesc = $("#cfDesc"),
            elVenue = $("#cfVenue");
        const bar = $("#cfBar");
        const btnPrev = $("#cfPrev"),
            btnNext = $("#cfNext");
        const N = FECHAS.length;
        let pos = 0; // posición continua (permite la interpolación del arrastre)
        let index = -1; // fotografía centrada
        let anim = 0;
        let cfg = {};
        /* --- Construcción del carrusel ------------------------------------- */
        const frag = document.createDocumentFragment();
        const cards = FECHAS.map((d, i) => {
            const num = String(i + 1).padStart(2, "0");
            const card = document.createElement("div");
            card.className = "cf__card";
            card.setAttribute("role", "group");
            card.setAttribute("aria-label", `Fecha ${i + 1} de ${N}: ${d.title}, ${d.location}, ${d.dateLong}`);
            card.innerHTML =
                '<div class="cf__shot">' +
                `<img src="${d.image}" alt="${d.title} — ${d.location}, ${d.dateLong}" ` +
                `loading="${i < 3 ? "eager" : "lazy"}" decoding="async" draggable="false">` +
                '<div class="cf__veil"></div>' +
                `<span class="cf__badge">${num} / ${String(N).padStart(2, "0")}</span>` +
                "</div>" +
                `<div class="cf__reflect" aria-hidden="true"><img src="${d.image}" alt="" draggable="false" loading="lazy"></div>`;
            card.addEventListener("click", () => {
                if (justDragged()) return;
                if (i !== index) animateTo(i);
            });
            frag.appendChild(card);
            return card;
        });
        stage.appendChild(frag);
        const veils = cards.map((c) => c.querySelector(".cf__veil"));
        if (elTotal) elTotal.textContent = String(N).padStart(2, "0");
        /* --- Configuración leída desde las variables CSS -------------------- */
        function readCfg() {
            const cs = getComputedStyle(stage);
            const v = (name, def) => {
                const raw = parseFloat(cs.getPropertyValue(name));
                return isNaN(raw) ? def : raw;
            };
            cfg = {
                angle: v("--cf-angle", 52),
                spread: v("--cf-spread", 168),
                spreadFar: v("--cf-spread-far", 74),
                depth: v("--cf-depth", 120),
                depthFar: v("--cf-depth-far", 90),
                centerZ: v("--cf-center-z", 130),
                scale: v("--cf-scale", 0.2),
                scaleFar: v("--cf-scale-far", 0.055),
                visible: v("--cf-visible", 4),
                dragPx: v("--cf-drag", 190)
            };
        }
        /* --- Dibujado (todo es función continua de la distancia al centro) --- */
        function render() {
            for (let i = 0; i < N; i++) {
                const card = cards[i];
                const d = i - pos;
                const ad = Math.abs(d);
                const sg = d < 0 ? -1 : d > 0 ? 1 : 0;
                if (ad > cfg.visible + 0.8) {
                    if (card.style.visibility !== "hidden") card.style.visibility = "hidden";
                    continue;
                }
                const n1 = Math.min(ad, 1); // 0 → 1 : del centro a la vecina
                const nf = Math.max(0, ad - 1); // más allá de la vecina
                const x = sg * (cfg.spread * n1 + cfg.spreadFar * nf);
                const z = cfg.centerZ * (1 - n1) - cfg.depth * n1 - cfg.depthFar * nf;
                const ry = -sg * cfg.angle * n1;
                const sc = Math.max(0.34, 1 - cfg.scale * n1 - cfg.scaleFar * nf);
                const op = Math.max(0.1, 1 - 0.05 * n1 - 0.26 * nf);
                card.style.visibility = "visible";
                card.style.transform =
                    "translate3d(" +
                    x.toFixed(2) +
                    "px,0," +
                    z.toFixed(2) +
                    "px) rotateY(" +
                    ry.toFixed(2) +
                    "deg) scale(" +
                    sc.toFixed(3) +
                    ")";
                card.style.opacity = op.toFixed(3);
                card.style.zIndex = String(1000 - Math.round(ad * 20));
                veils[i].style.opacity = (n1 * 0.3 + nf * 0.14).toFixed(3);
                const active = ad < 0.5;
                if (active !== card.classList.contains("is-active")) card.classList.toggle("is-active", active);
            }
            const idx = clamp(Math.round(pos), 0, N - 1);
            if (idx !== index) setIndex(idx);
        }
        /* --- Ficha informativa --------------------------------------------- */
        let swapTimer = 0,
            firstPaint = true;
        function setIndex(i) {
            index = i;
            const d = FECHAS[i];
            const paint = () => {
                elNum.textContent = String(i + 1).padStart(2, "0");
                elPlace.textContent = d.location.toUpperCase() + " · " + d.dateShort;
                elTitle.textContent = d.title;
                elDesc.textContent = d.description;
                elVenue.innerHTML = d.venue + (d.people ? " <b>·</b> " + d.people : "");
                info.classList.remove("is-swapping");
            };
            clearTimeout(swapTimer);
            if (reduced || firstPaint) {
                firstPaint = false;
                paint();
            } else {
                info.classList.add("is-swapping");
                swapTimer = setTimeout(paint, 190);
            }
            if (bar) bar.style.width = (((i + 1) / N) * 100).toFixed(2) + "%";
            if (btnPrev) btnPrev.disabled = i <= 0;
            if (btnNext) btnNext.disabled = i >= N - 1;
            /* precarga de la fotografía central y sus vecinas: sin parpadeos */
            [i - 1, i, i + 1].forEach((k) => {
                const c = cards[k];
                if (!c) return;
                c.querySelectorAll("img").forEach((im) => {
                    im.loading = "eager";
                });
            });
        }
        /* --- Animación de encaje (snap) ------------------------------------- */
        function animateTo(target, duration) {
            cancelAnimationFrame(anim);
            target = clamp(target, 0, N - 1);
            const from = pos,
                delta = target - from;
            if (Math.abs(delta) < 0.0005) {
                pos = target;
                render();
                return;
            }
            const dur = duration || (reduced ? 190 : clamp(360 + Math.abs(delta) * 170, 360, 600));
            const t0 = performance.now();
            (function step(now) {
                const t = clamp((now - t0) / dur, 0, 1);
                const e = 1 - Math.pow(1 - t, 3); /* easeOutCubic: salida natural */
                pos = from + delta * e;
                render();
                if (t < 1) anim = requestAnimationFrame(step);
            })(t0);
        }
        const go = (step) => animateTo(clamp(Math.round(pos) + step, 0, N - 1));
        /* --- Arrastre con Pointer Events (dedo, lápiz y mouse) --------------- */
        /* touch-action:pan-y deja el scroll vertical al navegador; el gesto
     horizontal es nuestro y sigue el dedo 1:1 durante todo el movimiento. */
        let drag = null,
            lastDragEnd = 0;
        const justDragged = () => performance.now() - lastDragEnd < 260;
        stage.addEventListener("pointerdown", (e) => {
            if (e.pointerType === "mouse" && e.button !== 0) return;
            cancelAnimationFrame(anim);
            drag = {
                id: e.pointerId,
                x0: e.clientX,
                y0: e.clientY,
                pos0: pos,
                moved: false,
                samples: [{ t: performance.now(), x: e.clientX }]
            };
            try {
                stage.setPointerCapture(e.pointerId);
            } catch (_) {}
        });
        stage.addEventListener("pointermove", (e) => {
            if (!drag || e.pointerId !== drag.id) return;
            const dx = e.clientX - drag.x0;
            const dy = e.clientY - drag.y0;
            if (!drag.moved) {
                if (Math.abs(dx) < 5) {
                    /* gesto claramente vertical → se lo devolvemos a la página */
                    if (Math.abs(dy) > 12) {
                        endDrag();
                    }
                    return;
                }
                drag.moved = true;
                stage.classList.add("is-dragging");
            }
            drag.samples.push({ t: performance.now(), x: e.clientX });
            if (drag.samples.length > 6) drag.samples.shift();
            let p = drag.pos0 - dx / cfg.dragPx;
            if (p < 0) p = p * 0.34; /* resistencia elástica */
            else if (p > N - 1) p = N - 1 + (p - (N - 1)) * 0.34;
            pos = p;
            render();
            if (e.cancelable) e.preventDefault();
        });
        function endDrag() {
            if (!drag) return;
            const d = drag;
            drag = null;
            stage.classList.remove("is-dragging");
            try {
                stage.releasePointerCapture(d.id);
            } catch (_) {}
            if (!d.moved) return; /* fue un toque, no un arrastre */
            lastDragEnd = performance.now();
            /* Inercia contenida.
       1) la velocidad se mide solo con las muestras de los últimos 90 ms;
       2) su aporte se limita a ±0,7 fotografías;
       3) el destino final nunca se aleja más de una fotografía de donde
          quedó el dedo. Así un swipe rápido avanza una imagen con decisión,
          pero jamás cinco o seis de golpe.                                */
            const s = d.samples;
            const last = s[s.length - 1];
            let first = s[0];
            for (let k = s.length - 1; k >= 0; k--) {
                first = s[k];
                if (last.t - s[k].t >= 90) break;
            }
            const dt = Math.max(8, last.t - first.t);
            const vPos = -((last.x - first.x) / dt) / cfg.dragPx; /* fotos por ms */
            const momentum = clamp(vPos * (reduced ? 60 : 150), -0.7, 0.7);
            const near = Math.round(pos);
            let target = Math.round(pos + momentum);
            target = clamp(target, near - 1, near + 1);
            animateTo(clamp(target, 0, N - 1));
        }
        stage.addEventListener("pointerup", endDrag);
        stage.addEventListener("pointercancel", endDrag);
        stage.addEventListener("lostpointercapture", endDrag);
        /* --- Trackpad y rueda horizontal ------------------------------------ */
        let wheelAcc = 0,
            wheelLock = false;
        stage.addEventListener(
            "wheel",
            (e) => {
                const dx = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.shiftKey ? e.deltaY : 0;
                if (!dx) return; /* scroll vertical: no lo tocamos */
                e.preventDefault();
                if (wheelLock) return;
                wheelAcc += dx;
                if (Math.abs(wheelAcc) > 42) {
                    go(wheelAcc > 0 ? 1 : -1);
                    wheelAcc = 0;
                    wheelLock = true;
                    setTimeout(() => {
                        wheelLock = false;
                    }, 430);
                }
            },
            { passive: false }
        );
        /* --- Teclado --------------------------------------------------------- */
        stage.addEventListener("keydown", (e) => {
            if (e.key === "ArrowLeft") {
                e.preventDefault();
                go(-1);
            } else if (e.key === "ArrowRight") {
                e.preventDefault();
                go(1);
            } else if (e.key === "Home") {
                e.preventDefault();
                animateTo(0);
            } else if (e.key === "End") {
                e.preventDefault();
                animateTo(N - 1);
            }
        });
        if (btnPrev) btnPrev.addEventListener("click", () => go(-1));
        if (btnNext) btnNext.addEventListener("click", () => go(1));
        /* --- Reajuste ante cambios de tamaño u orientación ------------------- */
        let rzTimer = 0;
        function relayout() {
            clearTimeout(rzTimer);
            rzTimer = setTimeout(() => {
                readCfg();
                render();
            }, 90);
        }
        window.addEventListener("resize", relayout);
        window.addEventListener("orientationchange", relayout);
        readCfg();
        /* Entrada: la primera vez que el carrusel aparece, las fotografías se
     acomodan desde la izquierda hasta encajar la número 01 en el centro. */
        if ("IntersectionObserver" in window && !reduced) {
            pos = -0.85;
            render();
            const io = new IntersectionObserver(
                (entries) => {
                    entries.forEach((e) => {
                        if (!e.isIntersecting) return;
                        io.disconnect();
                        animateTo(0, 950);
                    });
                },
                { threshold: 0.2 }
            );
            io.observe(stage);
        } else {
            render();
        }
    })();
    /* =============== 6. LÍNEA DE TIEMPO HORIZONTAL ========================= */
    /* Mismo principio que el carrusel: la posición es un número continuo, así
   que al arrastrar los hitos interpolan escala y opacidad sin saltos.     */
    (function timeline() {
        const rail = document.getElementById("tl");
        if (!rail || !TIEMPO.length) return;
        const N = TIEMPO.length;
        let pos = 0,
            index = -1,
            anim = 0,
            cfg = {};
        /* --- Construcción --------------------------------------------------- */
        const frag = document.createDocumentFragment();
        const items = TIEMPO.map((d, i) => {
            const el = document.createElement("article");
            el.className = "tl__item" + (d.key ? " is-key" : "");
            el.innerHTML =
                '<p class="tl__era">' +
                d.era +
                "</p>" +
                '<p class="tl__age">' +
                d.age +
                "</p>" +
                '<span class="tl__dot" aria-hidden="true"><i></i></span>' +
                '<div class="tl__body">' +
                '<h3 class="tl__t">' +
                d.title +
                "</h3>" +
                '<p class="tl__d">' +
                d.text +
                "</p>" +
                "</div>";
            el.addEventListener("click", () => {
                if (justDragged()) return;
                if (i !== index) animateTo(i);
            });
            frag.appendChild(el);
            return el;
        });
        rail.appendChild(frag);
        const descs = items.map((el) => el.querySelector(".tl__d"));
        const bar = document.getElementById("tlBar");
        const btnPrev = document.getElementById("tlPrev");
        const btnNext = document.getElementById("tlNext");
        function readCfg() {
            const cs = getComputedStyle(rail);
            const v = (n, def) => {
                const r = parseFloat(cs.getPropertyValue(n));
                return isNaN(r) ? def : r;
            };
            cfg = {
                step: v("--tl-step", 300),
                scale: v("--tl-scale", 0.17),
                visible: v("--tl-visible", 4),
                dragPx: v("--tl-drag", 300)
            };
        }
        function render() {
            for (let i = 0; i < N; i++) {
                const el = items[i];
                const d = i - pos;
                const ad = Math.abs(d);
                if (ad > cfg.visible + 1) {
                    if (el.style.visibility !== "hidden") el.style.visibility = "hidden";
                    continue;
                }
                const n1 = Math.min(ad, 1);
                const nf = Math.max(0, ad - 1);
                const x = d * cfg.step;
                const sc = Math.max(0.5, 1 - cfg.scale * n1 - 0.045 * nf);
                const op = Math.max(0.05, 1 - 0.34 * n1 - 0.28 * nf);
                el.style.visibility = "visible";
                el.style.transform = "translate3d(" + x.toFixed(2) + "px,0,0) scale(" + sc.toFixed(3) + ")";
                el.style.opacity = op.toFixed(3);
                el.style.zIndex = String(100 - Math.round(ad * 10));
                /* la descripción solo se lee en el hito central */
                descs[i].style.opacity = Math.max(0, 1 - 1.7 * ad).toFixed(3);
                const active = ad < 0.5;
                if (active !== el.classList.contains("is-active")) el.classList.toggle("is-active", active);
            }
            const idx = clamp(Math.round(pos), 0, N - 1);
            if (idx !== index) {
                index = idx;
                if (bar) bar.style.width = ((index / (N - 1)) * 100).toFixed(2) + "%";
                if (btnPrev) btnPrev.disabled = index <= 0;
                if (btnNext) btnNext.disabled = index >= N - 1;
            }
        }
        function animateTo(target, duration) {
            cancelAnimationFrame(anim);
            target = clamp(target, 0, N - 1);
            const from = pos,
                delta = target - from;
            if (Math.abs(delta) < 0.0005) {
                pos = target;
                render();
                return;
            }
            const dur = duration || (reduced ? 190 : clamp(360 + Math.abs(delta) * 150, 360, 620));
            const t0 = performance.now();
            (function step(now) {
                const t = clamp((now - t0) / dur, 0, 1);
                pos = from + delta * (1 - Math.pow(1 - t, 3)); /* easeOutCubic */
                render();
                if (t < 1) anim = requestAnimationFrame(step);
            })(t0);
        }
        const go = (s) => animateTo(clamp(Math.round(pos) + s, 0, N - 1));
        /* --- Arrastre (dedo, lápiz y mouse) --------------------------------- */
        let drag = null,
            lastEnd = 0;
        const justDragged = () => performance.now() - lastEnd < 260;
        rail.addEventListener("pointerdown", (e) => {
            if (e.pointerType === "mouse" && e.button !== 0) return;
            cancelAnimationFrame(anim);
            drag = {
                id: e.pointerId,
                x0: e.clientX,
                y0: e.clientY,
                pos0: pos,
                moved: false,
                samples: [{ t: performance.now(), x: e.clientX }]
            };
            try {
                rail.setPointerCapture(e.pointerId);
            } catch (_) {}
        });
        rail.addEventListener("pointermove", (e) => {
            if (!drag || e.pointerId !== drag.id) return;
            const dx = e.clientX - drag.x0,
                dy = e.clientY - drag.y0;
            if (!drag.moved) {
                if (Math.abs(dx) < 5) {
                    if (Math.abs(dy) > 12) endDrag();
                    return;
                }
                drag.moved = true;
                rail.classList.add("is-dragging");
            }
            drag.samples.push({ t: performance.now(), x: e.clientX });
            if (drag.samples.length > 6) drag.samples.shift();
            let p = drag.pos0 - dx / cfg.dragPx;
            if (p < 0) p = p * 0.34; /* resistencia elástica */
            else if (p > N - 1) p = N - 1 + (p - (N - 1)) * 0.34;
            pos = p;
            render();
            if (e.cancelable) e.preventDefault();
        });
        function endDrag() {
            if (!drag) return;
            const d = drag;
            drag = null;
            rail.classList.remove("is-dragging");
            try {
                rail.releasePointerCapture(d.id);
            } catch (_) {}
            if (!d.moved) return;
            lastEnd = performance.now();
            const s = d.samples,
                last = s[s.length - 1];
            let first = s[0];
            for (let k = s.length - 1; k >= 0; k--) {
                first = s[k];
                if (last.t - s[k].t >= 90) break;
            }
            const dt = Math.max(8, last.t - first.t);
            const vPos = -((last.x - first.x) / dt) / cfg.dragPx;
            const momentum = clamp(vPos * (reduced ? 60 : 150), -0.7, 0.7);
            const near = Math.round(pos);
            animateTo(clamp(clamp(Math.round(pos + momentum), near - 1, near + 1), 0, N - 1));
        }
        rail.addEventListener("pointerup", endDrag);
        rail.addEventListener("pointercancel", endDrag);
        rail.addEventListener("lostpointercapture", endDrag);
        /* --- Rueda horizontal y trackpad ------------------------------------ */
        let wAcc = 0,
            wLock = false;
        rail.addEventListener(
            "wheel",
            (e) => {
                const dx = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.shiftKey ? e.deltaY : 0;
                if (!dx) return;
                e.preventDefault();
                if (wLock) return;
                wAcc += dx;
                if (Math.abs(wAcc) > 42) {
                    go(wAcc > 0 ? 1 : -1);
                    wAcc = 0;
                    wLock = true;
                    setTimeout(() => {
                        wLock = false;
                    }, 430);
                }
            },
            { passive: false }
        );
        /* --- Teclado --------------------------------------------------------- */
        rail.addEventListener("keydown", (e) => {
            if (e.key === "ArrowLeft") {
                e.preventDefault();
                go(-1);
            } else if (e.key === "ArrowRight") {
                e.preventDefault();
                go(1);
            } else if (e.key === "Home") {
                e.preventDefault();
                animateTo(0);
            } else if (e.key === "End") {
                e.preventDefault();
                animateTo(N - 1);
            }
        });
        if (btnPrev) btnPrev.addEventListener("click", () => go(-1));
        if (btnNext) btnNext.addEventListener("click", () => go(1));
        let rz = 0;
        const relayout = () => {
            clearTimeout(rz);
            rz = setTimeout(() => {
                readCfg();
                render();
            }, 90);
        };
        window.addEventListener("resize", relayout);
        window.addEventListener("orientationchange", relayout);
        readCfg();
        /* entrada suave la primera vez que aparece en pantalla */
        if ("IntersectionObserver" in window && !reduced) {
            pos = -0.9;
            render();
            const io = new IntersectionObserver(
                (es) => {
                    es.forEach((e) => {
                        if (e.isIntersecting) {
                            io.disconnect();
                            animateTo(0, 950);
                        }
                    });
                },
                { threshold: 0.25 }
            );
            io.observe(rail);
        } else {
            render();
        }
    })();
    /* ============= 7. LISTADO DE FECHAS Y GRILLA DEL EQUIPO ================ */
    (function renderLists() {
        const list = $("#datesList");
        if (list) {
            list.innerHTML = FECHAS.map(
                (d, i) =>
                    '<div class="' +
                    (d.soon ? "date-row date-row--soon" : "date-row") +
                    '">' +
                    '<span class="date-row__n">' +
                    String(i + 1).padStart(2, "0") +
                    "</span>" +
                    '<span class="date-row__d">' +
                    d.dateShort +
                    "</span>" +
                    '<span class="date-row__t">' +
                    d.title +
                    "<small>" +
                    d.location +
                    " · " +
                    d.venue +
                    "</small></span>" +
                    '<span class="date-row__p">' +
                    (d.people || "") +
                    "</span>" +
                    "</div>"
            ).join("");
        }
        const team = $("#teamGrid");
        if (team) {
            team.innerHTML = EQUIPO.map(
                (m, i) =>
                    '<article class="member reveal" data-delay="' +
                    (i % 4) +
                    '">' +
                    '<div class="member__ph"><img src="' +
                    m.photo +
                    '" alt="Retrato de ' +
                    m.name +
                    '" loading="lazy" decoding="async"></div>' +
                    '<h3 class="member__name">' +
                    m.name +
                    "</h3>" +
                    '<p class="member__role">' +
                    m.role +
                    "</p>" +
                    '<p class="member__org">' +
                    m.org +
                    "</p>" +
                    '<p class="member__bio">' +
                    m.bio +
                    "</p>" +
                    '<ul class="skills">' +
                    m.skills.map((s) => "<li>" + s + "</li>").join("") +
                    "</ul>" +
                    "</article>"
            ).join("");
            /* las tarjetas se crean después del observador inicial: se observan aquí */
            if ("IntersectionObserver" in window && !reduced) {
                const io = new IntersectionObserver(
                    (es) => {
                        es.forEach((e) => {
                            if (e.isIntersecting) {
                                e.target.classList.add("is-in");
                                io.unobserve(e.target);
                            }
                        });
                    },
                    { threshold: 0.14 }
                );
                $$(".member", team).forEach((el) => io.observe(el));
            } else {
                $$(".member", team).forEach((el) => el.classList.add("is-in"));
            }
        }
    })();
})();
