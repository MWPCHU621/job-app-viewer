import React, {Component} from 'react';
import { publicDecrypt } from 'crypto';

class Application extends Component {
    constructor(props){
        super(props);

        this.state = {
            comment: this.props.video.comments,
        }
    }

    render() {
        return(
            <div>
                <React.Fragment>
                    <p>Q: {this.props.getQuestion(this.props.video.questionId)}</p>   
                    <video ref={"Q"+this.props.key} src={this.props.video.src} type = "video/mp4" height ="400px" width="400px" controls></video>
                    <textarea className="comments" value={this.state.comment} onChange={this.handleInput}></textarea>
                    <button className="saveComment">Save</button>
                </React.Fragment>
            </div>
        )
    }

    handleInput = (e) => {
        this.setState({comment: e.target.value})
    }
}

export default Application;