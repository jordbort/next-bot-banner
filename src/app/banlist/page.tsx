"use client"

import { useEffect, useState } from "react"

export default function BanList() {
    const [loaded, setLoaded] = useState<boolean>(false)
    const [bannedList, setBannedList] = useState<string | null>(null)
    const rememberedBots: string[] = bannedList ? bannedList.split(`,`) : []

    useEffect(() => {
        setBannedList(localStorage.getItem(`banned-list`))
        setLoaded(true)
    }, [])

    return (
        <main className="ban-list-page">
            <h1 className="page-title">My Ban List</h1>
            <p className="description">
                Your ban list keeps track of accounts that you have already remembered, which don{`'`}t need to be banned again.
                It can be stored in your web browser{`'`}s memory on this computer to make future generated lists shorter.
                After generating a list of accounts to ban on the home page, you have the option to save it by clicking the {`"`}Remember List{`"`} button.
                This list is not reflective of which accounts are or are not actually banned from your Twitch channel.
                You may clear this list by clicking the {`"`}Clear List{`"`} button below, if there are any. {`(`}You{`'`}ll have to refresh the page to see the changes reflected.{`)`}
            </p>
            {loaded && <div>
                <p>
                    Your ban list currently contains {rememberedBots.length.toLocaleString()} {rememberedBots.length === 1 ? `bot` : `bots`}.
                </p>
                {rememberedBots.length > 0 && <button className="clear-button" onClick={() => { localStorage.removeItem(`banned-list`) }}>Clear List</button>}
                <ol>
                    {rememberedBots.map((robot, idx) => <li key={idx}>{robot}</li>)}
                </ol>
            </div>}
        </main>
    )
}