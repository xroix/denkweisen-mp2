/**
 * File: ./page.tsx
 * 
 */

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
