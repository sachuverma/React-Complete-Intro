import React, { Component } from 'react'
import axios from '../../../axios';
import { Link } from 'react-router-dom';

import Post from '../../../components/Post/Post';
import './Posts.css';

export class Posts extends Component {
    state = {
        posts: [],
    }

    componentDidMount() {
        axios.get('/posts').then((response) => {
            const posts = response.data.slice(0,12);
            const updatedPosts = posts.map(post => {
                return {
                    ...post,
                    author: 'Sachu'
                };
            });

            this.setState({posts: updatedPosts});
            console.log("posts after get req: ",response);
        }).catch(error => {
            this.setState({error: true})
            console.log("error: ",error);
        });
    }

    postSelectedHandler(id) {
        this.setState({selectedPostId: id});
    }


    render() {
        let posts = <h1 style={{textAlign: 'center'}}>Something Went Wrong :(</h1>;
        if(!this.state.error){
            posts = this.state.posts.map( post => {
                return (
                    <Link to={"/posts/" + post.id} key={post.id}>
                        <Post  
                        title={post.title} 
                        author={post.author} 
                        clicked={() => this.postSelectedHandler(post.id)}
                        />
                    </Link>
                    );
                });
        }

        return (
            <div>
                <section className="Posts">
                {posts}
                </section>
            </div>
        );
    }
}

export default Posts;
