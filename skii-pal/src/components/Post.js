import React from 'react';

import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import '../Discussion.css';
const Post=( props ) => (
    <Card className="card-posted">
        <CardContent>
            <Typography className="post-body" variant="h5" component="h2">
                {props.postBody}
            </Typography>
        </CardContent>
    </Card>

);

export default Post;