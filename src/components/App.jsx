import React from 'react'
import { Router, Route } from 'react-router-dom'
import StreamCreate from './streams/StreamCreate'
import StreamEdit from './streams/StreamEdit'
import StreamDelete from './streams/StreamDelete'
import StreamList from './streams/StreamList'
import StreamShow from './streams/StreamShow'
import Header from './Header'
import history from '../history'

const App = () => {
    //class 269 props of router, param
    return(
        <div className="ui container">           
            <Router history={history}>    
                <div>
                    <Header/>
                    <Route path='/' exact component={StreamList}/>
                    <Route path='/streams/new' exact component={StreamCreate}/>
                    <Route path='/streams/edit/:id' exact component={StreamEdit}/>
                    <Route path='/streams/delete/:id' exact component={StreamDelete}/>
                    <Route path='/streams/show/:id' exact component={StreamShow}/>
                </div>
            </Router>
        </div>
    )

}

export default App;