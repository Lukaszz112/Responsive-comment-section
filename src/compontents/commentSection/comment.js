import React, {useState} from 'react';
import { CommentWrapper, RepliesWrapper, CurrentUserBar } from './commentStyled';
import  ScoreBar  from './scoreBar/scoreBar';
import {ReactComponent as ReplyIcon} from '../../img/icon-reply.svg';
import {ReactComponent as DeleteIcon} from '../../img/icon-delete.svg';
import {ReactComponent as EditIcon} from '../../img/icon-edit.svg';
import { ReplyWritingField } from './commentWritingField/replyWritingField';

const Comment = (props) => {
    const [reply, setReply] = useState(false);
    const [edit, setEdit] = useState(false);
    const [del, setDel] = useState(false);
    const [id,setId] = useState(0);

    const ReplyHandle = (props) =>{
        setReply(!reply)
        setId(props);
    }
    const EditHandle = () =>{
        setEdit(!edit);
    }
    const DeleteHandle = () =>{
        setDel(!del);
    }

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
                                        <div className="upperLeft">
                                            <img src={require('../../img/avatars/'+comment.user.image.png)} alt="" />
                                            <p className="username">{comment.user.username}</p>
                                            {comment.user.username == props.Data.currentUser.username ? <CurrentUserBar>you</CurrentUserBar>:null}
                                            <p className="createdAt">{comment.createdAt}</p>
                                        </div>
                                        <div className="upperRight">
                                            {comment.user.username == props.Data.currentUser.username ?
                                                <>
                                                    <button onClick={DeleteHandle}><DeleteIcon/>Delete</button>
                                                    <button onClick={EditHandle}><EditIcon/>Edit</button>
                                                </> :
                                                <>   
                                                <button onClick={()=>ReplyHandle(comment.id)}><ReplyIcon/>Reply</button>
                                            </>}
                                        </div>
                                    </div>
                                    <div className="lower">
                                        <div className="commentContent">
                                            <p>{comment.content}</p>
                                        </div>
                                    </div>
                                  </div>
                            </CommentWrapper>
                            {reply && (id == comment.id) ? <ReplyWritingField/> : null}
                                {comment.replies.length>0 ? comment.replies.map((rep) => {
                                    return(
                                        <>
                                            <RepliesWrapper key={rep.id}>
                                                
                                                    <div className="left">
                                                        <ScoreBar data={rep.score}/>
                                                    </div>
                                                    <div className="right">
                                                        <div className="upper">
                                                            <div className="upperLeft">
                                                                <img src={require('../../img/avatars/'+rep.user.image.png)} alt="" />
                                                                <p className="username">{rep.user.username}</p>
                                                                {rep.user.username == props.Data.currentUser.username ? <CurrentUserBar>you</CurrentUserBar>:null}
                                                                <p>{rep.createdAt}</p>
                                                            </div>
                                                            <div className="upperRight">
                                                                {rep.user.username == props.Data.currentUser.username ?
                                                                    <>
                                                                    <button onClick={DeleteHandle}><DeleteIcon/>   Delete</button>
                                                                    <button onClick={EditHandle}><EditIcon/> Edit</button>
                                                                    </> :
                                                                    <>   
                                                                    <button onClick={ReplyHandle}><ReplyIcon/> Reply</button>
                                                                    </> }
                                                            </div>
                                                        </div>
                                                        <div className="lower">
                                                            <div className="commentContent">        
                                                                <p><span className="replyingTo">@{rep.replyingTo} </span>{rep.content}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                            </RepliesWrapper>   
                                            {reply && (id == comment.id) ? <ReplyWritingField/> : null}
                                        </>
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
