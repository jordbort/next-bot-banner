import { MouseEventHandler } from "react"

interface Props {
    checkedBots: string[]
    handleDelete: MouseEventHandler<HTMLButtonElement>
    handleClear: MouseEventHandler<HTMLButtonElement>
}

export default function CheckedBots({ checkedBots, handleDelete, handleClear }: Props) {
    return (
        <div>
            <button onClick={handleClear}>Clear All</button>
            <ul>
                {checkedBots.map((bot: string, idx: number) => {
                    return <li key={idx}>
                        <button
                            onClick={handleDelete}
                            value={bot}>
                            {`[`}X{`]`}
                        </button>
                        {bot}
                    </li>
                })}
            </ul>
        </div>
    )
}