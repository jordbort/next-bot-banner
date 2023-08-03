import { useState } from "react"

export default function GeneratedList({ props }) {
    const { checkedBots } = props

    const [results, setResults] = useState<string[]>([])
    const [loadingText, setLoadingText] = useState<string>('')

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
        <div>
            <h2>(filtering out: {checkedBots.length})</h2>
            <button onClick={fetchBots}>Generate List</button>
            <p>Number of bots in ban list: {results.length}</p>
            <ol>
                {results.length ? results.map((robot, idx) => <li key={idx}>{robot}</li>) : <li>{loadingText}</li>}
            </ol>
        </div>
    )
}