import React from 'react'
import { CommentWritingFieldWrapper } from './commentWritingFieldStyled'
import { TextArea } from '../textAreaField/textArea'

export const ReplyWritingField = (props) => {
  return (
    <CommentWritingFieldWrapper>
            <TextArea/>
    </CommentWritingFieldWrapper>
  )
}
