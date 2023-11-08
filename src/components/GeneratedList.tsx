import { useState } from "react"

interface Props {
    checkedBots: string[]
}

export default function GeneratedList({ checkedBots }: Props) {
    const [results, setResults] = useState<string[]>([])
    const [recentChecked, setRecentChecked] = useState<boolean>(false)
    const [filterChecked, setFilterChecked] = useState<boolean>(true)
    const [loadingText, setLoadingText] = useState<string>('Click the button to generate your ban list!')

    const maxDaysActive: number = 14
    const bannedList: string | null = localStorage.getItem(`banned-list`)
    const rememberedBots: string[] = bannedList ? bannedList.split(`,`) : []

    function fetchBots() {
        setResults([])
        setLoadingText('Loading...')
        const url = `https://api.twitchinsights.net/v1/bots/all`
        fetch(url)
            .then(response => response.json())
            .then(json => {
                const newArr: string[] = []
                const day = 86400
                const activePeriod = Math.floor(Date.now() / 1000) - (day * maxDaysActive)
                json.bots.map((entry: [botName: string, channels: number, num: number]) => {
                    if (!checkedBots.includes(entry[0])) {
                        if (filterChecked && rememberedBots.includes(entry[0])) { return }
                        if (recentChecked && entry[2] < activePeriod) { return }
                        newArr.push(entry[0])
                    }
                })
                setLoadingText('')
                setResults(newArr)
                newArr.length === 0 && setLoadingText(`No accounts found!`)
            })
    }

    function updateList() {
        results.map((bot) => {
            if (!rememberedBots.includes(bot)) { rememberedBots.push(bot) }
        })
        localStorage.setItem(`banned-list`, rememberedBots.toString())
    }

    return (
        <>
            <div>
                <label htmlFor="recent">Only get bots active in the past {maxDaysActive} {maxDaysActive === 1 ? `day` : `days`}?</label>
                <input type="checkbox" id="recent" checked={recentChecked} onChange={() => setRecentChecked(!recentChecked)} />
            </div>

            {rememberedBots.length > 0 &&
                <div>
                    <label htmlFor="filter">Exclude {rememberedBots.length.toLocaleString()} remembered bots?</label>
                    <input type="checkbox" id="filter" checked={filterChecked} onChange={() => setFilterChecked(!filterChecked)} />
                </div>
            }

            <button className="generate-list-button" onClick={fetchBots}>Generate List</button>

            <div className="margin-top-16">
                {results.length ? <>
                    <h4>Total usernames in ban list: {results.length.toLocaleString()}</h4>
                    <button className="copy-button" onClick={() => navigator.clipboard.writeText(results.join(`\n`))}>Copy List</button>
                    <button className="storage-button" onClick={updateList}>Remember List</button>
                    <ul>
                        {results.map((robot, idx) => <li key={idx}>{robot}</li>)}
                    </ul>
                </> : <p>{loadingText}</p>}
            </div>
        </>
    )
}