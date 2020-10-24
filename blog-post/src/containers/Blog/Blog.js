import React, { Component } from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';

import Posts from './Posts/Posts'
// import NewPost from './NewPost/NewPost'
import asyncComponent from '../../hoc/AsyncComponent';
import './Blog.css';

const AsyncNewPost = asyncComponent(() => {
    return import('./NewPost/NewPost');
});

class Blog extends Component {
    state = {
        auth: true
    };

    render () {
        return ( 
            <div>
                <header className="Header">
                    <nav>
                        <ul>
                            <li><NavLink to="/posts" exact>POSTS</NavLink></li>
                            <li><NavLink to={{
                                pathname: "/new-post",
                                hash: "#submit",
                                serach: "?quick-submit=true"
                            }}>NEW POST</NavLink></li>
                        </ul>
                    </nav>
                </header>
                {/*<Route path="/" render={() => <h1 style={{textAlign: "center"}}>Welcome to My React-app</h1>} />*/}
                {/*<Route path="/" exact render={() => <Posts />} />*/}
                <Switch>
                    {this.state.auth ? <Route path="/new-post" component={AsyncNewPost} /> : null}
                    <Route path="/posts" component={Posts} />
                    {/*<Route render={() => <h1>NOT FOUND!</h1>} />*/}
                    <Redirect from="/" to="/posts" />
                </Switch>
                

            </div>
        );
    }
}

export default Blog;