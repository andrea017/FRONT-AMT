export class persona{
    id?: number;
    nombre: string;
    apellido: string;
    img: string;
    titulo : string;
    acercade : string;

    constructor(nombre:string, apellido:string, img:string, titulo:string, acercade:string){
        this.nombre = nombre;
        this.apellido = apellido;
        this.img = img;
        this.acercade= acercade;
        this.titulo = titulo;
    }
}