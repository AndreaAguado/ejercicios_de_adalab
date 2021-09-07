'use strict';

const users = [
    { name: 'María', isPremium: false },
    { name: 'Lucía', isPremium: true },
    { name: 'Susana', isPremium: true },
    { name: 'Rocío', isPremium: false },
    { name: 'Inmaculada', isPremium: false }
  ];

  const premiumGreeting = (user) => {
      let greeting = '';
      if (user.isPremium){
        greeting = `Bienvenida ${user.name}. Gracias por confiar en nosotros.`
      }
      else {
        greeting = `Bienvenida ${user.name}.`
      }
      return greeting;
  }

  const greetings = users.map(premiumGreeting);
  console.log(greetings);