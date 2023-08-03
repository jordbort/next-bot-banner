export default function CheckedBots({ props }) {
    const { checkedBots, handleDelete, handleClear } = props
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