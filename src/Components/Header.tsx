import React from "react"
import { Tab, Tabs } from "@mui/material"

interface Props {
    labels: string[]
    value: number
    onChange?: ((event: React.SyntheticEvent<Element, Event>, value: any) => void) | undefined
}

export const Header = (props: Props): JSX.Element => {
    const { labels, value, onChange } = props
    return (
        <Tabs value={value} onChange={onChange}>
            {labels.map((label) => (
                <Tab key={label} label={label} />
            ))}
        </Tabs>
    )
}

export default Header
