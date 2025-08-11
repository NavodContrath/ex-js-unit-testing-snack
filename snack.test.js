const { getInitials, createSlug, average, createSlug2, isPalindrome, posts, findPostById } = require("./testVari")
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
/* 4-Creare un test che verifichi la seguente descrizione:
👉 "La funzione createSlug sostituisce gli spazi con -."
📌 Esempi:
createSlug("Questo è un test") → "questo-e-un-test" */
test("La funzione createSlug2 sostituisce gli spazi con -.", () => {
    expect(createSlug2("Ciao Navod")).toBe("ciao-navod")
})

/* 5-Creare un test che verifichi la seguente descrizione:
👉 "La funzione isPalindrome verifica se una stringa è un palindromo."
📌 Nota: una stringa palindroma è una sequenza di caratteri che si legge uguale sia da sinistra a destra che da destra a sinistra.
 */
test("La funzione isPalindrome verifica se una stringa è un palindromo.", () => {
    expect(isPalindrome("ama")).toBeTruthy()
    expect(isPalindrome("amare")).toBeFalsy()
})

/* 6-Creare un test che verifichi la seguente descrizione:
👉 "La funzione createSlug lancia un errore se il titolo è vuoto o non valido." */
test("La funzione createSlug lancia un errore se il titolo è vuoto o non valido.", () => {
    expect(() => createSlug()).toThrow()
    expect(() => createSlug("")).toThrow()
})

/* 7-Crea un array di oggetti posts, in cui ogni oggetto ha le proprietà id, title e slug.
Creare un test che verifichi le seguenti descrizioni:
👉 "La funzione findPostById restituisce il post corretto dato l’array di post e l’id"
Creare uno o più test aggiuntivi che controllino che la struttura dati passati sia conforme (ogni post ha le proprietà id, title e slug, viene passato un id numerico). */


test("La funzione findPostById restituisce il post corretto dato l’array di post e l’id", () => {
    expect(findPostById(2)).toEqual({ id: 2, title: "Secondo Post", slug: "secondo-post" })
})

test("L'id di ogni post deve essere un numero", () => {
    posts.forEach(post => {
        expect(typeof post.id).toBe("number");
    })
})