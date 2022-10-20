import ja from "date-fns/locale/ja";
import enUS from "date-fns/locale/en-US";
import {useEffect, useState} from "react";
import {formatWithOptions} from "date-fns/fp";

const UPDATE_CYCLE = 1_000
const KEY_LOCALE = 'KEY_LOCALE'

const getLocaleFromString = (text: string) => {
    switch (text) {
        case ja.code:
            return ja
        case enUS.code:
            return enUS
        default:
            return enUS
    }
}

export const Clock = () => {
    const [timestamp, setTimestamp] = useState(new Date())
    const [locale, setLocale] = useState(enUS)

    useEffect(() => {
        const timer = setInterval(() => {
            setTimestamp(new Date())
        }, UPDATE_CYCLE)
        return () => clearInterval(timer)
    }, [])

    useEffect(() => {
        const savedLocale = localStorage.getItem(KEY_LOCALE)
        if (savedLocale !== null) {
            setLocale((getLocaleFromString(savedLocale)))
        }
    }, [])

    useEffect(() => {
        localStorage.setItem(KEY_LOCALE, locale.code as string)
    }, [locale])

    const dateToString = formatWithOptions({locale: locale}, 'PPPPpp')
    return (
        <div>
            <p>
                <span id={"current-time-label"}>現在時刻</span>
                <span>:{dateToString(timestamp)}</span>
                <select
                aria-label="hello"
                    value={locale.code}
                    onChange={(e) => setLocale(getLocaleFromString(e.target.value))}>
                    <option value={ja.code}>日本語</option>
                    <option value={enUS.code}>英語</option>
                </select>
            </p>
        </div>
    )
}