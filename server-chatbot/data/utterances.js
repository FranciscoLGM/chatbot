const utterances = [
  // Saludos
  { text: "Hola, ¿cómo andás?", intent: "saludo" },
  { text: "¡Saludos!", intent: "saludo" },
  { text: "¿Qué tal?", intent: "saludo" },
  { text: "Buenos días", intent: "saludo" },
  { text: "Buenas tardes", intent: "saludo" },
  { text: "Buenas noches", intent: "saludo" },
  { text: "Hola, ¿qué hay de nuevo?", intent: "saludo" },
  { text: "¡Hola! ¿Cómo va todo?", intent: "saludo" },
  { text: "¿Cómo estás hoy?", intent: "saludo" },

  // Mostrar menú
  { text: "¿Cuál es el menú?", intent: "mostrar_menu" },
  { text: "Mostrame el menú, por favor.", intent: "mostrar_menu" },
  { text: "¿Qué platos tienen hoy?", intent: "mostrar_menu" },
  { text: "¿Qué hay para comer?", intent: "mostrar_menu" },
  { text: "¿Me podés mostrar el menú?", intent: "mostrar_menu" },
  { text: "¿Qué opciones de sushi tienen?", intent: "mostrar_menu" },
  { text: "¿Tienen algún plato especial hoy?", intent: "mostrar_menu" },
  { text: "¿Qué me recomendás del menú?", intent: "mostrar_menu" },
  { text: "¿Tienen opciones vegetarianas en el menú?", intent: "mostrar_menu" },

  // Tomar pedido
  { text: "Quiero hacer un pedido.", intent: "tomar_pedido" },
  { text: "Me gustaría pedir sushi.", intent: "tomar_pedido" },
  { text: "Quiero ordenar un rollo de atún.", intent: "tomar_pedido" },
  { text: "¿Puedo pedir algo?", intent: "tomar_pedido" },
  { text: "Me gustaría ordenar un plato.", intent: "tomar_pedido" },
  { text: "Quiero pedir para llevar.", intent: "tomar_pedido" },
  { text: "¿Puedo hacer un pedido de sushi?", intent: "tomar_pedido" },
  {
    text: "Estoy buscando algo rico, ¿qué me recomendás?",
    intent: "tomar_pedido",
  },
  { text: "¿Tienen alguna oferta en sushi hoy?", intent: "tomar_pedido" },
  {
    text: "Quiero pedir un sushi para llevar, por favor.",
    intent: "tomar_pedido",
  },
  {
    text: "¿Puedo ordenar un plato de sushi para la cena?",
    intent: "tomar_pedido",
  },

  // Preguntar horarios
  { text: "¿Están abiertos?", intent: "preguntar_horarios" },
  { text: "¿A qué hora abren?", intent: "preguntar_horarios" },
  { text: "¿Cuáles son sus horarios?", intent: "preguntar_horarios" },
  { text: "¿A qué hora cierran hoy?", intent: "preguntar_horarios" },
  { text: "¿Cuándo abren?", intent: "preguntar_horarios" },
  { text: "¿Están abiertos ahora mismo?", intent: "preguntar_horarios" },
  {
    text: "¿Cuáles son los horarios de apertura?",
    intent: "preguntar_horarios",
  },
  { text: "¿A qué hora cierran normalmente?", intent: "preguntar_horarios" },

  // Preguntar ubicación
  { text: "¿Dónde están ubicados?", intent: "preguntar_ubicacion" },
  { text: "¿Cuál es su dirección?", intent: "preguntar_ubicacion" },
  { text: "¿Dónde los puedo encontrar?", intent: "preguntar_ubicacion" },
  { text: "¿En qué calle están?", intent: "preguntar_ubicacion" },
  { text: "¿Cómo llego a su restaurante?", intent: "preguntar_ubicacion" },
  { text: "¿Tienen un mapa de su ubicación?", intent: "preguntar_ubicacion" },

  // Agradecimiento
  { text: "Gracias", intent: "agradecimiento" },
  { text: "Muchas gracias", intent: "agradecimiento" },
  { text: "Te agradezco mucho.", intent: "agradecimiento" },
  { text: "Gracias por la información.", intent: "agradecimiento" },
  { text: "¡Gracias, eso es útil!", intent: "agradecimiento" },
  { text: "Aprecio tu ayuda.", intent: "agradecimiento" },
  { text: "¡Sos muy amable, gracias!", intent: "agradecimiento" },

  // Despedida
  { text: "Adiós", intent: "despedida" },
  { text: "Hasta luego", intent: "despedida" },
  { text: "Nos vemos", intent: "despedida" },
  { text: "Hasta pronto", intent: "despedida" },
  { text: "Cuídense", intent: "despedida" },
  { text: "Que tengan un buen día", intent: "despedida" },

  // Preguntar promociones
  { text: "¿Tienen alguna promoción hoy?", intent: "preguntar_promociones" },
  { text: "¿Hay descuentos disponibles?", intent: "preguntar_promociones" },
  { text: "¿Tienen ofertas especiales?", intent: "preguntar_promociones" },
  {
    text: "¿Qué promociones tienen actualmente?",
    intent: "preguntar_promociones",
  },
  { text: "¿Hay alguna oferta para grupos?", intent: "preguntar_promociones" },

  // Reservar mesa
  { text: "Quiero reservar una mesa", intent: "reservar_mesa" },
  { text: "¿Puedo hacer una reserva?", intent: "reservar_mesa" },
  { text: "Necesito una mesa para dos", intent: "reservar_mesa" },
  { text: "Quiero reservar una mesa para cuatro", intent: "reservar_mesa" },
  { text: "¿Tienen disponibilidad para esta noche?", intent: "reservar_mesa" },
  { text: "¿Puedo reservar una mesa con antelación?", intent: "reservar_mesa" },
  {
    text: "¿Es posible reservar para un evento especial?",
    intent: "reservar_mesa",
  },

  // Preguntar entrega
  { text: "¿Hacen entregas a domicilio?", intent: "preguntar_entrega" },
  { text: "¿Tienen servicio de delivery?", intent: "preguntar_entrega" },
  { text: "¿Puedo pedir para llevar?", intent: "preguntar_entrega" },
  { text: "¿Tienen servicio de entrega?", intent: "preguntar_entrega" },
  { text: "¿Puedo ordenar para entrega?", intent: "preguntar_entrega" },
  { text: "¿Cuánto tardan en entregar?", intent: "preguntar_entrega" },

  // Preguntar alergias
  { text: "¿Tienen opciones sin gluten?", intent: "preguntar_alergias" },
  { text: "¿Tienen alguna opción sin mariscos?", intent: "preguntar_alergias" },
  { text: "¿Tienen platos vegetarianos?", intent: "preguntar_alergias" },
  {
    text: "¿Hay opciones para personas alérgicas?",
    intent: "preguntar_alergias",
  },
  {
    text: "¿Pueden adaptar los platos para alergias?",
    intent: "preguntar_alergias",
  },

  // Preguntar historia
  { text: "¿Cuándo se fundó el restaurante?", intent: "preguntar_historia" },
  {
    text: "¿Cuál es la historia detrás de este lugar?",
    intent: "preguntar_historia",
  },
  { text: "¿Cómo comenzó este restaurante?", intent: "preguntar_historia" },
  {
    text: "¿Qué me podés contar sobre la historia del lugar?",
    intent: "preguntar_historia",
  },
  { text: "¿Quiénes son los fundadores?", intent: "preguntar_historia" },

  // Preguntar chef
  { text: "¿Quién es el chef?", intent: "preguntar_chef" },
  { text: "¿Qué experiencia tiene el chef?", intent: "preguntar_chef" },
  { text: "¿Quién cocina aquí?", intent: "preguntar_chef" },
  { text: "¿El chef tiene alguna especialidad?", intent: "preguntar_chef" },
  {
    text: "¿Qué platos son la especialidad del chef?",
    intent: "preguntar_chef",
  },

  // Preguntar pago
  { text: "¿Qué métodos de pago aceptan?", intent: "preguntar_pago" },
  { text: "¿Puedo pagar con tarjeta?", intent: "preguntar_pago" },
  { text: "¿Aceptan efectivo?", intent: "preguntar_pago" },
  { text: "¿Qué formas de pago tienen?", intent: "preguntar_pago" },
  { text: "¿Puedo pagar con mi tarjeta de débito?", intent: "preguntar_pago" },
  { text: "¿Aceptan pagos móviles?", intent: "preguntar_pago" },

  // Preguntar recomendaciones
  { text: "¿Qué me recomendás?", intent: "preguntar_recomendaciones" },
  {
    text: "¿Cuál es el plato más popular?",
    intent: "preguntar_recomendaciones",
  },
  { text: "¿Qué sushi es el mejor?", intent: "preguntar_recomendaciones" },
  {
    text: "¿Tienen alguna recomendación especial?",
    intent: "preguntar_recomendaciones",
  },
  { text: "¿Cuál es su plato estrella?", intent: "preguntar_recomendaciones" },

  // Preguntar eventos
  { text: "¿Tienen eventos especiales?", intent: "preguntar_eventos" },
  {
    text: "¿Hacen algo especial para cumpleaños?",
    intent: "preguntar_eventos",
  },
  { text: "¿Tienen noches temáticas?", intent: "preguntar_eventos" },
  { text: "¿Ofrecen eventos privados?", intent: "preguntar_eventos" },
  {
    text: "¿Tienen algún evento programado para esta semana?",
    intent: "preguntar_eventos",
  },

  // Preguntar catering
  { text: "¿Ofrecen servicio de catering?", intent: "preguntar_catering" },
  {
    text: "Quiero saber sobre catering para eventos",
    intent: "preguntar_catering",
  },
  { text: "¿Pueden atender eventos grandes?", intent: "preguntar_catering" },
  {
    text: "¿Tienen opciones de catering para empresas?",
    intent: "preguntar_catering",
  },
  {
    text: "¿Qué tipo de menús ofrecen para catering?",
    intent: "preguntar_catering",
  },
];

export default utterances;
