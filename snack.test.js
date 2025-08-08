const { getInitials, createSlug, average } = require("./testVari")
/* 1-Creare un test che verifichi la seguente descrizione:
👉 "La funzione getInitials restituisce le iniziali di un nome completo." */
test("La funzione getInitials restituisce le iniziali di un nome completo.", () => {
    expect(getInitials('Navod Contrath')).toBe('NC')
})

/*2-Creare un test che verifichi la seguente descrizione:
👉 "La funzione createSlug restituisce una stringa in lowercase."*/
test("La funzione createSlug restituisce una stringa in lowercase.", () => {
    expect(createSlug("Ciao Navod")).toBe("ciao navod")
})

/* 3-Creare un test che verifichi la seguente descrizione:
👉 "La funzione average calcola la media aritmetica di un array di numeri." */
test("La funzione average calcola la media aritmetica di un array di numeri.", () => {
    expect(average([2, 4, 6, 8, 10])).toBe(6)
})