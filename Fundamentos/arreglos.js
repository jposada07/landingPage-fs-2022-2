const fiestaAnimales=['perro','gato','oso','conejo']


fiestaAnimales.push('leon')

fiestaAnimales.push('tigre')

// find funciones

const estaEloso = fiestaAnimales.find( animal => animal === 'oso')

// filter
const fiestaPrivada = fiestaAnimales.filter(animal => animal !=='oso')