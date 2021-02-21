import React, {Component} from 'react';
import '../../Discussion.css';
import {Button} from '@material-ui/core';
import ReactDOM from 'react-dom';
import TextField from '@material-ui/core/TextField';

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

import Post from '../Post';

class Discussion extends Component {
    constructor ( props ) {
        super( props );
        this.addPost=this.addPost.bind( this );
        this.handlePostChange=this.handlePostChange.bind( this );

        this.state={
            posts: [],
            newPostBody: '',
        }
    }

    addPost() {
        const newState=Object.assign( {}, this.state );
        newState.posts.push( this.state.newPostBody );
        newState.newPostBody='';
        this.setState( newState );
    }

    handlePostChange( ev ) {
        this.setState( {
            newPostBody: ev.target.value
        } )
    }
    render() {
        return (
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <br />

                <h2 > If you have any questions? please contact us !</h2>

                <div>
                    {
                        this.state.posts.map( ( postBody, idx ) => {
                            return (
                                <Post key={idx} postBody={postBody} />
                            )
                        } )
                    }

                </div>

                <div className="post-header">
                    <br />
                    <Card className="card">
                        <CardContent>
                            <Typography>
                                <textarea className="form-textarea" onChange={this.handlePostChange} />
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="large" className="post-btn" onClick={this.addPost}>Post Your questions</Button>
                        </CardActions>
                    </Card>

                </div>
            </div>
        );
    }
}
export default Discussion;
