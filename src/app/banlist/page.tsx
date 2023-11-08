"use client"

export default function BanList() {
    const bannedList: string | null = localStorage.getItem(`banned-list`)
    const rememberedBots: string[] = bannedList ? bannedList.split(`,`) : []

    return (
        <main className="ban-list-page">
            <h1 className="page-title">My Ban List</h1>
            <p className="description">
                Your ban list is stored in your web browser{`'`}s memory on this computer.
                After generating a list of accounts to ban on the home page, you have the option to save it by clicking the {`"`}Remember List{`"`} button.
                This list is not reflective of which accounts are or are not actually banned from your Twitch channel, but will make future queries shorter by filtering out redundancies.
                {rememberedBots.length > 0 && ` You may clear this list by clicking the "Clear List" button below. (You'll have to refresh the page to see the changes reflected.)`}
            </p>
            <p>
                Your ban list currently contains {rememberedBots.length.toLocaleString()} {rememberedBots.length === 1 ? `bot` : `bots`}.
            </p>
            {rememberedBots.length > 0 && <button className="clear-button" onClick={() => { localStorage.removeItem(`banned-list`) }}>Clear List</button>}
            <ol>
                {rememberedBots.map((robot, idx) => <li key={idx}>{robot}</li>)}
            </ol>
        </main>
    )
}