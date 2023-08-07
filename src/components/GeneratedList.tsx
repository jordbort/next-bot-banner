import { useState } from "react"

interface Props {
    checkedBots: string[]
}

export default function GeneratedList({ checkedBots }: Props) {
    const [results, setResults] = useState<string[]>([])
    const [loadingText, setLoadingText] = useState<string>('Click the button to generate your ban list!')

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
                        newArr.push(entry[0])
                    }
                })
                setLoadingText('')
                setResults(newArr)
            })
    }

    return (
        <>
            <button onClick={fetchBots}>Generate List</button>
            <div className="generated-list">
                {results.length ? <>
                    <h4>Total usernames in ban list: {results.length.toLocaleString()}</h4>
                    <ul>
                        {results.map((robot, idx) => <li key={idx}>{robot}</li>)}
                    </ul>
                </> : <p>{loadingText}</p>}
            </div>
        </>
    )
}