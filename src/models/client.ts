export default class Client{
    id: number;
    nom: string;
    prenom: string;

    constructor(id: number, nom: string, prenom: string){
        this.id = id;
        this.nom = nom;
        this.prenom = prenom;
    }
}