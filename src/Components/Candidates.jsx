import React, {Component} from "react";

import Applications from "./Applications";

import '../stylesheet/candidate.css'

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
        // fetches data for all candidates, questions, as well as applications from the api json-server once component did mount. Change the address if port is different.
        fetch("http://localhost:3010/db")
        .then(res => res.json())
        .then((data) => {
          this.setState({candidates: data.candidates, questions: data.questions, applications: data.applications});
        })
        .catch(console.error);
    }

    render() {
        let {selectedCandidate, questions, candidates} = this.state;

        //no candidates has been selected, show the list of candidates irregardless whether they actually have an application or not.
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
            //a candidate has been selected and should show the candidates application.
            return (
                <div className="mainBlock">
                    <button className="backBtn" onClick={this.clearSelection}>Back to Applicant List</button>
                    <div className="title">{this.state.selectedCandidate.name}</div>
                    <Applications //application for the selected person.
                        selectedCandidate={selectedCandidate}
                        questions={questions}
                        application={this.getApplicationForCandidate(selectedCandidate)}
                    />
                </div>
                
            )
        }
        
    };

    /**
     * @description Sets the candidate as the chosen candidate to view their application
     */
    setSelectedCandidate = (e) => {
        e.preventDefault();
        let selected;
        this.state.candidates.forEach((candidate) => {
            // searching for the right candidate given an id since the html element only contains the candidates name and id.
            if(candidate.id === parseInt(e.target.id)) {
                selected = candidate;
            }
        });

        this.setState({selectedCandidate: selected});
    }

    /**
     * @description resets the selected candidate back to null to rerender page and bring back the list of applicants.
     */
    clearSelection = () => {
        //clears selection to rerender the page using if else renders to imitate a multi page application.
        this.setState({selectedCandidate: null});
    }

    /**
     * @description gets the application associated with the candidate given.
     * @param object $candidate - the candidate to fetch the application for.
     * @return object - the application for the candidate given.
     */
    getApplicationForCandidate = (candidate) => {
        let {applications} = this.state;

        //simple to check to see whether the candidate selected has an application or not.
        if(!Object.keys(candidate).includes("applicationId")) return null;

        //grabs the application for the candidate using the applicationId associated with the candidate.
        let result = applications.filter(application => (
            application.id === candidate.applicationId
        )).pop();

        return result;
    }
}

export default Candidates;