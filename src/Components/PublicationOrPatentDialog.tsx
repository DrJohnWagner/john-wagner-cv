import React, { MouseEventHandler } from "react"
import Dialog from "@mui/material/Dialog"
import DialogContent from "@mui/material/DialogContent"
import DialogTitle from "@mui/material/DialogTitle"
import IconButton from "@mui/material/IconButton"
import CloseIcon from "@mui/icons-material/Close"

interface Props {
    title: string
    subtitle: string
    description: string
    src: string
    open: boolean
    fullScreen: boolean
    onClose: MouseEventHandler<HTMLButtonElement> | undefined
}

const PublicationOrPatentDialog = (props: Props) => {
    const { title, subtitle, description, src, open, fullScreen, onClose } = props
    return (
        <Dialog
            open={open}
            onClose={onClose}
            scroll={"paper"}
            fullScreen={fullScreen}
            maxWidth={"lg"}
            aria-labelledby="scroll-dialog-title"
            aria-describedby="scroll-dialog-description"
        >
            <DialogTitle id="scroll-dialog-title">
                <div style={{ marginRight: "24px" }}>
                    {title}.
                    <br />
                    {subtitle}.
                    <br />
                    {description}.
                </div>
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: "absolute",
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.primary.light,
                    }}
                >
                    <CloseIcon />
                </IconButton>
            </DialogTitle>
            <DialogContent
                style={{ border: "1px solid" }}
                sx={{ marginLeft: "2%", marginBottom: "2%", width: "96%", backgroundColor: "#FFFFFF" }}
            >
                <img src={src} />
            </DialogContent>
        </Dialog>
    )
}

export default PublicationOrPatentDialog
