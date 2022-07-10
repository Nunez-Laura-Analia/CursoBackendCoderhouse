class Usuario {
  constructor(nombre, apellido, libros, mascotas) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.libros = libros;
    this.mascotas = mascotas;
  }
}

const libros = [
  {
    libro1: "libro1",
    libro2: "libro2",
    libro3: "libro3",
  },
];

let usuario1 = new Usuario("nombreX", "apellidoX", libros, [
  "mascota1",
  "mascota2",
  "mascota2",
]);

console.log(usuario1);
