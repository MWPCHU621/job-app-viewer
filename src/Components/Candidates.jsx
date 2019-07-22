import React, {Component} from "react";

import Applications from "./Applications";

class Candidates extends Component {
    constructor(props) {
        super(props);

        this.state = {
            candidates: [],
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
            <div>Hello World</div>
        )
    };
}

export default Candidates;