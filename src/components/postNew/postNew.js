import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createPost } from './postNew.redux';
import { Link, browserHistory } from 'react-router';

const renderField = props => {
    const { meta: { error, touched }, input, placeholder } = props;

    return (
        <div className={`${error && touched ? 'has-danger' : ''}`}>
            <label>{placeholder}</label>
            <div>
                <props.C {...input} className="form-control"/>
                {touched && error && <small className="text-help text-danger">{error}</small>}
            </div>
        </div>
    );
};

class PostNew extends Component {

    onSubmit(props) {
        this.props.createPost(props)
            .then(({ payload: { status } }) => {
                if (status === 200) {
                    browserHistory.push('/');
                }
            });
    }

    render() {
        const { submitting, pristine, handleSubmit } = this.props;

        return (
            <div>
                <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                    <h3>Create A New Post</h3>
                    <div className="form-group">
                        <Field name="title" C="input" component={renderField} placeholder="title"/>
                    </div>
                    <div className="form-group">
                        <Field name="categories" C="input" component={renderField} placeholder="categories"/>
                    </div>
                    <div className="form-group">
                        <Field name="content" C="textArea" component={renderField} placeholder="content"/>
                    </div>
                    <button type="submit" className="btn btn-primary" disabled={submitting || pristine}>Submit</button>
                    <Link to="/" className="btn btn-danger">Cancel</Link>
                </form>
            </div>
        );
    }
}

function validate(values) {
    const errors = {};

    if (!values.title) {
        errors.title = 'Required';
    } else if (values.title.length < 2) {
        errors.title = 'Title is too short';
    } else if (values.title.length > 20) {
        errors.title = 'Title is too long';
    }

    if (!values.categories) {
        errors.categories = 'Required';
    } else if (values.categories.split(' ').length > 6) {
        errors.categories = 'Only 6 categories allowed';
    }

    if (!values.content) {
        errors.content = 'Required';
    } else if (values.content.length < 100) {
        errors.content = 'There isn\'t enough content'
    }

    return errors;
}

export default connect(null, { createPost })(reduxForm({
    form: 'PostNewForm',
    fields: ['title', 'categories', 'content'],
    validate
})(PostNew));