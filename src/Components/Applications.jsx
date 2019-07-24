import React, {Component} from 'react';

class Applications extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        if(this.props.application === null) {
            return (
                <div>
                    <div>Hello Application</div>
                    <p>This Candidate does not have any Applications available.</p>
                </div>
            )
        } else {
            return(
                <div>
                    <div>Hello Application</div>
                    <video ref="test" src={this.props.application.videos[0].src} type="video/mp4" height="400px" width="400px"></video>
                </div>
            )
        }
        
    };

    playVideo = () => {
        this.refs.test.play();
    }

    pauseVideo = () => {
        this.refs.test.pause();
    }

    getQuestion = (id) => {
        let {questions} = this.props;

        let question = questions.filter(question => (
            question.id === id
        )).pop();

        return question.question;
    }
}

export default Applications;


