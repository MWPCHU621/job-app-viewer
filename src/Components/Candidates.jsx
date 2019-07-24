import React, {Component} from "react";

import Applications from "./Applications";

class Candidates extends Component {
    constructor(props) {
        super(props);

        this.state = {
            candidates: [],
            selectedCandidate: null,
            questions: [],
            applications: []
        }
    }

    componentDidMount() {
        // fetches data for all candidates, questions, as well as applications from the api json-server. Change the address if port is different.
        fetch("http://localhost:3010/db")
        .then(res => res.json())
        .then((data) => {
          this.setState({candidates: data.candidates, questions: data.questions, applications: data.applications});
        })
        .catch(console.error);
    }

    render() {
        let {selectedCandidate, questions, applications, candidates} = this.state;

        if(selectedCandidate === null) {
            return(
                <div>
                    <div>Applicant List</div>
                    <ul className="applicant-list">
                        <div>
                            {candidates.map((candidate,key) => (
                                <li key={key} className="applicantName" id ={candidate.id} onClick={this.setSelectedCandidate}>{candidate.name}</li>
                            ))}
                        </div>
                    </ul>
                </div>
            )
        }
        else {
            return (
                <div>
                    <div>{this.state.selectedCandidate.name}</div>
                    <button onClick={this.clearSelection}>Back</button>
                    <Applications 
                        selectedCandidate={selectedCandidate}
                        questions={questions}
                        application={this.getApplicationForCandidate(selectedCandidate)}
                    />
                </div>
                
            )
        }
        
    };

    setSelectedCandidate = (e) => {
        e.preventDefault();
        let selected;
        this.state.candidates.forEach((candidate) => {
            if(candidate.id === parseInt(e.target.id)) {
                selected = candidate;
            }
        });

        this.setState({selectedCandidate: selected});
    }

    clearSelection = () => {
        this.setState({selectedCandidate: null});
    }

    getApplicationForCandidate = (candidate) => {
        let {applications} = this.state;

        if(!Object.keys(candidate).includes("applicationId")) return null;

        let result = applications.filter(application => (
            application.id === candidate.applicationId
        )).pop();

        return result;
    }
}

export default Candidates;