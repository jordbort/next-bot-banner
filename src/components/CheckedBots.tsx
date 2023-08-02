export default function CheckedBots({ props }) {
    const { checkedBots } = props
    // console.log(`checkedBots:`, checkedBots)
    // console.log(`optionalBots:`, optionalBots)
    // console.log(`typeof props:`, typeof props)
    // console.log(`props.props:`, props.props)
    return (
        <div>
            <h3>Checked bots</h3>
            <ul>
                {checkedBots.map((bot: string, idx: number) => {
                    return <li key={idx}>{bot}</li>
                })}
            </ul>
        </div>
    )
}