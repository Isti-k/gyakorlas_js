export default class Kartya{
    //adatagok
    #obj={} //privát adattag -> #
    #szuloElem;
    //construktor
    constructor(obj, szuloElem){
        this.#obj=obj
        this.#szuloElem=szuloElem
        this.kutyaKiir()
    }
    //tagfüggvények
    kutyaKiir(){
        //egyetlen egy kutya kiírása
        this.#szuloElem.append(`
            <div class = "card">
                <div class = "card-body-lg-4 col-md-6">
                    <h3 class = "card-title">${this.#obj.nev}</h3>
                    <p>kor: ${this.#obj.kor}</p>
                    <p>neme: ${this.#obj.nem}</p>
                    <button class="btn btn-success">kiválaszt</button>
                </div>
            </div>
            `)
    }
}