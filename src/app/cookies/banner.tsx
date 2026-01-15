"use client";

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
import {Input} from "@/components/ui/input"
import {Label} from "@/components/ui/label"

import CookieSettings from "./settings"

export default function CookieBanner() {
    return (
        <Dialog>
            <form>
                <DialogTrigger asChild>
                    <Button variant="outline">Cookie-Banner öffnen</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px] [&>button:last-child]:hidden"
                               onEscapeKeyDown={(e) => e.preventDefault()}
                               onPointerDownOutside={(e) => e.preventDefault()}
                               onInteractOutside={(e) => e.preventDefault()}>
                    <DialogHeader>
                        <DialogTitle>Diese Webseite verwendet Cookies</DialogTitle>
                        <DialogDescription>
                            Nur so können wir für Sie unsere Webseite verbessern, Analyse unserer Besucherdaten
                            ausführen und auf sie maßgeschnitte Inhalte bereitstellen.
                        </DialogDescription>
                        <DialogDescription>
                            Weitere Informationen können sie in den Einstellungen unten sehen.
                        </DialogDescription>
                    </DialogHeader>
                    <DialogFooter className="flex sm:flex-col sm:justify-center">
                        <Button type="submit">Einverstanden</Button>
                        <DialogClose asChild>
                            <Button variant="outline">Nur Notwendige</Button>
                        </DialogClose>
                        <CookieSettings/>
                    </DialogFooter>
                </DialogContent>
            </form>
        </Dialog>
    )
}