import Link from "next/link";
// import Router from "next/router";

export default function NavBar() {
    return <nav>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/banlist">My Ban List</Link>
    </nav>
}
