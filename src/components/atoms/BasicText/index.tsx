import React from "react"
import {BasicTextWrap} from "./styled";
import {CSSProperties} from "styled-components";

interface IProps {
    text: string;
    styled: CSSProperties;
}

export default function BasicText(props: IProps) {
    const {text, styled} = props
    return <BasicTextWrap styled={styled}>{text}</BasicTextWrap>
}