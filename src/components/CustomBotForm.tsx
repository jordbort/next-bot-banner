export default function CustomBotForm(props: any) {
    const { handleSubmit } = props
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