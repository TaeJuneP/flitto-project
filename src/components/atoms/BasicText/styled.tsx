import styled, {CSSProperties} from "styled-components"

interface TextStyleProps {
    styled: CSSProperties
}

function attrsTextStyle(props: TextStyleProps & React.ComponentProps<'div'>) {
    const {styled} = props;
    const color = styled.color;
    const fontSize = styled.fontSize;
    const fontWeight = styled.fontWeight;
    const textAlign = styled.textAlign
    return {style: {color, fontSize, fontWeight, textAlign}};
}

export const BasicTextWrap = styled.div.attrs(attrsTextStyle)<TextStyleProps>``

