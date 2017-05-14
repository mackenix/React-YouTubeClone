import React, { Component } from 'react'; //import React and pull off Component as variable called Component
                                          //same thing as 'const Component = React.Component;'

class SearchBar extends Component{
    //every class must have a render method
    //and return some JSX or you'll have an error

    //constructor is reserved for initializing variables and state inside a class
    constructor(props){
        super(props);

        this.state = {term: ''};    
    }

    render(){
        //example of returning with arrow functions. if only one argument, you can drop the ()
     return (
         <div className="search-bar">
               <input value={this.state.term} onChange={term=> this.onInputChange(event.target.value)}/>
        </div>
     );
    }

    onInputChange(term){
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
};

export default SearchBar;