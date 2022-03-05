const getHashtag = (s: string) => {
    return "#" + s.replace(/\s/g, "").toLowerCase()
}

export default getHashtag
