// import React from 'react';
// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
//     Link
// } from "react-router-dom";


// 1  --  First basic routing

// import React from 'react';
// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
//     Link
// } from "react-router-dom";

// export default function App() {
//     return (
//         <Router>
//             <div>
//                 <nav>
//                     <ul>
//                         <li><Link to="/">Home</Link></li>
//                         <li><Link to="/about">About</Link></li>
//                         <li><Link to="/users">Users</Link></li>
//                     </ul>
//                 </nav>
//
//                 <Switch>
//                     <Route path="/about"><About/></Route>
//                     <Route path="/users"><Users/></Route>
//                     <Route path="/"><Home/></Route>
//                 </Switch>
//             </div>
//         </Router>
//     )
// }
//
// function Home() {
//     return <h2>Home</h2>
// }
//
// function About() {
//     return <h2>About</h2>
// }
//
// function Users() {
//     return <h2>Users</h2>
// }


// 2  -- Nested routing

import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink,
    useRouteMatch,
    useParams
} from "react-router-dom";

export default function App() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li><NavLink exact to="/" activeStyle={{color: "green"}}>Home</NavLink></li>
                        <li><NavLink to="/about" activeStyle={{color: "red"}}>About</NavLink></li>
                        <li><Link to="/topics">Topics</Link></li>
                    </ul>
                </nav>

                <Switch>
                    <Route path="/about"><About/></Route>
                    <Route path="/topics"><Topics/></Route>
                    <Route exact path="/"><Home/></Route>
                </Switch>
            </div>
        </Router>
    )
}

function Home() {
    return <h2>Home</h2>
}

function About() {
    return <h2>About</h2>
}

function Topics() {
    let match = useRouteMatch();

    return (
        <div>
            <h2>Topics</h2>

            <ul>
                <li><Link to={`${match.url}/components`}>Components</Link></li>
                <li><Link to={`${match.url}/props-v-state`}>Props v. State</Link></li>
            </ul>

            <Switch>
                <Route path={`${match.path}/:topicId`}><Topic /></Route>
                <Route path={`${match.path}`}><h3>Please select a topic.</h3></Route>
            </Switch>
        </div>
    );
}

function Topic() {
    let { topicId } = useParams();
    return <h3>Requested topic ID: {topicId}</h3>;
}
