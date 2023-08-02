interface Props {
    checkedBots: string[],
    optionalBots: string[],
    handleClick: any
}
export default function OptionalList(props: Props) {
    const { checkedBots, optionalBots, handleClick } = props
    // console.log(`props:`, props)
    return (
        <div>
            <h3>- optional list -</h3>
            <ul>
                {optionalBots.map((bot, idx) => {
                    const isSelected = checkedBots.includes(bot)
                    return (
                        <li key={idx}>
                            <input type="checkbox" id={bot} name={bot} value={bot} checked={isSelected} onChange={handleClick} />
                            <label htmlFor={bot}>{bot}</label>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}