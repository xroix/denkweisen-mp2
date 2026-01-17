"use client";

import * as React from "react";
import CookieSettings from "./settings"

import {Button} from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"


export default function CookieBannerBad() {
    const [open, setOpen] = React.useState(false);

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button>Schlechtes Beispiel anzeigen</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] [&>button:last-child]:hidden"
                            onEscapeKeyDown={(e) => e.preventDefault()}
                            onPointerDownOutside={(e) => e.preventDefault()}
                            onInteractOutside={(e) => e.preventDefault()}>
                <form onSubmit={(event) => {
                    setOpen(false);
                    event.preventDefault();
                }}>
                    <DialogHeader>
                        <DialogTitle>Diese Webseite verwendet Cookies</DialogTitle>
                        <DialogDescription>
                            Nur so können wir für Sie unsere Webseite verbessern und maßgeschnitte Inhalte bereitstellen. 
                        </DialogDescription>
                        <DialogDescription>
                            Weitere Information finden Sie in <a href="#" className="underline text-blue-500 hover:text-blue-700 visited:text-purple-700">den Datenschutzbestimmungen</a>.
                            Sollten Sie gewissen Cookies und Tracking trotz Einschränkung verweigern wollen, können Sie dies in den <CookieSettings parentSetOpen={setOpen}/>
                        </DialogDescription>
                    </DialogHeader>
                    <DialogFooter className="mt-8 sm:flex-col">
                        <Button type="submit">Alle Akzeptieren</Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    )
}