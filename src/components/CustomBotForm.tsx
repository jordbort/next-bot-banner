import { FormEventHandler } from "react"

interface Props {
    handleSubmit: FormEventHandler<HTMLFormElement>
}

export default function CustomBotForm({ handleSubmit }: Props) {
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="custom-bot"
                placeholder="Additional bot"
            />
            <button type="submit">Submit</button>
        </form>
    )
}