
export const Libro = () => {
var nombre_libro = {
        value:"nombre",
        type:"text"};

var descripcion = {
    value:"descripcion",
    type:"text"};

var categoria_id = {
        value:"categoria_id",
        type:"value"};
        
var persona_id = {
            value:"persona_id",
            type:"value"};

    const form = [nombre_libro,descripcion,categoria_id,persona_id];
    const datos =  {
        tipo : "libro",
        form : form,}

return(datos);
    }

export const Persona = () => {
    var nombre_persona = {
        value:"nombre",
        type:"text"};

    var apellido = {
        value:"apellido",
        type:"text"};

    var alias = {
            value:"alias",
            type:"text"};
        
    var email = {
                value:"email",
                type:"text"};

    const form = [nombre_persona,apellido,alias,email];
    const datos =  {
                tipo : "persona",
                form : form,
            }
    return(datos);
}

export const Cetegoria = () => {
    var nombre_categoria = {
        value:"nombre",
        type:"text"};

   
    const form = [nombre_categoria];
    const datos =  {
                tipo : "categoria",
                form : form,
        }
    return(datos);
}