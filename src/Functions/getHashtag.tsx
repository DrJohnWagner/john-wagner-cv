const getHashtag = (value: string | number) => {
    const s = typeof value === "number" ? new Number(value).toString() : value
    return "#" + s.replace(/\s/g, "").toLowerCase()
}

export default getHashtag
