//  // MATRICES

//  const nombres = ["Carolina" , "Carola" , "Naty"]

//  nombres [0] // Carolina

// const mixto = ["a", "b", "c", [1, 2, 5, 6], ["ana", "juan"]]

// console.log (mixto [3][1])

// console.log (matriz[0][1])

// for (let i = 0; i < matriz.length; i++) {
//     console.log (matriz[i])
//     for (let j = 0; j < matriz[i].length; j++) {
//         console.log(matriz[i][j])
        
//     }
    
// }

// let masGrande = 0 
// for (let i = 0; i < matriz.length; i++) {
//     for (let j = 0; j < matriz[i].length; j++) {
//         if (matriz[i][j] > masGrande) = {
//             masGrande = matriz[i][j]
//         }
        
//     }
    
// }

// console.log (masGrande)


// const matriz = [
//     [1,2,3],
//     [44,55,66],
//     [777,224,999]
// ]

// const sumar = (matriz) => {
//     let sumaTotal = 0
//     for (let i = 0; i < matriz.length; i++) {
//          console.log (matriz[i])
//          for (let j = 0; j < matriz[i].length; j++) {
//              console.log (matriz[i][j])
//              sumaTotal = sumaTotal + matriz[i][j]
//              console.log (sumaTotal)
             

             
//          }
        
//     }

// }



// sumar ([
//         [1,2,3],
//         [44,55,66],
//         [777,224,999]
//     ])

    // Definí una función obtenerFilaMasLarga que reciba 
    // como argumento un array 2d matriz y devuelva el array 
    // (fila) que tenga mayor longitud. Si hay varios de igual longitud, 
    // debe devolver el primero de ellos.

//  obtenerFilaMasLarga([[1, 4], [3, 7, 5], [1]])
// // [3, 7, 5]
//  obtenerFilaMasLarga([[1], [3, 7], [6, 8]])
// // [3, 7]

const obtenerFilaMasLarga = (matriz) => {
    let arrayMasLargo = []
    for (let i = 0; i < matriz.length; i++) {
        if (matriz[i].length > arrayMasLargo.length) {
            arrayMasLargo = matriz[i]
        }
        
    }
    console.log (arrayMasLargo)
    return arrayMasLargo
}

obtenerFilaMasLarga([[1, 4], [3, 7, 5], [1]])

3 4 7