function obtenerListadeUsuarios () {
    var ListaUsuarios = JSON.parse(localStorage.getitem("ListaUsuariosLs"));

if(ListaUsuarios == null){
    ListaUsuarios =
    [
      ["1", "Matias","Berra", "mat0015@hotmail.com", "chester2020", "1"],
    ]
    } 
    return ListaUsuarios;
}