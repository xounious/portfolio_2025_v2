import Image from "next/image";

export default function Header() {
    return (
        <header>
            <nav className="flex flex-row whitespace-nowrap justify-between bg-slate-800 text-slate-50 h-14">
                <div className="flex whitespace-nowrap flex-row items-center space-x-4">
                    <Image src="/logo.webp" alt="Logo" width={56} height={56} />
                    <h1 className="text-4xl">Mateo Vallée</h1>
                </div>
                <ul className="flex flex-row justify-around whitespace-nowrap items-center">
                    <LiNav href="/">Accueil</LiNav>
                    <LiNav href="/about">A propos</LiNav>
                    <LiNav href="/projets/ventedemusique">
                        Vente de musique
                    </LiNav>
                    <LiNav href="/contact">Contact</LiNav>
                </ul>
            </nav>
        </header>
    );
}

function LiNav({ children, href }) {
    return (
        <li className="px-2">
            <a href={href}>{children}</a>
        </li>
    );
}
