import React, {Component} from 'react';

import Application from './Application';
import { thisExpression } from '@babel/types';

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
                    <p>This Candidate does not have any Applications available.</p>
                </div>
            )
        } else {
            return(
                <div>
                    {this.props.application.videos.map((video, key) => (
                        <Application 
                            key={key}
                            video={video}
                            getQuestion={this.getQuestion}
                            saveComment={this.saveComment}
                        />
                    ))}
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

    saveComment = () => {
        fetch('http://localhost:3010/applications',{
            method: 'PATCH',
            body: JSON.stringify({

            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
    }
}

export default Applications;

{/* <video ref="test" src={this.props.application.videos[0].src} type="video/mp4" height="400px" width="400px"></video> */}


