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

import CookieBannerGood from "./cookies/good/banner"
import CookieBannerBad from "./cookies/bad/banner"

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center gap-5">
            <CookieBannerGood/>
            <CookieBannerBad/>
        </main>
    );
}
