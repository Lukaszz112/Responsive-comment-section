import React from 'react'
import { ScoreBarWrapper } from './scoreBarStyled'
import {ReactComponent as PlusIcon} from "../../../img/icon-plus.svg"

export default function ScoreBar() {
  return (
    <ScoreBarWrapper>
        <PlusIcon/>
    </ScoreBarWrapper>
  )
}
