import React from 'react';
import { CommentWrapper, RepliesWrapper } from './commentStyled';
import  ScoreBar  from './score/scoreBar';


const Comment = (props) => {
    return (
        <>
            {
                props.Data.comments.map((comment) => {
                    return(
                        <>
                            <CommentWrapper key={comment.id}>
                                <div className="left">
                                    <ScoreBar data={comment.score}/>
                                </div>
                                <div className="right">
                                    <img src={comment.user.image.png} alt="" />
                                    <p>{comment.user.username}</p>
                                    <p>{comment.createdAt}</p>
                                    <div className="commentContent">
                                        <p>{comment.content}</p>
                                    </div>
                                </div>
                            </CommentWrapper>
                                {comment.replies.length>0 ? comment.replies.map((rep) => {
                                    return(
                                        <RepliesWrapper key={rep.id}>
                                            
                                                <div className="left">
                                                    <ScoreBar data={rep.score}/>
                                                </div>
                                                <div className="right">
                                                    <img src={rep.user.image.png} alt="" />
                                                    <p>{rep.user.username}</p>
                                                    <p>{rep.createdAt}</p>
                                                    <div className="commentContent">        
                                                        <p><span className="replyingTo">@{rep.replyingTo} </span>{rep.content}</p>
                                                    </div>
                                                </div>
                                        </RepliesWrapper>   
                                    )
                                }):null}
                        </>
                    )
                })
            }
        </>
    );
}

export default Comment;
