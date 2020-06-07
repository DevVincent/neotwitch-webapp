import React from 'react';
import { connect } from 'react-redux';
import { createStream } from '../../actions';
import StreamForm from './StreamForm';

class StreamCreate extends React.Component{

    onSubmit = (formValues) => {//(event){event.prevent.default()} not neccessary. redux-form takes care of it
        this.props.createStream(formValues);
    }

    render(){
        return(         
            <div>
                <h3>Create a Stream</h3> 
                <StreamForm onSubmit={this.onSubmit}/>
            </div>
        );
    }
}

export default connect(null, { createStream })(StreamCreate);