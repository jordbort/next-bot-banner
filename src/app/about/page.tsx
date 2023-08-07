import Link from "next/link";

export default function About() {
    return (
        <main>
            <h1 className="page-title">About</h1>
            <p className="description">
                Created by Jordan Bortner / <Link href="https://www.twitch.tv/jpegstripes" target="_blank">JPEGSTRIPES</Link> on Twitch.
                Uses the {`"`}All Known Bots{`"`} API from <Link href="https://twitchinsights.net/bots" target="_blank">Twitch Insights</Link>.
                I recommend copy/pasting your generated list of usernames into CommanderRoot{`'`}s <Link href="https://twitch-tools.rootonline.de/blocklist_manager.php" target="_blank">{`"`}Blocklist manager{`"`}</Link> moderation tools to process the batch quickly.
                There{`'`}s also already a {`"`}block known bots{`"`} button there, but it has over 7 million usernames in it, and takes a long time to run. 🙃
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