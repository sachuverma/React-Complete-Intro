import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Posts from './Posts/Posts'
import './Blog.css';

class Blog extends Component {
    render () {
        return ( 
            <div>
                <header className="Header">
                    <nav>
                        <ul>
                            <li><a href="/">HOME</a></li>
                            <li><a href="/new-post">NEW POST</a></li>
                        </ul>
                    </nav>
                </header>
                <Route path="/" render={() => <h1 style={{textAlign: "center"}}>Welcome to My React-app</h1>} />
                {/*<Route path="/" exact render={() => <Posts />} />*/}
                <Route path="/" exact component={Posts} />
            </div>
        );
    }
}

export default Blog;