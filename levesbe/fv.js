export function kutyakiir(kutya) {
    const taroloElem = $(".tartalom")
    taroloElem.append(`
        <div class = "card">
            <div class = "card-body-lg-4 col-md-6">
                <h3 class = "card-title">${kutya.nev}</h3>
                <p>kor: ${kutya.kor}</p>
                <p>neme: ${kutya.nem}</p>
            </div>
        </div>
    `)
}