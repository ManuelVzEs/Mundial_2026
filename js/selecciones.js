const teams = [
  { name: 'Canadá', flag: '🇨🇦', group: 'A', ranking: '14° FIFA', history: 'Anfitrión con una generación joven y dinámica que quiere aprovechar el apoyo local.', pros: ['Activa presión ofensiva', 'Estadio en casa'], cons: ['Menos experiencia histórica', 'Presión por expectativas'], coach: 'John Herdman', stadium: 'BC Place, Vancouver', map: 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('BC Place Vancouver') },
  { name: 'México', flag: '🇲🇽', group: 'A', ranking: '12° FIFA', history: 'Selección con tradición mundialista y uno de los equipos más populares de la región.', pros: ['Afición numerosa', 'Buen nivel técnico'], cons: ['Presión en cada partido', 'Dependencia de su ataque'], coach: 'Diego López', stadium: 'Estadio Azteca, Ciudad de México', map: 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('Estadio Azteca Mexico City') },
  { name: 'Irán', flag: '🇮🇷', group: 'A', ranking: '24° FIFA', history: 'Equipo táctico con defensas fuertes y aspiraciones de dejar huella en Norteamérica.', pros: ['Organización defensiva', 'Físico sólido'], cons: ['Juego creativo limitado', 'Presión ante rivales europeos'], coach: 'Carlos Queiroz', stadium: 'Estadio Azadi, Teherán', map: 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('Azadi Stadium Tehran') },
  { name: 'Costa Rica', flag: '🇨🇷', group: 'A', ranking: '32° FIFA', history: 'Clásico centroamericano con experiencia mundialista y estilo veloz en transición.', pros: ['Contraataque veloz', 'Juego colectivo'], cons: ['Menos profundidad de plantilla', 'Presión alta en defensa'], coach: 'Rónald González', stadium: 'Estadio Nacional, San José', map: 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('Estadio Nacional Costa Rica') },
  { name: 'Estados Unidos', flag: '🇺🇸', group: 'B', ranking: '11° FIFA', history: 'Anfitrión con nueva generación y aspiraciones de avanzar hasta las rondas finales.', pros: ['Atletismo y velocidad', 'Base de jugadores en Europa'], cons: ['Inconstancia en torneos', 'Poca experiencia en semifinales'], coach: 'Gregg Berhalter', stadium: 'Lumen Field, Seattle', map: 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('Lumen Field Seattle') },
  { name: 'Inglaterra', flag: '🏴', group: 'B', ranking: '5° FIFA', history: 'Candidato tradicional que busca conquistar su primer título mundial en décadas.', pros: ['Talento ofensivo', 'Profundidad de plantilla'], cons: ['Presión mediática', 'Rivales de alto nivel en fase de grupos'], coach: 'Gareth Southgate', stadium: 'Wembley Stadium, Londres', map: 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('Wembley Stadium London') },
  { name: 'Marruecos', flag: '🇲🇦', group: 'B', ranking: '9° FIFA', history: 'Subcampeón africano con historial sólido en mundiales recientes y defensa compacta.', pros: ['Defensa organizada', 'Entrenador táctico'], cons: ['Presión en ataque', 'Alta exigencia física'], coach: 'Walid Regragui', stadium: 'Stade Mohammed V, Casablanca', map: 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('Stade Mohammed V Casablanca') },
  { name: 'Japón', flag: '🇯🇵', group: 'B', ranking: '22° FIFA', history: 'Equipo rápido y con excelente condición física, que juega muy bien en espacios largos.', pros: ['Velocidad y orden', 'Entrenador disciplinado'], cons: ['Menos presencia física', 'Poca altura en el ataque'], coach: 'Hajime Moriyasu', stadium: 'Sapporo Dome, Sapporo', map: 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('Sapporo Dome Japan') },
  { name: 'Brasil', flag: '🇧🇷', group: 'C', ranking: '2° FIFA', history: 'Tricampeón mundial y siempre favorito gracias a su ataque creativo y talento individual.', pros: ['Talento ofensivo', 'Experiencia mundial'], cons: ['Exigencia de resultados', 'Rivales muy duros'], coach: 'Luiz Fernando', stadium: 'Maracaná, Río de Janeiro', map: 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('Maracana Stadium Rio de Janeiro') },
  { name: 'Francia', flag: '🇫🇷', group: 'C', ranking: '3° FIFA', history: 'Campeón vigente con mezcla de juventud y experiencia, aspirando a retener el título.', pros: ['Ataque versátil', 'Plantilla profunda'], cons: ['Presión de favoritismo', 'Lesiones pueden afectar'], coach: 'Didier Deschamps', stadium: 'Stade de France, Saint-Denis', map: 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('Stade de France') },
  { name: 'Australia', flag: '🇦🇺', group: 'C', ranking: '23° FIFA', history: 'Equipo combativo con historia de sorprender a grandes selecciones en torneos importantes.', pros: ['Físico fuerte', 'Resistencia alta'], cons: ['Menos talento individual', 'Grupo exigente'], coach: 'Graham Arnold', stadium: 'ANZ Stadium, Sídney', map: 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('ANZ Stadium Sydney') },
  { name: 'Uruguay', flag: '🇺🇾', group: 'C', ranking: '15° FIFA', history: 'Seleccion compacta y con futbolistas de experiencia de élite en Europa.', pros: ['Competitividad', 'Buena defensa'], cons: ['Base de jugadores veteranos', 'Presión por rendimiento'], coach: 'Óscar Tabárez', stadium: 'Estadio Centenario, Montevideo', map: 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('Estadio Centenario Montevideo') },
  { name: 'Argentina', flag: '🇦🇷', group: 'D', ranking: '1° FIFA', history: 'Gran campeón vigente con Lionel Messi como eje clave en el ataque.', pros: ['Creatividad ofensiva', 'Experiencia en finales'], cons: ['Dependencia de figuras', 'Presión de la historia'], coach: 'Lionel Scaloni', stadium: 'Estadio Monumental, Buenos Aires', map: 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('Estadio Monumental Buenos Aires') },
  { name: 'España', flag: '🇪🇸', group: 'D', ranking: '6° FIFA', history: 'Buscará regresar a la élite con su estilo basado en posesión y control.', pros: ['Juego de pase', 'Jóvenes promesas'], cons: ['Presión por crear ocasiones', 'Ritmo de grupo físico'], coach: 'Luis de la Fuente', stadium: 'Santiago Bernabéu, Madrid', map: 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('Santiago Bernabeu Madrid') },
  { name: 'Corea del Sur', flag: '🇰🇷', group: 'D', ranking: '28° FIFA', history: 'Equipo rápido y disciplinado, tradicionalmente difícil de vencer en mundiales.', pros: ['Velocidad en transición', 'Excelencia física'], cons: ['Menos peso ofensivo', 'Falta de experiencia en semis'], coach: 'Paulo Bento', stadium: 'Estadio de Seúl, Seúl', map: 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('Seoul World Cup Stadium') },
  { name: 'Ghana', flag: '🇬🇭', group: 'D', ranking: '34° FIFA', history: 'Selección africana con historia de fuertes actuaciones en torneos internacionales.', pros: ['Poder físico', 'Experiencia africana'], cons: ['Inconstancia con el balón', 'Rivales técnicos fuertes'], coach: 'Chris Hughton', stadium: 'Accra Sports Stadium, Acra', map: 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('Accra Sports Stadium') },
  { name: 'Alemania', flag: '🇩🇪', group: 'E', ranking: '4° FIFA', history: 'Histórica selección europea siempre entre los favoritos por su solidez y disciplina.', pros: ['Tactica organizada', 'Juventud talentosa'], cons: ['Presión por resultados', 'Ajuste entre generaciones'], coach: 'Julian Nagelsmann', stadium: 'Allianz Arena, Múnich', map: 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('Allianz Arena Munich') },
  { name: 'Portugal', flag: '🇵🇹', group: 'E', ranking: '7° FIFA', history: 'Equipo con talento técnico y efectividad en ataque, con visión de título.', pros: ['Ataque creativo', 'Experiencia internacional'], cons: ['Dependencia de estrellas', 'Rivales muy duros'], coach: 'Roberto Martínez', stadium: 'Estádio da Luz, Lisboa', map: 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('Estadio da Luz Lisbon') },
  { name: 'Nigeria', flag: '🇳🇬', group: 'E', ranking: '25° FIFA', history: 'Una de las selecciones africanas más reconocidas con ritmo y talento dinámico.', pros: ['Velocidad y energía', 'Contraataque agresivo'], cons: ['Defensiva inestable', 'Presión de los grandes grupos'], coach: 'Jose Peseiro', stadium: 'Estadio Nacional, Abuja', map: 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('National Stadium Abuja') },
  { name: 'Egipto', flag: '🇪🇬', group: 'E', ranking: '35° FIFA', history: 'Equipo con experiencia continental y jugadores clave en Europa.', pros: ['Control del balón', 'Líderes con experiencia'], cons: ['Altos en edad promedio', 'Menos ritmo físico'], coach: 'Carlos Queiroz', stadium: 'Cairo International Stadium, El Cairo', map: 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('Cairo International Stadium') },
  { name: 'Países Bajos', flag: '🇳🇱', group: 'F', ranking: '8° FIFA', history: 'Organización ofensiva y estilo moderno que siempre compiten en instancias finales.', pros: ['Juego creativo', 'Generación talentosa'], cons: ['Presión pública intensa', 'Lesiones pueden afectar'], coach: 'Ronald Koeman', stadium: 'Johan Cruijff Arena, Ámsterdam', map: 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('Johan Cruijff Arena Amsterdam') },
  { name: 'Bélgica', flag: '🇧🇪', group: 'F', ranking: '13° FIFA', history: 'Generación dorada que aún busca su gran torneo tras varios fracasos recientes.', pros: ['Talento individual', 'Jugadores de elite'], cons: ['Incertidumbre en renovación', 'Alta expectativa'], coach: 'Roberto Martínez', stadium: 'King Baudouin Stadium, Bruselas', map: 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('King Baudouin Stadium Brussels') },
  { name: 'Chile', flag: '🇨🇱', group: 'F', ranking: '20° FIFA', history: 'Equipo sudamericano con un estilo combativo y buenos mediocampistas.', pros: ['Presión en mediocampo', 'Experiencia en Copa América'], cons: ['Menos brillo ofensivo', 'Juego físico exigente'], coach: 'Jesús Pérez', stadium: 'Estadio Nacional, Santiago', map: 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('Estadio Nacional Santiago') },
  { name: 'Qatar', flag: '🇶🇦', group: 'F', ranking: '29° FIFA', history: 'Anfitrión de la edición anterior que quiere consolidar su crecimiento futbolístico.', pros: ['Organización táctica', 'Estabilidad en el equipo'], cons: ['Menos experiencia internacional', 'Presión para avanzar'], coach: 'Felix Sanchez', stadium: 'Estadio Internacional Khalifa, Doha', map: 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('Khalifa International Stadium Doha') },
  { name: 'Suiza', flag: '🇨🇭', group: 'G', ranking: '16° FIFA', history: 'Regular en mundiales, reconocida por su orden defensivo y transiciones rápidas.', pros: ['Disciplina táctica', 'Buen bloque defensivo'], cons: ['Menos gol', 'Rivales con ataque superior'], coach: 'Murthy Rangachari', stadium: 'St. Jakob-Park, Basilea', map: 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('St Jakob Park Basel') },
  { name: 'Dinamarca', flag: '🇩🇰', group: 'G', ranking: '17° FIFA', history: 'Equipo con mentalidad fuerte y gran cohesión, capaz de competir sin estrellas excesivas.', pros: ['Orgullo colectivo', 'Fuerte posicionamiento'], cons: ['Poco talento individual', 'Menos creatividad'], coach: 'Kaspar Hjulmand', stadium: 'Parken Stadium, Copenhague', map: 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('Parken Stadium Copenhagen') },
  { name: 'Senegal', flag: '🇸🇳', group: 'G', ranking: '21° FIFA', history: 'Una de las grandes fuerzas africanas con ritmo físico y talento ofensivo.', pros: ['Atlético y fuerte', 'Jugadores en ligas top'], cons: ['Inconstancia táctica', 'Presión alta en grupo'], coach: 'Aliou Cissé', stadium: 'Stade Léopold Sédar Senghor, Dakar', map: 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('Stade Leopold Sedar Senghor Dakar') },
  { name: 'Ecuador', flag: '🇪🇨', group: 'G', ranking: '19° FIFA', history: 'Selección suramericana emergente con gran potencial y jóvenes promesas.', pros: ['Velocidad por bandas', 'Capacidad física'], cons: ['Menos experiencia en fases finales', 'Presión en defensa'], coach: 'Jorge Célico', stadium: 'Estadio Rodrigo Paz Delgado, Quito', map: 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('Estadio Rodrigo Paz Delgado Quito') },
  { name: 'Croacia', flag: '🇭🇷', group: 'H', ranking: '10° FIFA', history: 'Subcampeón 2018 con una mezcla de experiencia técnica y gran organización.', pros: ['Creatividad en mediocampo', 'Experiencia internacional'], cons: ['Promedio de edad alto', 'Dependencia de figuras'], coach: 'Zlatko Dalić', stadium: 'Stadion Poljud, Split', map: 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('Stadion Poljud Split') },
  { name: 'Serbia', flag: '🇷🇸', group: 'H', ranking: '27° FIFA', history: 'Equipo europeo con talento en ataque y aspiraciones de avanzar a octavos.', pros: ['Delanteros habilidosos', 'Juego directo'], cons: ['Defensa vulnerable', 'Menos equilibrio de plantilla'], coach: 'Dragan Stojković', stadium: 'Stadion Rajko Mitić, Belgrado', map: 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('Stadion Rajko Mitic Belgrade') },
  { name: 'Camerún', flag: '🇨🇲', group: 'H', ranking: '33° FIFA', history: 'Tradición africana con fuerte presencia física y jugadores visibles en Europa.', pros: ['Fuerza y velocidad', 'Competencia continental'], cons: ['Agresividad puede dejar espacios', 'Menos precisión'], coach: 'Rigobert Song', stadium: 'Stade Ahmadou Ahidjo, Yaundé', map: 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('Ahmadou Ahidjo Stadium Yaounde') },
  { name: 'Arabia Saudita', flag: '🇸🇦', group: 'H', ranking: '31° FIFA', history: 'Selección en crecimiento con inversión técnica y jugadores destacados en ligas internacionales.', pros: ['Organización defensiva', 'Rapidez en contraataques'], cons: ['Menos gol consistente', 'Menos experiencia en semifinales'], coach: 'Herve Renard', stadium: 'King Fahd International Stadium, Riad', map: 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('King Fahd International Stadium Riyadh') },
  { name: 'Colombia', flag: '🇨🇴', group: 'I', ranking: '18° FIFA', history: 'Selección sudamericana con técnica y buen manejo del balón en el medio campo.', pros: ['Creatividad ofensiva', 'Jugadores habilidosos'], cons: ['Inconstancia defensiva', 'Presión en partidos cerrados'], coach: 'Néstor Lorenzo', stadium: 'Estadio Metropolitano, Barranquilla', map: 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('Estadio Metropolitano Barranquilla') },
  { name: 'Perú', flag: '🇵🇪', group: 'I', ranking: '30° FIFA', history: 'Equipo histórico de Sudamérica con fortaleza en bloques bajos y contraataques.', pros: ['Defensa ordenada', 'Experiencia en eliminatorias'], cons: ['Menos gol', 'Presión de ritmo elevado'], coach: 'Ricardo Gareca', stadium: 'Estadio Nacional, Lima', map: 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('Estadio Nacional Lima') },
  { name: 'Turquía', flag: '🇹🇷', group: 'I', ranking: '26° FIFA', history: 'Selección europea con gran fuerza en ataque y momentos decisivos.', pros: ['Aire ofensivo', 'Jugador con calidad en ataque'], cons: ['Defensa susceptible', 'Inconstancia'] , coach: 'Şenol Güneş', stadium: 'Atatürk Olimpiyat Stadyumu, Estambul', map: 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('Ataturk Olympic Stadium Istanbul') },
  { name: 'Gales', flag: '🏴', group: 'I', ranking: '23° FIFA', history: 'Pequeña selección británica con jugadores de alto nivel y buena cohesión.', pros: ['Juego posicional', 'Unidad de equipo'], cons: ['Menos plantilla profunda', 'Poca experiencia en semifinales'], coach: 'Rob Page', stadium: 'Principality Stadium, Cardiff', map: 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('Principality Stadium Cardiff') },
  { name: 'Polonia', flag: '🇵🇱', group: 'J', ranking: '12° FIFA', history: 'Toque ofensivo con delanteros potentes y sólida trayectoria en Europa.', pros: ['Delanteros de área', 'Juego directo'], cons: ['Ritmo físico variable', 'Defensa puede flaquear'], coach: 'Czesław Michniewicz', stadium: 'Stadion Narodowy, Varsovia', map: 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('National Stadium Warsaw') },
  { name: 'Túnez', flag: '🇹🇳', group: 'J', ranking: '36° FIFA', history: 'Tradición africana con buena disciplina táctica y fortaleza defensiva.', pros: ['Orden defensivo', 'Experiencia en mundiales'], cons: ['Menos creatividad', 'Presión con grandes rivales'], coach: 'Mondher Kebaier', stadium: 'Stade Olympique Hammadi Agrebi, Túnez', map: 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('Hammadi Agrebi Stadium Tunis') },
  { name: 'Sudáfrica', flag: '🇿🇦', group: 'J', ranking: '38° FIFA', history: 'Equipo africano emergente con futbolistas técnicos y proyección para el futuro.', pros: ['Talento emergente', 'Buena construcción de juego'], cons: ['Menos experiencia mayor', 'Grupo complicado'], coach: 'Stuart Baxter', stadium: 'FNB Stadium, Johannesburgo', map: 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('FNB Stadium Johannesburg') },
  { name: 'Venezuela', flag: '🇻🇪', group: 'J', ranking: '39° FIFA', history: 'Selección sudamericana en crecimiento con jóvenes jugadores en Europa.', pros: ['Jóvenes con proyección', 'Gol rápido'], cons: ['Defensa débil', 'Menos experiencia en torneos grandes'], coach: 'José Peseiro', stadium: 'Estadio Olímpico, Caracas', map: 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('Estadio Olimpico Caracas') },
  { name: 'Austria', flag: '🇦🇹', group: 'K', ranking: '33° FIFA', history: 'Seleccion europea competitiva con buen rendimiento en eliminatorias.', pros: ['Juego colectivo', 'Estabilidad táctica'], cons: ['Menos brillo individual', 'Presión en ataque'], coach: 'Ralf Rangnick', stadium: 'Ernst-Happel-Stadion, Viena', map: 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('Ernst Happel Stadium Vienna') },
  { name: 'Noruega', flag: '🇳🇴', group: 'K', ranking: '18° FIFA', history: 'Selección con jóvenes estrellas y gran potencial ofensivo.', pros: ['Ataque rápido', 'Talentos jóvenes'], cons: ['Defensa frágil', 'Poca experiencia colectiva'], coach: 'Ståle Solbakken', stadium: 'Ullevaal Stadion, Oslo', map: 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('Ullevaal Stadion Oslo') },
  { name: 'Jamaica', flag: '🇯🇲', group: 'K', ranking: '40° FIFA', history: 'Equipo caribeño con ritmo físico y contraataques peligrosos.', pros: ['Velocidad por bandas', 'Motor físico'], cons: ['Menos posesión', 'Rivales con mayor calidad técnica'], coach: 'Heimir Hallgrímsson', stadium: 'National Stadium, Kingston', map: 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('National Stadium Kingston') },
  { name: 'Panamá', flag: '🇵🇦', group: 'K', ranking: '43° FIFA', history: 'Selección centroamericana con ganas de competir frente a los mejores.', pros: ['Actitud combativa', 'Buen orden defensivo'], cons: ['Menos ofensiva', 'Poca profundidad'], coach: 'Thomas Christiansen', stadium: 'Estadio Rommel Fernández, Ciudad de Panamá', map: 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('Estadio Rommel Fernandez Panama City') },
  { name: 'Chequia', flag: '🇨🇿', group: 'L', ranking: '42° FIFA', history: 'Equipo europeo con tradición técnica y fuertes mediocampistas.', pros: ['Control de balón', 'Balance en el medio'], cons: ['Menos gol', 'Presión con jugadas rápidas'], coach: 'Jaroslav Šilhavý', stadium: 'Generali Arena, Praga', map: 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('Generali Arena Prague') },
  { name: 'Rumania', flag: '🇷🇴', group: 'L', ranking: '46° FIFA', history: 'Seleccion europea con combatividad y talento joven emergente.', pros: ['Actitud de equipo', 'Presión alta'], cons: ['Defensa irregular', 'Menos experiencia internacional'], coach: 'Edward Iordănescu', stadium: 'Stadionul Național, Bucarest', map: 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('National Stadium Bucharest') },
  { name: 'Costa de Marfil', flag: '🇨🇮', group: 'L', ranking: '29° FIFA', history: 'Potencia africana con gran talento ofensivo y jugadores de primer nivel.', pros: ['Velocidad y talento', 'Buena plantilla'], cons: ['Defensa laxa', 'Necesaria concentración total'], coach: 'Jean-Louis Gasset', stadium: 'Stade Félix Houphouët-Boigny, Abiyán', map: 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('Félix Houphouët-Boigny Stadium Abidjan') },
  { name: 'Nueva Zelanda', flag: '🇳🇿', group: 'L', ranking: '47° FIFA', history: 'Representante de Oceanía con disciplina táctica y gran espíritu colectivo.', pros: ['Organización defensiva', 'Fuerza física'], cons: ['Poca profundidad ofensiva', 'Presión ante equipos fuertes'], coach: 'Danny Hay', stadium: 'Eden Park, Auckland', map: 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('Eden Park Auckland') }
];

const searchInput = document.getElementById('searchInput');
const groupFilter = document.getElementById('groupFilter');
const teamsGrid = document.getElementById('teamsGrid');
const teamModal = document.getElementById('teamModal');
const modalClose = document.getElementById('modalClose');
const modalFlag = document.getElementById('modalFlag');
const modalTeamName = document.getElementById('modalTeamName');
const modalGroupBadge = document.getElementById('modalGroupBadge');
const modalRanking = document.getElementById('modalRanking');
const modalCoach = document.getElementById('modalCoach');
const modalGroup = document.getElementById('modalGroup');
const modalStadium = document.getElementById('modalStadium');
const modalHistory = document.getElementById('modalHistory');
const modalPros = document.getElementById('modalPros');
const modalCons = document.getElementById('modalCons');
const modalMapLink = document.getElementById('modalMapLink');

function init() {
  renderGroupFilter();
  renderTeams(teams);
  searchInput.addEventListener('input', updateTeamList);
  groupFilter.addEventListener('change', updateTeamList);
  modalClose.addEventListener('click', closeModal);
  teamModal.addEventListener('click', (event) => {
    if (event.target === teamModal) {
      closeModal();
    }
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeModal();
    }
  });
}

function renderGroupFilter() {
  const groups = Array.from(new Set(teams.map(team => team.group))).sort();
  groups.forEach((group) => {
    const option = document.createElement('option');
    option.value = group;
    option.textContent = 'Grupo ' + group;
    groupFilter.appendChild(option);
  });
}

function updateTeamList() {
  const searchValue = searchInput.value.toLowerCase().trim();
  const selectedGroup = groupFilter.value;

  const filteredTeams = teams.filter((team) => {
    const matchesName = team.name.toLowerCase().includes(searchValue);
    const matchesGroup = selectedGroup === 'all' || team.group === selectedGroup;
    return matchesName && matchesGroup;
  });

  renderTeams(filteredTeams);
}

function renderTeams(teamList) {
  teamsGrid.innerHTML = '';

  if (teamList.length === 0) {
    const noResult = document.createElement('div');
    noResult.className = 'no-results';
    noResult.textContent = 'No se encontró ninguna selección que coincida con la búsqueda.';
    teamsGrid.appendChild(noResult);
    return;
  }

  teamList.forEach((team) => {
    const card = document.createElement('button');
    card.type = 'button';
    card.className = 'team-card';
    card.innerHTML = `
      <div class="flag">${team.flag}</div>
      <div class="team-name">${team.name}</div>
      <div class="team-meta">
        <span>${team.ranking}</span>
        <span class="badge">Grupo ${team.group}</span>
      </div>
      <button class="cta" type="button">Ver ficha</button>
    `;

    card.addEventListener('click', () => openModal(team));
    teamsGrid.appendChild(card);
  });
}

function openModal(team) {
  modalFlag.textContent = team.flag;
  modalTeamName.textContent = team.name;
  modalGroupBadge.textContent = 'Grupo ' + team.group;
  modalRanking.textContent = team.ranking;
  modalCoach.textContent = team.coach;
  modalGroup.textContent = team.group;
  modalStadium.textContent = team.stadium;
  modalHistory.textContent = team.history;
  modalPros.innerHTML = team.pros.map(item => `<li>${item}</li>`).join('');
  modalCons.innerHTML = team.cons.map(item => `<li>${item}</li>`).join('');
  modalMapLink.href = team.map;
  teamModal.classList.add('active');
  teamModal.querySelector('.modal-box').focus();
}

function closeModal() {
  teamModal.classList.remove('active');
}

init();
