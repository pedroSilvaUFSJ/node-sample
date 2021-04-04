const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

/**
 * OBJECTIVE: getting lowest chineses woman object
 */
const chinese = (data) => data?.pais?.toLowerCase() == 'china';
const woman = (data) => data.genero.toLocaleUpperCase() == 'F';
const lowestSalary = (last, current) => last.salario < current.salario ? last : current;

axios.get(url).then(({ data }) => console.log(data.filter(chinese).filter(woman).reduce(lowestSalary)))