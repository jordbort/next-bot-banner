import CustomBotForm from "./CustomBotForm"

export default function OptionalList({ props }) {
    const { checkedBots, optionalBots, handleCheckClick, handleSubmit, handleChange } = props
    // console.log(`checklist props:`, props)
    return (
        <div>
            <h3>- optional list -</h3>
            <ul>
                {optionalBots.map((bot: string, idx: number) => {
                    const isSelected = checkedBots.includes(bot)
                    return (
                        <li key={idx}>
                            <input type="checkbox" id={bot} name={bot} value={bot} checked={isSelected} onChange={handleCheckClick} />
                            <label htmlFor={bot}>{bot}</label>
                        </li>
                    )
                })}
            </ul>
            <CustomBotForm handleSubmit={handleSubmit} handleChange={handleChange} />
        </div>
    )
}