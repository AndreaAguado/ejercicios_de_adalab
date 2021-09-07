'use strict';

const users = [
    { name: 'María', isPremium: false },
    { name: 'Lucía', isPremium: true },
    { name: 'Susana', isPremium: true },
    { name: 'Rocío', isPremium: false },
    { name: 'Inmaculada', isPremium: false }
  ];


  const isPremium = (user) => {
      let vip;
      if(user.isPremium) {
          vip = user;
      }
      return vip;
  }
  const premiumOnes = users.filter(isPremium);
  console.log(premiumOnes);