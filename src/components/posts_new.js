import React, {Component} from 'react';
import { reduxForm } from 'redux-form';

class PostsNew extends Component {
  //redux form adds to this.props
  render () {
    // fields object, equivalent to: const title = this.props.fields.title
    const {fields: {title, categories, content}, handleSubmit} = this.props;
    // console.log(title);
    return (
      <form onSubmit={handleSubmit}>
        <h3>Create A New Post</h3>
    
        <div className="form-group">
          <label>Title</label>
          // with {...title}
          // everything will show up like this: onChange={title.onChange}
          <input type="text" className="form-control" {...title}/>
        </div>

        <div className="form-group">
          <label>Categories</label>
          <input type="text" className="form-control" {...categories}/>
        </div>
        
        <div className="form-group">
          <label>Content</label>
          <textarea type="text" className="form-control" {...content}/>
        </div>
        
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    );
  }
}

export default reduxForm(
{
  form: 'PostsNewForm',
  fields: ['title', 'categories', 'content']
})(PostsNew);