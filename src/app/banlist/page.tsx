"use client"
import AllowedBots from "@/components/AllowedBots"
import OptionalList from "@/components/OptionalList"
import GeneratedList from "@/components/GeneratedList"
import { useState } from "react"

export default function BanList() {
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
            // console.log(`already in list!`)
            const idx = checkedBots.indexOf(event.target.value)
            const beforePoint = checkedBots.slice(0, idx)
            const afterPoint = checkedBots.slice(idx + 1)
            const newArr = beforePoint.concat(afterPoint)
            setCheckedBots(newArr)
        } else {
            // console.log(`adding to list...`)
            const newArr = checkedBots.concat(event.target.value)
            setCheckedBots(newArr)
        }
        // console.log(checkedBots)
    }

    function handleSubmit(event: { target: [{ value: string }], defaultPrevented: boolean, preventDefault: any }) {
        event.preventDefault()
        const input = event.target[0].value.toLowerCase()
        if (!input) { return }
        if (!checkedBots.includes(input)) {
            const newArr = checkedBots.concat(input)
            setCheckedBots(newArr)
            event.target[0].value = ""
        }
    }

    function handleSelectAll() {
        const newArr = checkedBots.splice(0)
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

    function handleDelete(event: { target: { value: string } }) {
        // console.log(event)
        // const botName = event.target.value
        const idx = checkedBots.indexOf(event.target.value)
        const beforePoint = checkedBots.slice(0, idx)
        const afterPoint = checkedBots.slice(idx + 1)
        const newArr = beforePoint.concat(afterPoint)
        setCheckedBots(newArr)
    }

    function handleClear() {
        setCheckedBots([])
    }

    // interface Props {
    //     checkedBots: string[],
    //     optionalBots: string[],
    //     handleCheckClick: any,
    //     handleSubmit: any,
    //     handleSelectAll: any,
    //     handleSelectNone: any,
    //     handleDelete: any,
    //     handleClear: any
    // }

    const props = { checkedBots, optionalBots, handleCheckClick, handleSubmit, handleSelectAll, handleSelectNone, handleDelete, handleClear }

    return (
        <main>
            <h1>Allowed bots</h1>
            <div className="flex gap-10">
                <AllowedBots props={props} />
                <OptionalList props={props} />
            </div>
            <GeneratedList props={props} />
        </main>
    )
}