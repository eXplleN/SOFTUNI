function solve() {

  let input = document.getElementById('text').value;
  let currentCase = document.getElementById('naming-convention').value;

  if (currentCase === 'Camel Case') {
    let toCamel = input.toLowerCase();
    result = toCamel.split(" ").reduce((s, c) => s + c.charAt(0).toUpperCase() + c.slice(1) + '');
    result = result.charAt(0).toLowerCase() + result.slice(1);
    document.getElementById('result').innerText = result;
  }
  else if (currentCase === 'Pascal Case') {
    let toPascal = (' ' + input).toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => {
      return chr.toUpperCase()
    });
    document.getElementById('result').innerText = toPascal;
  }
  else {
    document.getElementById('result').innerText = 'Error!'
  }
}