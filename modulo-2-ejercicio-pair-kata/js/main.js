'use strict';

const textMix = document.querySelector('.js_text_mix');
const textUpper = document.querySelector('.js_text_upper');

textUpper.innerHTML = textMix.innerHTML.toUpperCase();
console.log(textUpper);

// Objetivo:
//   Debéis poner el texto que está en el span de la derecha del primer div
// dentro del span del segundo div, transformando el texto en mayúsculas y
// usando unicamente JavaScript (podéis poner clases en las etiquetas del HTML).
// Pista: buscad en MDN los métodos de strings.
//
// Pasos:
//
// 1. Traer el <span> con el texto original a una constante.
// 2. Traer el <span> donde se escribirá el texto modificado.
// 3. Obtener el texto que contiene.
// 4. Transformar el texto a mayúsculas.
// 5. Poner el texto transformado en el <span> destino.