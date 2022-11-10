import React from 'react'

import { ScoreBarWrapper } from './scoreBarStyled'
import {ReactComponent as PlusIcon} from "../../../img/icon-plus.svg"
import {ReactComponent as MinusIcon} from "../../../img/icon-minus.svg"

class ScoreBar extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            score: this.props.data,
            myRate: false,
            isRatePlus: false,
            isRateMinus: false,
        }
    }
    render(){
        const scorePlusHandle = () =>{
            if(this.state.isRateMinus || !this.state.myRate){
                this.setState({
                    score:this.props.data+1,
                    myRate: true,
                    isRatePlus: true,
                    isRateMinus: false
                })
            }else this.setState({
                score:this.props.data,
                myRate: false,
            })
        }

        const scoreMinusHandle = () =>{
            if(this.state.isRatePlus || !this.state.myRate){
                this.setState({
                    score:this.props.data-1,
                    myRate: true,
                    isRatePlus: false,
                    isRateMinus: true
                })
            }else this.setState({
                score:this.props.data,
                myRate: false,
            })
        }
        return (
            <ScoreBarWrapper>
                <div className="plus" onClick={scorePlusHandle} state={this.state.isRatePlus}>
                    <PlusIcon/>
                </div>
                <div className="score" state={this.state.myRate}>
                    <p>{this.state.score}</p>
                </div>
                <div className="minus" onClick={scoreMinusHandle} state={this.state.isRateMinus}>
                    <MinusIcon/>
                </div>
            </ScoreBarWrapper>
        )
    }
}

export default ScoreBar;
