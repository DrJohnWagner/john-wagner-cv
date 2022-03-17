class Range {
    private from: number
    private to: number
    constructor(from: number, to: number) {
        this.from = from
        this.to = to
    }
    public getInRange(value: number) {
        return this.from <= value && value < this.to
    }
    public toString() {
        if (this.from === this.to - 1) {
            return `#${this.from}`
        }
        return `#${this.from} - #${this.to - 1}`
    }
}

export default Range
