import styled from "styled-components";

import { FormItemStyled } from "../FormItem/FormItem.styled"

export const FormWrapperStyled = styled.form`
    display        : flex;
    position       : relative;
    width          : 100%;
    flex-direction : column;

    & > ${FormItemStyled}:not(:last-child) { margin-bottom : 24px; }
`
