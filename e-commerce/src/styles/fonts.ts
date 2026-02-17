import { Playfair } from "next/font/google";

export const playFair = Playfair({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-play-fair",
});