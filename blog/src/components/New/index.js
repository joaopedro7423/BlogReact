import React, {Component} from 'react'
import {Link, withRouter, } from 'react-router-dom';

class New extends Component{
    render(){
        return(
            <div>
                <header id="new">
                    <Link to="/dashboard">voltar</Link>
                </header>
            </div>
        );
    }
}

export default withRouter(New);