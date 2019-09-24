import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Search extends Component {

    state = {
        text: ''
    }

    static propTypes = {
        searchUsers: PropTypes.func.isRequired,
        clearUsers: PropTypes.func.isRequired,
        showClear: PropTypes.bool.isRequired
    }

    onSubmit = e => {
        e.preventDefault()
        this.props.searchUsers(this.state.text)
        this.setState({ text: '' })
    }

    OnChange = e => this.setState({ text: e.target.value })

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit} className="form">
                    <input type="text" name="text" placeholder="Search Users..." value={this.state.text} onChange={this.OnChange}/>
                    <input type="submit" value="Search" className="btn btn-dark btn-block" />
                </form>
                {this.props.showClear && (<button className="btn btn-light btn-block" onClick={this.props.clearUsers} >Clear</button> )}
                
            </div>
        )
    }
}

export default Search
