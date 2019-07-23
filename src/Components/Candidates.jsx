import React, {Component} from "react";

import Applications from "./Applications";

class Candidates extends Component {
    constructor(props) {
        super(props);

        this.state = {
            candidates: [],
            selectedCandidate: {},
        }
    }

    componentDidMount() {
        fetch("http://localhost:3010/candidates")
        .then(res => res.json())
        .then((data) => {
          console.log(data);
          this.setState({candidates: data});
        })
        .catch(console.error);
    }

    render() {
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
}

export default Candidates;