import React from 'react'

import { ScoreBarWrapper } from './scoreBarStyled'
import {ReactComponent as PlusIcon} from "../../../img/icon-plus.svg"
import {ReactComponent as MinusIcon} from "../../../img/icon-minus.svg"

class ScoreBar extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            score: this.props.data,
            isClassic: true,
            isRatePlus: false,
            isRateMinus: false,
        }
    }
    render(){
        const scorePlusHandle = () =>{
            if(this.state.isRatePlus){
                this.setState({
                    isClassic: true,
                    isRatePlus: false,
                    isRateMinus: false
                })
            }else this.setState({
                isClassic: false,
                isRateMinus: false,
                isRatePlus: true,
            })
        }

        const scoreMinusHandle = () =>{
            if(this.state.isRateMinus){
                this.setState({
                    isClassic: true,
                    isRatePlus: false,
                    isRateMinus: false
                })
            }else this.setState({
                isClassic: false,
                isRatePlus: false,
                isRateMinus: true,
            })
        }
        return (
            <ScoreBarWrapper>
                <div className="plus" onClick={scorePlusHandle}>
                    <PlusIcon state={this.state.isRatePlus}/>
                </div>
                <div className="score">
                    <p>{this.state.isRatePlus ? this.state.score+1:(this.state.isRateMinus ? this.state.score-1:this.state.score)}</p>
                </div>
                <div className="minus" onClick={scoreMinusHandle} >
                    <MinusIcon state={this.state.isRateMinus}/>
                </div>
            </ScoreBarWrapper>
        )
    }
}

export default ScoreBar;
