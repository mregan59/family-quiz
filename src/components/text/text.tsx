import * as React from "react"
import { Text as KittenText } from "@ui-kitten/components"
import { TextProps } from "./text.props"
import { translate } from "../../i18n"


export function Text(props: TextProps) {
    // grab the props
    const { tx, txOptions, children, ...rest } = props

    // figure out which content to use
    const i18nText = tx && translate(tx, txOptions)
    const content = i18nText || children

    return (
        <KittenText {...rest}>
            {content}
        </KittenText>
    )
}
