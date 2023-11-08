import Link from "next/link";

export default function About() {
    return (
        <main className="about-page">
            <h1 className="page-title">About</h1>
            <p className="description">
                If you{`'`}re like me, you like to keep your Twitch channel{`'`}s chat list free from viewer bot accounts.
                This is desirable because it keeps the list clean, accurate, and easier to read.
                After generating a list of usernames to ban on the home page, I recommend copy/pasting it into <Link href="https://twitch-tools.rootonline.de/blocklist_manager.php" target="_blank">CommanderRoot{`'`}s {`"`}Blocklist manager{`"`}</Link> moderation tools {`(`}you can skip loading blocked users{`)`} to process the batch quickly.
                There is actually a {`"`}block known bots{`"`} option available there, but it has over 7 million usernames in it, which takes forever to run. 🙃
                This application uses the {`"`}All Known Bots{`"`} API from <Link href="https://twitchinsights.net/bots" target="_blank">Twitch Insights</Link>.
                The generated list is generally over 6,000 usernames, which the above tool can process in less than 10 minutes.
                New bot accounts appear all the time, so I personally like to perform routine cleanup.
                Fortunately, this application also allows you to store your banned accounts to filter them out from future lists and keep them shorter and more manageable.
                The optional ban whitelist was borrowed from <Link href="https://ban-twitch-bots.sirmre.com/" target="_blank">this site</Link>.
                This project was created by Jordan Bortner / <Link href="https://www.twitch.tv/jpegstripes" target="_blank">JPEGSTRIPES</Link> on Twitch.
                Check out the <Link href="https://github.com/jordbort/next-bot-banner" target="_blank">code repository on GitHub</Link>!
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