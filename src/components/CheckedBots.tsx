export default function CheckedBots({ props }) {
    const { checkedBots, handleDelete } = props
    // console.log(`checkedBots:`, checkedBots)
    // console.log(`optionalBots:`, optionalBots)
    // console.log(`typeof props:`, typeof props)
    // console.log(`props.props:`, props.props)
    return (
        <div>
            <h3>Checked bots</h3>
            <ul>
                {checkedBots.map((bot: string, idx: number) => {
                    return <li key={idx}>
                        <button
                            onClick={handleDelete}
                            value={bot}>
                            (X)
                        </button>
                        {bot}
                    </li>
                })}
            </ul>
        </div>
    )
}