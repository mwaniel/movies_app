import React, {Component} from 'react'
import { searchMovie } from '../../actions/searchActions';
import {connect} from 'react-redux';

export class SearchForm extends Component  {

    onChange= e=>{
        this.props.searchMovie(e.target.value);
    };
    render() {
            return (
                <div class="jumbotron jumbotron-fluid mt-5 text-center">
                    <div class="container">
                        <h1 class="display-4 mb-3">
                            <i class="fa fa-search" /> Search for movies,TV series ...
                        </h1>
                        <form id="searchform">
                            <input 
                                    type='text'
                                    class="form-control"
                                    name="searchText"
                                    placeholder='Search Movies,TV Series ...' 
                                    onChange={this.onChange}
                                />
                            <button type='submit' cla="btn btn-primary btn-bg mt-3">
                                Search
                            </button>
                            
                        </form>
                    </div>
                </div>
            );
    }
}
const mapStateToProps = state =>({
    text:state.movies.text
});

export default connect(mapStateToProps,{searchMovie})(SearchForm);