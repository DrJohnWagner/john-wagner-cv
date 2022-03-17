interface Publication {
    key: string
    topics: string[]
    authors: string
    title: string
    journal: string
    volume: string
    impact?: string
    year: number
    url?: string
}

export default Publication
