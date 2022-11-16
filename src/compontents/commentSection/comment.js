import React from 'react';
import { CommentWrapper, RepliesWrapper } from './commentStyled';
import  ScoreBar  from './scoreBar/scoreBar';


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
                                    <div className="upper">
                                        <img src={require('../../img/avatars/'+comment.user.image.png)} alt="" />
                                        <p className="username">{comment.user.username}</p>
                                        <p className="createdAt">{comment.createdAt}</p>
                                    </div>
                                    <div className="lower">
                                        <div className="commentContent">
                                            <p>{comment.content}</p>
                                        </div>
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
                                                    <div className="upper">
                                                        <img src={require('../../img/avatars/'+rep.user.image.png)} alt="" />
                                                        <p className="username">{rep.user.username}</p>
                                                        <p>{rep.createdAt}</p>
                                                    </div>
                                                    <div className="lower">
                                                        <div className="commentContent">        
                                                            <p><span className="replyingTo">@{rep.replyingTo} </span>{rep.content}</p>
                                                        </div>
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
