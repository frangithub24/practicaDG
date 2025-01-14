//let amigos = ["Coco","Pablito","Sus","Franco"];

//let amigosJSON = JSON.stringify(amigos);

//let amigsOriginal = JSON.parse(amigosJSON);

//console.log(amigsOriginal)

let persona = {
    nombre: "Carli",
    edad: 26,
    domicilio: "Calle Falsa 123"
}

//console.log(persona)

//convierto el objeto en un string de tipo JSON:

let personaJSON = JSON.stringify(persona);
//console.log(personaJSON);

//tengo string y lo convierto en el objeto original

let personaOriginal = JSON.parse(personaJSON);

console.log(personaOriginal);