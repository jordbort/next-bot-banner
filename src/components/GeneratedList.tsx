import { useState } from "react"

interface Props {
    checkedBots: string[]
}

export default function GeneratedList({ checkedBots }: Props) {
    const [results, setResults] = useState<string[]>([])
    const [checked, setChecked] = useState<boolean>(false)
    const [loadingText, setLoadingText] = useState<string>('Click the button to generate your ban list!')

    const maxDaysActive: number = 14

    function fetchBots() {
        setResults([])
        setLoadingText('Loading...')
        const url = `https://api.twitchinsights.net/v1/bots/all`
        fetch(url)
            .then(response => response.json())
            .then(json => {
                const newArr: string[] = []
                json.bots.forEach((entry: [botName: string, channels: number, num: number]) => {
                    if (!checkedBots.includes(entry[0])) {
                        if (checked) {
                            const day = 86400
                            const activePeriod = Math.floor(Date.now() / 1000) - (day * maxDaysActive)
                            entry[2] >= activePeriod && newArr.push(entry[0])
                        } else {
                            newArr.push(entry[0])
                        }
                    }
                })
                setLoadingText('')
                setResults(newArr)
            })
    }

    return (
        <>
            <div>
                <label htmlFor="recent">Only get bots active in the past {maxDaysActive} {maxDaysActive === 1 ? `day` : `days`}?</label>
                <input type="checkbox" id="recent" checked={checked} onChange={() => setChecked(!checked)} />
            </div>
            <button onClick={fetchBots}>Generate List</button>
            <div className="margin-top-16">
                {results.length ? <>
                    <h4>Total usernames in ban list: {results.length.toLocaleString()}</h4>
                    <button className="copy-button" onClick={() => navigator.clipboard.writeText(results.join(`\n`))}>Copy List</button>
                    <ul>
                        {results.map((robot, idx) => <li key={idx}>{robot}</li>)}
                    </ul>
                </> : <p>{loadingText}</p>}
            </div>
        </>
    )
}