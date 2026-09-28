// 1.Propiedad sencilla. Accede al nombre de la academia utilizando la notación de punto.

// 2.Propiedad con espacios. Accede al valor de la propiedad 'código de centro'.

// 3.Objeto dentro de otro objeto. Accede a la ciudad de la academia.

// 4.Varios niveles de objetos. Accede al número de la calle.

// 5.Array de textos. Accede a la segunda área formativa.

// 6.Array dentro de un objeto anidado. Accede al segundo teléfono de contacto.

// 7.Array de objetos. Accede al título del segundo curso.

// 8.Objeto dentro de un array de objetos. Accede al nombre de la docente del primer curso.

// 9.Combinación de objetos y arrays. Accede a la segunda nota del primer alumno del segundo curso.

// 10.Acceso mediante una variable. Dada la siguiente variable, accede a la propiedad de contacto cuyo nombre indica su valor. Debes utilizar la variable en la expresión.

(() =>{

  const academia = {
    nombre: 'Kaicen Formación',
    'código de centro': 'KA-204',
    direccion: {
      ciudad: 'Palma',
      calle: {
        nombre: 'Calle del Sol',
        numero: 18
      }
    },
    areas: ['Informática', 'Idiomas', 'Servicios sociales'],
    contacto: {
      email: 'informacion@academia.test',
      telefonos: ['971000111', '600222333']
    },
    cursos: [
      {
        titulo: 'JavaScript inicial',
        horas: 40,
        docente: {
          nombre: 'Laura',
          especialidades: ['JavaScript', 'Desarrollo web']
        },
        alumnos: [
          { nombre: 'Ana', notas: [7, 9] },
          { nombre: 'Luis', notas: [6, 8] }
        ]
      },
      {
        titulo: 'Excel práctico',
        horas: 30,
        docente: {
          nombre: 'Miguel',
          especialidades: ['Excel', 'Análisis de datos']
        },
        alumnos: [
          { nombre: 'Marta', notas: [8, 10] },
          { nombre: 'Pablo', notas: [5, 7] }
        ]
      }
    ]
  }

  console.log(academia)

  // 1.Propiedad sencilla. Accede al nombre de la academia utilizando la notación de punto.

  console.log(academia.nombre)

  // 2.Propiedad con espacios. Accede al valor de la propiedad 'código de centro'.

  console.log(academia["código de centro"])

  // 3.Objeto dentro de otro objeto. Accede a la ciudad de la academia.

  console.log(academia.direccion.ciudad)

  // 4.Varios niveles de objetos. Accede al número de la calle.

  console.log(academia.direccion.calle.numero)

  // 5.Array de textos. Accede a la segunda área formativa.

  console.log(academia.areas['1'])

  // 6.Array dentro de un objeto anidado. Accede al segundo teléfono de contacto.

   console.log(academia.contacto.telefonos['1'])

   // 7.Array de objetos. Accede al título del segundo curso.

   console.log(academia.cursos['1'].titulo)

   // 8.Objeto dentro de un array de objetos. Accede al nombre de la docente del primer curso.

   console.log(academia.cursos['0'].docente.nombre)

   // 9.Combinación de objetos y arrays. Accede a la segunda nota del primer alumno del segundo curso.

   console.log(academia.cursos['1'].alumnos['0'].notas['1'])

   // 10.Acceso mediante una variable. Dada la siguiente variable, accede a la propiedad de contacto cuyo nombre indica su valor. Debes utilizar la variable en la expresión.

   let contacto = academia.contacto
    console.log(contacto)

  
})()