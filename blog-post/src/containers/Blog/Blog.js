import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';

import Posts from './Posts/Posts'
import FullPost from './FullPost/FullPost'
import NewPost from './NewPost/NewPost'
import './Blog.css';

class Blog extends Component {
    render () {
        return ( 
            <div>
                <header className="Header">
                    <nav>
                        <ul>
                            <li><NavLink to="/" exact>HOME</NavLink></li>
                            <li><NavLink to={{
                                pathname: "/new-post",
                                hash: "#submit",
                                serach: "?quick-submit=true"
                            }}>NEW POST</NavLink></li>
                        </ul>
                    </nav>
                </header>
                <Route path="/" render={() => <h1 style={{textAlign: "center"}}>Welcome to My React-app</h1>} />
                {/*<Route path="/" exact render={() => <Posts />} />*/}
                <Route path="/" exact component={Posts} />
                <Route path="/new-post" exact component={NewPost} />
                <Route path="/posts/:id" exact component={FullPost} />

            </div>
        );
    }
}

export default Blog;