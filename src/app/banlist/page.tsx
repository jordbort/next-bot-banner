"use client"
import CheckedBots from "@/components/CheckedBots"
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

    function handleClick(event) {
        // console.log(checkedBots)
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

    return (
        <main>
            <h1>Ban List</h1>
            <div className="flex gap-10">
                <CheckedBots checkedBots={checkedBots} optionalBots={optionalBots} />
                <OptionalList checkedBots={checkedBots} optionalBots={optionalBots} handleClick={handleClick} />
            </div>
            <GeneratedList checkedBots={checkedBots} />
        </main>
    )
}