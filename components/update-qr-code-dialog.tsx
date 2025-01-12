"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"

interface QRCode {
    id: number;
    name: string;
    createdAt: string;
    url: string;
}

interface UpdateQRCodeDialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    qrCode: QRCode | null;
    onUpdate: (qrCode: QRCode) => void;
}

export function UpdateQRCodeDialog({ open, onOpenChange, qrCode, onUpdate }: Readonly<UpdateQRCodeDialogProps>) {
    const [name, setName] = useState("")
    const [url, setUrl] = useState("")

    useEffect(() => {
        if (qrCode) {
            setName(qrCode.name)
            setUrl(qrCode.url)
        }
    }, [qrCode])

    const handleUpdate = () => {
        if (qrCode) {
            onUpdate({ ...qrCode, name, url })
        }
        onOpenChange(false)
    }

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Update QR Code</DialogTitle>
                    <DialogDescription>
                        Update the details for your QR code.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <label htmlFor="name" className="text-right">
                            Name
                        </label>
                        <Input
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="col-span-3"
                        />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <label htmlFor="url" className="text-right">
                            URL
                        </label>
                        <Input
                            id="url"
                            value={url}
                            onChange={(e) => setUrl(e.target.value)}
                            className="col-span-3"
                        />
                    </div>
                </div>
                <DialogFooter>
                    <Button onClick={handleUpdate}>Update QR Code</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

