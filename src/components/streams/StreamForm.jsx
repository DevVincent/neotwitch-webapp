import React from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamForm extends React.Component{

    renderError({ touched, error }){//(meta)
        if (touched && error){          
            return(
                <div className ="ui error message">
                    <div className="header">
                        {error}
                    </div>
                </div>
            )
        }
    }

    renderInput = ({ input, label, meta }) => {//arrow function notation to fix unknown value of this
        //destructiring (formProps.input) ... and everything is send by the Field props, like label
        //new jsx syntax... makes the input inherit all the props from formProps
        const className = `field ${meta.error && meta.touched ? 'error': ''}`
        return( 
            <div className={className}>
                <label>{label}</label>
                <input className="" {...input} autoComplete="off"/>
                {this.renderError(meta)}
            </div>
        );
    }

    onSubmit = (formValues) => {//(event){event.prevent.default()} not neccessary. redux-form takes care of it
        this.props.onSubmit(formValues);
    }

    render(){
        //handle submit comes from the redux-form lib... it takes care of preventing default of event... 
        //so props of onSubmit can actually store more important data like the form values (formValues)

        //props.handleSubmit comes from redux-form
        return(          
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error" >
                <Field 
                    name="title" 
                    component={this.renderInput} 
                    label="Enter Title" 
                />
                <Field 
                    name="description" 
                    component={this.renderInput} 
                    label="Enter Description" 
                />
                <button className="ui button primary">Submit</button>
            </form>
        );
    }
}

const validate = (formValues) => {
    const errors = {};
    if(!formValues.title){
        errors.title = "You must enter a title"
    }
    if(!formValues.description){
        errors.description = "You must enter a description"
    }
    return errors;
}

// export default connect(null, { createStream })(reduxForm({ form: 'streamCreate', validate })(StreamForm));

export default reduxForm({ form: 'streamForm', validate })(StreamForm);

