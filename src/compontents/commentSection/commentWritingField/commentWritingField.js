import React from 'react'
import { CommentWritingFieldWrapper } from './commentWritingFieldStyled'
import { TextArea } from '../textAreaField/textArea'

export const CommentWritingField = (props) => {
  return (
    <CommentWritingFieldWrapper>
        <div className='left'>
            <img src={require('../../../img/avatars/'+props.Data.currentUser.image.png)} alt=""></img>
        </div>
        <div className='right'>
            <TextArea/>
        </div>
    </CommentWritingFieldWrapper>
  )
}
