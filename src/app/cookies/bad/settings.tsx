"use client";

import * as React from "react";

import { Button } from "@/components/ui/button"
import {
    Dialog,
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
import {
    Card,
    CardContent,
    CardFooter
} from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"


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
    checked = true,
    children
}: SettingItemProps) {
    return (
        <AccordionItem value={id}>
            <AccordionTrigger>{title}</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance sm:pr-7">
                <Card>
                    <CardContent>
                        {children}
                    </CardContent>
                    <CardFooter className="flex gap-3">
                        <Label>Auswahl </Label>
                        <Switch id={id} defaultChecked={checked} disabled={disabled} />
                    </CardFooter>
                </Card>                
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
                <a className="w-full underline text-blue-500 hover:text-blue-700 visited:text-purple-700">Einstellungen öffnen</a>
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
                            für Sie unsere Webseite verbessern, maßgeschnittene Inhalte bereitstellen und das Benutzeraufkommen analysieren.
                        </DialogDescription>
                        <DialogDescription>
                            Weitere Information finden Sie in <a href="#" className="underline text-blue-500 hover:text-blue-700 visited:text-purple-700">unsererer Datenschutzbestimmungen</a>.
                        </DialogDescription>
                    </DialogHeader>
                    <ScrollArea className="h-50 sm:max-h-100 w-full rounded-md mt-7 mb-7 pr-3 sm:pl-7 sm:pr-7">
                        <Accordion
                            type="single"
                            collapsible
                            className="w-full"
                            defaultValue="item-1"
                        >
                            {/* Text angelehnt an bild.de */}
                            <SettingItem id="1" title="Speichern von Information auf Ihren Gerät (notwendig)" disabled={true} checked={true}>
                                <p>
                                    Dieses Cookies werden benötigt, dass die Webseite korrekt funktionieren
                                    und ihre Datenschutzeinstellungen grundsätzlich gespeichert werden können.
                                </p>
                            </SettingItem>
                            <SettingItem id="2" title="Verwendung Ihrer E-Mail-Adresse als Erkennungsmerkmal">
                                <p>
                                    Durch Akzeptieren dieser Cookies erlauben Sie uns Werbekampagnen besser auf Sie zuzuschneiden.
                                    Wenn Sie uns im Laufe der Nutzung Ihre E-Mail-Adresse bekanntgeben, erlauben Sie die Nutzung dieser als 
                                    Identifizierungsmerkmal.
                                </p>
                            </SettingItem>
                            <SettingItem id="3" title="Personalisierte Werbung">
                                <p>
                                    Wir verwenden Cookies, um Ihnen Werbungen anzeigen zu können, die auch für Sie relevant sein können.
                                </p>
                            </SettingItem>
                            <SettingItem id="4" title="Cookies für Produkt- und Vertriebsanalyse">
                                <p>
                                    Wir verwenden Cookies, um die Webseitaktivität für die Verbesserung unserer Produkte und Dienstleistungen zu analysieren.
                                </p>
                            </SettingItem>
                            <SettingItem id="5" title="Personalisierter Inhalt">
                                <p>
                                    Wir verwenden Cookies, um auf Ihnen maßgeschnittene Inhalte anzeigen zu können.
                                </p>
                            </SettingItem>
                            <SettingItem id="6" title="A/B Testing">
                                <p>
                                    Cookies erlauben uns A/B-Tests duchzuführen, um unsere Produkte und Dienstleistungen zu verbessern.
                                </p>
                            </SettingItem>
                            <SettingItem id="7" title="Anzeige von Inhalten aus sozialen Netwerken von Drittanbieter">
                                <p>
                                    Wir verwenden Cookies, um Ausschnitte aus sozialen Medien einzubetten zu können.
                                </p>
                            </SettingItem>
                        </Accordion>
                    </ScrollArea>
                    <DialogFooter>
                        <Button type="submit" variant="outline">Auswahl akzeptieren</Button>
                        <Button type="submit">Alle akzeptieren</Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    )
}