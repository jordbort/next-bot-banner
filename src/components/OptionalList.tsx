import { ChangeEventHandler, FormEventHandler, MouseEventHandler } from "react"
import CustomBotForm from "./CustomBotForm"

interface Props {
    checkedBots: string[]
    optionalBots: string[]
    handleCheckClick: ChangeEventHandler<HTMLInputElement>
    handleSubmit: FormEventHandler<HTMLFormElement>
    handleSelectAll: MouseEventHandler<HTMLButtonElement>
    handleSelectNone: MouseEventHandler<HTMLButtonElement>
}

export default function OptionalList({ checkedBots, optionalBots, handleCheckClick, handleSubmit, handleSelectAll, handleSelectNone }: Props) {
    return (
        <div className="optional-list">
            <h4>Optional known bots to exclude:</h4>
            <button onClick={handleSelectAll}>Select All</button>
            <button onClick={handleSelectNone}>Select None</button>
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
            <hr />
            <CustomBotForm handleSubmit={handleSubmit} />
        </div>
    )
}
