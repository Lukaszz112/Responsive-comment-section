import React from 'react'
import { TextAreaWrapper,Button,TextAreaField } from './textAreaStyled'

export const TextArea = () => {
  return (
    <TextAreaWrapper>
      <div className='left'>
          <TextAreaField placeholder="Add a comment..."/>
      </div>
        <div className='right'>
            <Button>Send!</Button>
        </div>
    </TextAreaWrapper>
  )
}
