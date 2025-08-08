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
    return arr.reduce((acc, num) => acc + num, 0) / arr.length
}

function createSlug2(string) {
    return string.split(" ").join("-").toLowerCase()
}

function isPalindrome(string) {
    return string === string.split("").reverse().join("")
}

module.exports = {
    getInitials,
    createSlug,
    average,
    createSlug2,
    isPalindrome
}