// comece a criar a sua função add na linha abaixo
function add(x, y) {
  let sum = x + y;
  return sum;
}

// descomente a linha seguinte para testar sua função
console.assert(
  add(3, 5) === 8,
  "A função add não está funcionando como esperado"
);

// comece a criar a sua função multiply na linha abaixo
function multiply(a, b) {
  let multi = 0;
  for (i = 0; i < b; i++) {
    multi += add(a, 0);
  }

  return multi;
}

// descomente a linha seguinte para testar sua função
console.assert(
  multiply(4, 6) === 24,
  "A função multiply não está funcionando como esperado"
);

// comece a criar a sua função power na linha abaixo
function power(x, n) {
  let expon = 1;

  for (let i = 0; i < n; i++) {
    expon = multiply(expon, x);
  }

  return expon;
}

// descomente a linha seguinte para testar sua função
console.assert(
  power(3, 4) === 81,
  "A função power não está funcionando como esperado"
);

// comece a criar a sua função factorial na linha abaixo
function factorial(n) {
  let fator = 1;

  for (let i = n; i > 0; i--) {
    fator = multiply(i, fator);
  }

  return fator;
}

// descomente a linha seguinte para testar sua função
console.assert(
  factorial(5) === 120,
  "A função factorial não está funcionando como esperado"
);

/**
 * BONUS (aviso: o grau de dificuldade é bem maior !!!)
 */

// crie a função fibonacci
function fibonacci(m) {
  let aux = 0;
  let rule = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j <= i; j++) {
      if (i < m) {
        aux = j;
      }
      rule = add(m, aux);
    }
  }
  return rule;
}

// descomente a linha seguinte para testar sua função
console.assert(
  fibonacci(7) === 13,
  "A função fibonacci não está funcionando como esperado"
);
