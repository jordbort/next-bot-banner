export default function CustomBotForm(props) {
    const { handleSubmit, customBotForm, setCustomBotForm, handleChange } = props
    // console.log(`customBotForm:`, customBotForm)
    return (
        <form onSubmit={handleSubmit} onChange={handleChange}>
            <input
                type="text"
                name="custom-bot"
                placeholder="Additional bot"
            // onChange={textInput}
            // value={customBot}
            />
            <button type="submit">Submit</button>
        </form>
    )
}