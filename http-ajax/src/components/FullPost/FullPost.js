import React, { Component } from 'react';
import axios from 'axios';

import './FullPost.css';

class FullPost extends Component {
    state = {
        loadedPost: null,
    }

    componentDidUpdate() {
        // gets into problem of infinite loops when state is updated
        if(this.props.id){
            if(!this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== this.props.id)){
                axios.get('/posts/'+ this.props.id).then( response => {
                    this.setState({loadedPost: response.data});
                });
            }
        }
    }

    deletePostHandler = () => {
        axios.delete('/posts/'+ this.props.id).then(response => {
            console.log("response after delete req: ",response);
        });
    }


    render () {
        let post = <h1 style={{textAlign: 'center'}}>Please select a Post!</h1>;
        if(this.props.id) post = <h1 style={{textAlign: 'center'}}>Loading...</h1>;
        if(this.state.loadedPost){
            post = (
                <div className="FullPost">
                    <h1>{this.state.loadedPost.title}</h1>
                    <p>{this.state.loadedPost.body}</p>
                    <div className="Edit">
                        <button onClick={this.deletePostHandler} className="Delete">Delete</button>
                    </div>
                </div>
    
            );
        }
        return post;
    }
}

export default FullPost;