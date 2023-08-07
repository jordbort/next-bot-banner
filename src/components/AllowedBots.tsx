import { MouseEventHandler } from "react"

interface Props {
    checkedBots: string[]
    handleDelete: MouseEventHandler<HTMLButtonElement>
    handleClear: MouseEventHandler<HTMLButtonElement>
}

export default function CheckedBots({ checkedBots, handleDelete, handleClear }: Props) {
    return (
        <div className="allowed-list">
            <h4>Excluding {checkedBots.length} {checkedBots.length === 1 ? "username" : "usernames"}:</h4>
            {checkedBots.length ? <>
                <button onClick={handleClear}>Clear All</button>
                <ul>
                    {checkedBots.map((bot: string, idx: number) => {
                        return <li key={idx}>
                            <button
                                onClick={handleDelete}
                                className="remove-button"
                                value={bot}>X</button>
                            {bot}
                        </li>
                    })}
                </ul>
            </> : null}
        </div>
    )
}