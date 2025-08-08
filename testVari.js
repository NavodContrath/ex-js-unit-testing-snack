function getInitials(fullName) {
    const names = fullName.split(" ")
    const initials = names.map(name => name[0].toUpperCase())
    return initials.join("")
}

function createSlug(string) {
    return string.toLowerCase()
}

function average(arr) {
    return arr.reduce((acc, num) => acc + num, 0) / arr.length
}

module.exports = { getInitials, createSlug, average }