import { FormEventHandler } from "react"

interface Props {
    handleSubmit: FormEventHandler<HTMLFormElement>
}

export default function CustomBotForm({ handleSubmit }: Props) {
    return (
        <>
            <p>Enter any additional usernames to exclude from your ban list before generating. Usernames must be 4-25 characters, including only letters, numbers, and underscores.</p>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="custom-bot"
                    placeholder="Enter username"
                    maxLength={25}
                    pattern="[a-zA-Z0-9_]{4,25}"
                />
                <button type="submit">Submit</button>
            </form>
        </>
    )
}