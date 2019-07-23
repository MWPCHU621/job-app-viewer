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
                    <div>Applications</div>
                    <ul className="applicant-list">
                        <div>
                            {this.state.candidates.map((candidate,key) => (
                                <li key={key} id ={candidate.id} onClick={this.setSelectedCandidate}>{candidate.name}</li>
                            ))}
                        </div>
                    </ul>
                </div>
            )
        }
        else {
            return (
                <div>
                    <div>hello world</div>
                    <button onClick={this.clearSelection}>Back</button>
                    <Applications />
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

    fetchFromApi = (source) => {
        fetch("http://localhost:3010/")
        .then(res => res.json())
        .then((data) => {
          console.log(data);
          this.setState({candidates: data});
        })
        .catch(console.error);
    }
}

export default Candidates;