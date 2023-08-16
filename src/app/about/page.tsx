import Link from "next/link";

export default function About() {
    return (
        <main className="about-page">
            <h1 className="page-title">About</h1>
            <p className="description">
                I recommend copy/pasting your generated list of usernames into <Link href="https://twitch-tools.rootonline.de/blocklist_manager.php" target="_blank">CommanderRoot{`'`}s {`"`}Blocklist manager{`"`}</Link> moderation tools {`(`}you can skip loading blocked users{`)`} to process the batch quickly.
                There is a {`"`}block known bots{`"`} option available there, but it has over 7 million usernames in it, way too many for routine maintenance. 🙃
                This application uses the {`"`}All Known Bots{`"`} API from <Link href="https://twitchinsights.net/bots" target="_blank">Twitch Insights</Link>.
                The generated list is generally over 6,000 usernames, which the above tool can process in less than 10 minutes.
                The optional ban whitelist was borrowed from <Link href="https://ban-twitch-bots.sirmre.com/" target="_blank">this site</Link>.
                Created by Jordan Bortner / <Link href="https://www.twitch.tv/jpegstripes" target="_blank">JPEGSTRIPES</Link> on Twitch.
                Check out this project{`'`}s <Link href="https://github.com/jordbort/next-bot-banner" target="_blank">repository on GitHub</Link>!
            </p>
            <p className="margin-top-16">Technologies used:</p>
            <ul className="center">
                <li>Next.js 13</li>
                <li>React.js</li>
                <li>Node.js</li>
                <li>ESLint</li>
                <li>TypeScript</li>
                <li>JavaScript</li>
                <li>HTML</li>
                <li>CSS</li>
            </ul>
        </main>
    )
}