import React, {Component} from 'react';

import Application from './Application';

class Applications extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        //candidate doesn't have an application, show related message.
        if(this.props.application === null) {
            return (
                <div>
                    <p>This Candidate does not have any Applications available.</p>
                </div>
            )
        } else {
            //candidate has an application, show the application.
            return(
                <div>
                    {this.props.application.videos.map((video, key) => (
                        <Application 
                            key={key}
                            applicationId={this.props.application.id}
                            video={video}
                            getQuestion={this.getQuestion}
                            saveComment={this.saveComment}
                        />
                    ))}
                </div>
            )
        }
    };

    //gets the related question given the questionId.
    getQuestion = (id) => {
        let {questions} = this.props;

        let question = questions.filter(question => (
            question.id === id
        )).pop();

        return question.question;
    }


}

export default Applications;

{/* <video ref="test" src={this.props.application.videos[0].src} type="video/mp4" height="400px" width="400px"></video> */}


