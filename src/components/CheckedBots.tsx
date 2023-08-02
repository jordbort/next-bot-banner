interface Props {
    checkedBots: string[],
    optionalBots: string[]
}
export default function CheckedBots(props: Props) {
    const { checkedBots, optionalBots } = props
    // console.log(`checkedBots:`, checkedBots)
    // console.log(`optionalBots:`, optionalBots)
    // console.log(`props:`, props)
    return (
        <div>
            <h3>Checked bots</h3>
            <ul>
                {checkedBots.map((bot, idx) => {
                    return <li key={idx}>{bot}</li>
                })}
            </ul>
        </div>
    )
}