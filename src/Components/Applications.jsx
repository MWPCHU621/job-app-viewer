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
                            application={this.props.application}
                            video={video}
                            getQuestion={this.getQuestion}
                            saveComment={this.saveComment}
                        />
                    ))}
                </div>
            )
        }
    };

    /**
     * @description gets the question given the question Id.
     * @param id $number - the id of the question to search for.
     * @return string - the question associated with the given id.
     */
    getQuestion = (id) => {
        let {questions} = this.props;

        //null check for questions
        if(!questions || !Array.isArray(questions)) {
            console.error("ERROR: question entity does not exist in database.");
            return null;
        }

        let question = questions.filter(question => (
            question.id === id
        )).pop();

        return question.question;
    }

}

export default Applications;


