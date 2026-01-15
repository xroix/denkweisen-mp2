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

import CookieBanner from "./cookies/banner"

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center">
            <h1 className="text-2xl font-bold mb-4">Hello World</h1>
            <CookieBanner/>
        </main>
    );
}
