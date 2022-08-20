const edad = 15
// condicionales simples 
if(edad >= 18)
{
    console.log('Acceso permitido')

}

// condicionales compuestas 
if( edad >=18)
{
    console.log('Acceso permitido')
}else{

    console.log('Acceso no permitido')
}


const dia = 'lunes';
if(dia== 'lunes')

{
    console.log('Trabajar')

}else if(dia =='sabado')
{
    console.log('Estudiamos')
}else{

    console.log('Trabajamos y estudiamos')
}

switch (dia)
{
    case 'lunes':
    console.log('Trabajar')
    break
    case 'sabado':         
    console.log('Estudiamos')   
    break
    default:
    console.log('Trabajamos y estudiamos')
}

// ternarias
const cantidad =8
let descuento=mull
if(cantidad =>5){
    descuento=0.10
}else{
    descuento=0.05
}
console.log('el desucneto ', descuento)


descuento = cantidad >=5 ? 0.10 : 0.5



