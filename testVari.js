function getInitials(fullName) {
    const names = fullName.split(" ")
    const initials = names.map(name => name[0].toUpperCase())
    return initials.join("")
}

function createSlug(string) {
    return string.toLowerCase()
}

module.exports = { getInitials, createSlug }