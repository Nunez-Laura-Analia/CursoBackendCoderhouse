class Usuario {
  constructor(nombre, apellido) {
    const mascotas = ["mascota1", "mascota2", "mascota3"];

    const libros = [
      {
        nombre: "libro1",
        autor: "autor1",
      },
      {
        nombre: "libro2",
        autor: "autor2",
      },
      {
        nombre: "libro3",
        autor: "autor3",
      },
    ];

    this.nombre = nombre;
    this.apellido = apellido;
    this.libros = libros;
    this.mascotas = mascotas;
  }

  getFullName() {
    return `Tu nombre completo es ${this.nombre} ${this.apellido}`;
  }

  addMascota(mascotaNueva) {
    this.mascotas.push(mascotaNueva)
  }

  countMascotas() {
    return this.mascotas.length;
  }

  addBook(nombreLibro, autorLibro) {
    const libroNuevo = { nombre: nombreLibro, autor: autorLibro };
    this.libros.push(libroNuevo);
  }

  getBookNames() {
    return this.libros.map(function(obj){
      return 'nombre:', obj.nombre
    });
  }
}

let usuario1 = new Usuario("nombreX", "apellidoX");

usuario1.addBook("libro4", "autor4");
usuario1.addMascota("mascota4");