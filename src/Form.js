import React from 'react'
import axios from 'axios'

class Form extends React.Component{
    state = { username: ''
    ,avatarURL:'',
    location:''}



    handleSubmit = (event) => {
        event.preventDefault();
        if(this.state.avatarURL==='') {
            axios.get(`https://api.github.com/users/${this.state.username}`).then(resp => {
                this.setState({avatarURL: resp.data.avatar_url});
                let data = {name:this.state.username,
                    avatar:this.state.avatarURL,
                    location:this.state.location}
                this.props.onSubmit(data)
            })
        }

};

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Name" required
                           onChange={(event)=> this.setState({username: event.target.value})}
                    />
                    <input type="text" placeholder="AvatarURL"
                           onChange={(event)=> this.setState({avatarURL: event.target.value})}
                    />
                    <input type="text" placeholder="Location" required
                           onChange={(event)=> this.setState({location: event.target.value})}
                    />
                    <button type="submit">Add person</button>
                </form>
            </div>
        )
    }
}

export default Form