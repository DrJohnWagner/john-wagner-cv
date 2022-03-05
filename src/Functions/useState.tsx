import React from "react"

type SetAction<S> = ((s: S) => S) | S
type Set<A> = (a: A) => void
type Get<S> = () => S

export default function useState<S>(initialState: (() => S) | S): [Get<S>, Set<SetAction<S>>] {
    const [s, setS] = React.useState(initialState)
    const getS = () => s
    return [getS, setS]
    // return [() => s, setS]
}
