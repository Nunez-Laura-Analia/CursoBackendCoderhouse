class Usuario {
  constructor(nombre, apellido, libros, mascotas) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.libros = libros;
    this.mascotas = mascotas;
  }
  
  getFullName() {
    return this.nombre;
  }

  addMascota(mascotaNueva) {
    return [...this.mascotas, mascotaNueva];
  }

  countMascotas() {
    return mascotas.length;
  }

  addBook(nombreLibro, autorLibro) {
    const libroNuevo = { nombre: nombreLibro, autor: autorLibro };
    return [...libros, libroNuevo];
  }

  getBookNames() {
    for (let i = 0; i < this.libros.length; i++){
      return this.libros[i].nombre
    }
  }
}

const libros = [
  {
    nombre: "libro1",
    autor: "autor1"
  },
  {
    nombre: "libro2",
    autor: "autor2"
  },
  {
    nombre: "libro3",
    autor: "autor3"
  }
];

const mascotas = ["mascota1", "mascota2", "mascota3"];

let usuario1 = new Usuario("nombreX", "apellidoX", libros, mascotas);

usuario1.addBook("libro4", "autor4")
usuario1.addMascota("mascota4")

console.log(usuario1.countMascotas())
