"use client";

import * as React from "react";

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
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import {Switch} from "@/components/ui/switch"


interface SettingItemProps {
    id: string,
    title: string,
    disabled?: boolean,
    checked?: boolean
    children: React.ReactNode
}

function SettingItem({
    id,
    title,
    disabled = false,
    checked = false,
    children
}: SettingItemProps) {
    return (
        <AccordionItem value={id}>
            <div className="flex items-center gap-10 pr-4">
                <div className="grow">
                    <AccordionTrigger>{title}</AccordionTrigger>
                </div>
                <Switch id={id} defaultChecked={checked} disabled={disabled}/>
            </div>
            <AccordionContent className="flex flex-col gap-4 text-balance">
                {children}
            </AccordionContent>
        </AccordionItem>
    )
}

interface CookieSettingsProps {
    parentSetOpen: (open: boolean) => void
}

export default function CookieSettings({
    parentSetOpen
}: CookieSettingsProps) {
    const [open, setOpen] = React.useState(false);

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button variant="outline" className="w-full">Einstellungen öffnen</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[655px]"
                            onEscapeKeyDown={(e) => e.preventDefault()}
                            onPointerDownOutside={(e) => e.preventDefault()}
                            onInteractOutside={(e) => e.preventDefault()}>
                <form onSubmit={(event) => {
                    parentSetOpen(false);
                    event.preventDefault();
                }}>
                    <DialogHeader>
                        <DialogTitle className="wb-7">Cookie-Einstellungen verwalten</DialogTitle>
                        <DialogDescription>
                            Hier können sie nur bestimmten Cookies zustimmen. Diese dienen uns, 
                            für Sie unsere Webseite verbessern, maßgeschnitte Inhalte bereitstellen und das Benutzeraufkommen analysieren.
                        </DialogDescription>
                        <DialogDescription>
                            Weitere Information finden Sie in <a href="#" className="underline text-blue-500 hover:text-blue-700 visited:text-purple-700">unsererer Datenschutzbestimmungen</a>.
                        </DialogDescription>
                    </DialogHeader>
                    <Accordion
                        type="single"
                        collapsible
                        className="w-full mt-7 mb-7"
                        defaultValue="item-1"
                    >
                        <SettingItem id="technical" title="Notwendige Cookies" disabled={true} checked={true}>
                            <p>
                                Dieses Cookies werden benötigt, dass die Webseite korrekt funktionieren 
                                und ihre Datenschutzeinstellungen grundsätzlich gespeichert werden können.
                            </p>
                        </SettingItem>
                        <SettingItem id="analytics" title="Cookies für Analyse">
                            <p>
                                Durch Akzeptieren dieser Cookies erlauben Sie uns das Analysieren des Webseiten-Traffics,
                                des Benutzeraufkommens und sonstigen Metriken, die uns ermöglichen, unsere Webseite für Sie stetig zu verbessern.
                            </p>
                        </SettingItem>
                        <SettingItem id="technical-cookies" title="Cookies für Marketing">
                            <p>
                                Wir verwenden Marketing-Cookies, um Ihnen Werbungen anzeigen zu können, die auch für Sie relevant sein können.
                            </p>
                        </SettingItem>
                    </Accordion>
                    <DialogFooter>
                        <Button type="submit" variant="outline">Notwendige akzeptieren</Button>
                        <Button type="submit" variant="outline">Alle akzeptieren</Button>
                        <Button type="submit">Auswahl akzeptieren</Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    )
}