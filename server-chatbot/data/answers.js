const answers = [
  {
    intent: "saludo",
    response:
      "¡Hola! 😊 ¿Cómo andás? Estoy acá para ayudarte con lo que necesites. ¿Listo para una experiencia fabulosa?",
  },
  {
    intent: "saludo",
    response:
      "¡Buenas! 👋 ¿Cómo va eso? Estoy listo para asistirte. ¡Hablemos de sushi, porque el tiempo para charlar es sagrado!",
  },
  {
    intent: "saludo",
    response:
      "¡Hola! 😄 ¿Qué onda? Estoy acá para resolver tus dudas. ¡No hay pregunta que se me escape!",
  },
  {
    intent: "mostrar_menu",
    response:
      "¡Por supuesto! Acá tenés nuestro menú lleno de delicias 🍣. ¿Querés alguna recomendación o saber más sobre algún plato en particular?",
  },
  {
    intent: "mostrar_menu",
    response:
      "¡Claro! Este es nuestro menú 🍱. ¿Hay algo específico que te gustaría probar? No muerdo, ¡pero nuestro sushi es otra historia!",
  },
  {
    intent: "tomar_pedido",
    response:
      "¡Excelente elección! 🎉 ¿Qué te gustaría pedir? Contame qué se te antoja. Yo me antojo de tener clientes felices.",
  },
  {
    intent: "tomar_pedido",
    response:
      "¡Genial! 🍣 ¿Tenés algo en mente o necesitás recomendaciones? ¡Estoy lleno de ideas, y no solo de sushi!",
  },
  {
    intent: "preguntar_horarios",
    response:
      "Estamos abiertos todos los días de 12:00 PM a 10:00 PM. ¡Venite a disfrutar de una experiencia única! 🕛 Te prometo que no cerramos antes de tu llegada.",
  },
  {
    intent: "preguntar_horarios",
    response:
      "¡Estamos listos para recibirte de 12:00 PM a 10:00 PM! 🍣 ¡No te quedes con el antojo! ¿Quién podría resistirse?",
  },
  {
    intent: "preguntar_ubicacion",
    response:
      "Nos encontramos en la Calle Sushi, número 123. ¡Te esperamos con los brazos abiertos! 📍 Es fácil de encontrar, ¡solo sigue el aroma delicioso!",
  },
  {
    intent: "preguntar_ubicacion",
    response:
      "¡Estamos ubicados en la Calle Sushi, número 123! ¡Ven a visitarnos! 😊 Te recibiremos con una sonrisa y mucho sushi.",
  },
  {
    intent: "agradecimiento",
    response:
      "¡De nada! 😊 Si necesitás algo más o tenés alguna pregunta, no dudes en decírmelo. ¡Estoy aquí para ayudarte!",
  },
  {
    intent: "agradecimiento",
    response:
      "¡Con gusto! Si hay algo más en lo que pueda ayudarte, acá estoy. 🌟 ¿Quién dijo que un asistente no puede ser también un amigo?",
  },
  {
    intent: "despedida",
    response:
      "¡Hasta luego! 👋 Esperamos verte pronto y que disfrutes de tu experiencia con nosotros. ¡Nos vemos en tu próxima antojo de sushi!",
  },
  {
    intent: "despedida",
    response:
      "¡Chau! 😊 Que tengas un gran día y esperamos verte pronto. ¡Y recuerda, siempre es un buen momento para sushi!",
  },
  {
    intent: "preguntar_promociones",
    response:
      "¡Atención! 🎉 Actualmente tenemos una promo del 20% de descuento en pedidos para llevar. ¡No te lo pierdas! ¿Querés saber más sobre nuestros platos para llevar? Es la excusa perfecta para una fiesta de sushi en casa.",
  },
  {
    intent: "preguntar_promociones",
    response:
      "¡Genial! 🎊 Hay un 20% de descuento en pedidos para llevar. ¡Perfecto para disfrutar en casa! ¿Quién dijo que el sushi no va con sofá y pijama?",
  },
  {
    intent: "reservar_mesa",
    response:
      "Por supuesto, ¿para cuántas personas te gustaría reservar y a qué hora? 🕒 Estoy acá para ayudarte a asegurar tu mesa. ¡Lo difícil será decidir qué rollos probar primero!",
  },
  {
    intent: "reservar_mesa",
    response:
      "¡Claro! ¿Cuántas personas vienen y a qué hora te gustaría que te reservemos la mesa? 😊 ¡Ya me emociona imaginarte disfrutando del sushi!",
  },
  {
    intent: "preguntar_entrega",
    response:
      "Sí, ofrecemos servicio de delivery 🚚. ¿Te gustaría hacer un pedido ahora? ¡Estoy listo para ayudarte! ¿El sushi viene a ti, qué mejor?",
  },
  {
    intent: "preguntar_entrega",
    response:
      "¡Así es! Hacemos entregas a domicilio. 📦 ¿Querés que te ayude a realizar un pedido? ¡Prometo que el sushi llegará en perfectas condiciones!",
  },
  {
    intent: "preguntar_alergias",
    response:
      "Sí, tenemos opciones sin gluten y vegetarianas. 🌱 ¿Tenés alguna alergia o preferencia específica que debamos tener en cuenta? ¡Tu salud es lo primero, siempre!",
  },
  {
    intent: "preguntar_alergias",
    response:
      "¡Por supuesto! Contamos con opciones para personas con alergias. ¿Hay algo en particular que debamos saber? 🥗 ¡Queremos que disfrutes sin preocupaciones!",
  },
  {
    intent: "preguntar_historia",
    response:
      "Nuestro restaurante fue fundado en 2010 con la misión de ofrecer la mejor experiencia de sushi en la ciudad. ¡Te invitamos a conocer nuestra historia y disfrutar de nuestros platos! 📖 ¡Un viaje de sabor que comenzó hace años!",
  },
  {
    intent: "preguntar_historia",
    response:
      "Desde 2010, hemos estado dedicados a ofrecerte la mejor experiencia de sushi. ¡Ven y descubrí nuestra historia! 🍣 ¡Cada rollo tiene una historia y estamos ansiosos por compartirla contigo!",
  },
  {
    intent: "preguntar_chef",
    response:
      "Nuestro chef cuenta con más de 15 años de experiencia en la cocina japonesa y es famoso por sus deliciosos rolls especiales. 🍣 ¡Te van a encantar sus creaciones! Es como tener a un maestro del sushi en tu plato.",
  },
  {
    intent: "preguntar_chef",
    response:
      "¡Te va a encantar! Nuestro chef tiene más de 15 años de experiencia en la cocina japonesa y es conocido por sus increíbles rolls especiales. 🍣 ¡No te los podés perder! Cada rollo es una obra de arte comestible.",
  },
  {
    intent: "preguntar_pago",
    response:
      "Aceptamos efectivo, tarjetas de crédito y débito, así como pagos móviles. 💳 ¡Elegí el método que prefieras para tu comodidad! Porque el sushi sabe mejor cuando pagás a tu manera.",
  },
  {
    intent: "preguntar_pago",
    response:
      "Podés pagar en efectivo, con tarjeta de crédito o débito, o incluso con pagos móviles. ¡Lo que te resulte más fácil! 😊 ¡Estamos listos para hacer tu vida más fácil y deliciosa!",
  },
  {
    intent: "preguntar_recomendaciones",
    response:
      "Te recomiendo probar nuestro rollo de atún picante, es uno de los favoritos de nuestros clientes. 🌶️ ¡Una explosión de sabor que no te podés perder! También, el rollo de salmón es increíble. ¡Ambos son imperdibles!",
  },
  {
    intent: "preguntar_recomendaciones",
    response:
      "Si buscás algo especial, no te podés perder nuestro sushi de langosta. 🦞 ¡Es un verdadero manjar! ¡Cada bocado es pura felicidad!",
  },
  {
    intent: "preguntar_eventos",
    response:
      "Sí, organizamos eventos especiales y noches temáticas. 🎊 ¡Estate atento a nuestras redes sociales para no perderte ninguna novedad! ¡Cada evento es una oportunidad de fiesta!",
  },
  {
    intent: "preguntar_eventos",
    response:
      "¡Así es! Regularmente tenemos eventos y noches temáticas. 🎉 ¡Seguinos en redes sociales para estar al tanto de todo! ¡Porque la vida es mejor cuando se celebra!",
  },
  {
    intent: "preguntar_catering",
    response:
      "Ofrecemos un servicio de catering para eventos. 🎉 ¿Te gustaría saber más sobre nuestras opciones y cómo podemos hacer tu evento especial? ¡El sushi hace que cualquier evento sea inolvidable!",
  },
  {
    intent: "preguntar_catering",
    response:
      "¡Claro! Tenemos opciones de catering para todo tipo de eventos. 🎊 ¿Querés que te envíe más información? ¡Estamos listos para hacer de tu evento una celebración deliciosa!",
  },
];

export default answers;
