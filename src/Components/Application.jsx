import React, {Component} from 'react';

//stylesheet
import '../stylesheet/application.css'

class Application extends Component {
    constructor(props){
        super(props);

        this.state = {
            comment: this.props.video.comments,
        }
    }

    render() {
        return(
            <div className="single-question-block">
                <div className="question-video-block">
                    <p className="question">Q: {this.props.getQuestion(this.props.video.questionId)}</p>   
                    <video className="video" ref={"Q"+this.props.key} src={this.props.video.src} type = "video/mp4" height ="450px" width="450px" controls></video>
                </div>
                <div className="comment-block">
                    <textarea className="comments" value={this.state.comment} onChange={this.handleInput} cols="61.5" rows="4"></textarea>
                    <button className="saveComment" onClick={this.saveComment}>Save</button>
                </div>
                

            </div>
        )
    }

    handleInput = (e) => {
        this.setState({comment: e.target.value})
    }

    /**
     * @description updates the comments in the json server using the PATCH request operation.
     */
    saveComment = () => {
        fetch('http://localhost:3010/applications/'+this.props.applicationId,{
            method: 'PATCH',
            body: JSON.stringify({
                src: this.props.video.src,
                questionid: this.props.video.questionId,
                comments: this.state.comment
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }).then(res => {
            //display the right message depending on whether the response is 200 or 400.
            if(res.status === 200) {
                alert("comment Saved");
                console.log(res);
            } else {
                alert("could not save comment")
            }
        }).catch(err => console.error);
    }
}

export default Application;