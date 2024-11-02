import Link from 'next/link';

export default function Header() {
    return (
        <header>
            <h1>My Portfolio</h1>
            <nav>
                <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/projects">Projects</Link></li>
                </ul>
            </nav>
        </header>
    );
}
