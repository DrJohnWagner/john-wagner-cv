import React from "react"
import { Collapse } from "@mui/material"
// import Typography from "@mui/material/Typography"
import Timetable from "./Timetable"

// import Am from "./Am"
import IAmJohn from "../IAmJohn"
import keywords from "../CV/Keywords"
import service from "../CV/Service"
import teaching from "../CV/Teaching"

interface Props {
    sayMore: boolean
}

const serviceAndTeaching = service.concat(teaching).sort((a, b) => (a.from > b.from ? -1 : 1))

export const Serve = (props: Props): JSX.Element => {
    const { sayMore } = props
    return (
        <>
            <Collapse in={sayMore}>
                <IAmJohn words={keywords.serve} keyword="serve" />
            </Collapse>
            <Collapse in={!sayMore}>
                <Timetable
                    timeline={serviceAndTeaching.map(({ from, to, title, organisation }) => {
                        return {
                            from,
                            to,
                            title,
                            subtitle: organisation,
                            description: "",
                            bullets: [],
                        }
                    })}
                    xs={3}
                    sm={4}
                    md={4}
                />
            </Collapse>
        </>
    )
}

export default Serve
