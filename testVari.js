const posts = [
    { id: 1, title: "Primo Post", slug: "primo-post" },
    { id: 2, title: "Secondo Post", slug: "secondo-post" },
    { id: 3, title: "Terzo Post", slug: "terzo-post" }
]

function getInitials(fullName) {
    const names = fullName.split(" ")
    const initials = names.map(name => name[0].toUpperCase())
    return initials.join("")
}

function createSlug(string) {
    if (!string || typeof string !== 'string' || string.trim() === '') {
        throw new Error("Titolo vuoto o non valido");
    }
    return string.toLowerCase()
}

function average(arr) {
    arr.forEach(num => {
        if (isNaN(num)) {
            throw new Error("Richiesti solo numeri")
        }
    })
    return arr.reduce((acc, num) => acc + num, 0) / arr.length
}

function createSlug2(string) {
    return string.toLowerCase().replaceAll(" ", "-")
}

function isPalindrome(string) {

    return string.trim() === string.trim().split("").reverse().join("")
}

function findPostById(posts, id) {
    if (isNaN(id)) {
        throw new Error(`${id} non è un numero`)
    }
    posts.forEach(p => {
        if (
            p.id === undefined ||
            p.title === undefined ||
            p.slug === undefined
        ) {
            throw new Error("Formato array sbagliato")
        }
    })
    return posts.find(post => post.id === id) || null
}

module.exports = {
    getInitials,
    createSlug,
    average,
    createSlug2,
    isPalindrome,
    findPostById,
    posts
}