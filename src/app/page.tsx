"use client"
import AllowedBots from "@/components/AllowedBots"
import OptionalList from "@/components/OptionalList"
import GeneratedList from "@/components/GeneratedList"
// import Link from "next/link"
import { MouseEventHandler, useState } from "react"

export default function Home() {
    const [checkedBots, setCheckedBots] = useState<string[]>([])

    const optionalBots = [
        `7tvapp`,
        `amazeful`,
        `amazefulbot`,
        `blerp`,
        `buttsbot`,
        `commanderroot`,
        `creatisbot`,
        `dinu`,
        `fossabot`,
        `lattemotte`,
        `logviewer`,
        `lolrankbot`,
        `mikuia`,
        `mirrobot`,
        `moobot`,
        `nightbot`,
        `overrustlelogs`,
        `own3d`,
        `playwithviewersbot`,
        `pokemoncommunitygame`,
        `rainmaker`,
        `sery_bot`,
        `songlistbot`,
        `soundalerts`,
        `streamdeckerbot`,
        `streamelements`,
        `streamholics`,
        `streamjar`,
        `streamkit`,
        `streamlabs`,
        `tipeeebot`,
        `vivbot`,
        `wizebot`,
        `wzbot`
    ]

    function handleCheckClick(event: { target: { value: string } }) {
        if (checkedBots.includes(event.target.value)) {
            const idx = checkedBots.indexOf(event.target.value)
            const beforePoint = checkedBots.slice(0, idx)
            const afterPoint = checkedBots.slice(idx + 1)
            const newArr = beforePoint.concat(afterPoint)
            setCheckedBots(newArr)
        } else {
            const newArr = checkedBots.concat(event.target.value)
            setCheckedBots(newArr)
        }
    }

    function handleSelectAll() {
        const newArr = checkedBots.slice()
        optionalBots.forEach(bot => {
            if (!newArr.includes(bot)) {
                newArr.push(bot)
            }
        })
        setCheckedBots(newArr)
    }

    function handleSelectNone() {
        const newArr: string[] = []
        checkedBots.forEach(bot => {
            if (!optionalBots.includes(bot)) {
                newArr.push(bot)
            }
        })
        setCheckedBots(newArr)
    }

    function handleSubmit(event: any) {
        event.preventDefault()
        const input = event.target[0].value.toLowerCase()
        if (!input) { return }
        if (!checkedBots.includes(input)) {
            const newArr = checkedBots.concat(input)
            setCheckedBots(newArr)
            event.target[0].value = ""
        }
    }

    function handleDelete(event: any) {
        const idx = checkedBots.indexOf(event.target.value)
        const beforePoint = checkedBots.slice(0, idx)
        const afterPoint = checkedBots.slice(idx + 1)
        const newArr = beforePoint.concat(afterPoint)
        setCheckedBots(newArr)
    }

    return (
        <main>
            <h1 className="page-title">Twitch ban list generator</h1>
            <p className="description">Use the checklist below if you would like to exclude any usernames from your ban list, generated below. This might include usernames that are technically bots, but are commonly used for moderation or entertainment purposes, such as Nightbot, StreamElements, etc.</p>
            <div className="lists-container">
                <AllowedBots checkedBots={checkedBots} handleDelete={handleDelete} handleClear={() => setCheckedBots([])} />
                <OptionalList checkedBots={checkedBots} optionalBots={optionalBots} handleCheckClick={handleCheckClick} handleSubmit={handleSubmit} handleSelectAll={handleSelectAll} handleSelectNone={handleSelectNone} />
            </div>
            <GeneratedList checkedBots={checkedBots} />
        </main>
    )
}