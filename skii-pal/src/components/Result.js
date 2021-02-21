import * as React from 'react';
import './Result.css';
import { outline } from '../redux/search/search.actions'
import imgLoader from '../assets/imgLoader.gif';


import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';




const resolveImage = (pagemap, link, screenshots) => {
  if (pagemap && pagemap.cse_image) {
    const [{ src }] = pagemap.cse_image;
    return src;
  } else {
    for (let i = 0; i < screenshots.length; i++) {
      if (screenshots[i].link === link) {
        return screenshots[i].screenshot;
      }
    }
    return imgLoader;
  }
};

export const Result = ({ data, screenshots }) => {
    // <div className="card">
    //     <a target="_blank" href={decodeURI(data.link)}>
    //         <img className="preview" src={data.Image} />
    //     </a>
    //     <div className="card-body" onClick={() => outline(data)}>
    //         <h4 className="title">
    //             <a className="ext-link" target="_blank" href='#'>
    //                 {data.SKI_group_name}
    //             </a>
    //         </h4>
    //         <p>{data.summary.substring(0, 200) + '...'}</p>
    //         <div className='row bottom'>
    //             <EventAvailableIcon />
    //             <p style={{color:'#A9A9A9', marginLeft: '5px'}}>{new Date(data.resgistration_date).toDateString()}</p>
    //         </div>
    //     </div>
    // </div>

    const countClass = data.array_of_user_id.length >= 5? "green":"red"

    return (
        <div className="card" onClick={() => outline(data)}>
            <Grid container spacing={2}>
                <Grid item >
                    <img className='preview' alt={data.location} src={data.Image} />
                </Grid>
                <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={1}>
                        <Grid item xs>
                            <Typography gutterBottom variant="h5" color="primary">
                                {data.SKI_group_name}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" gutterBottom>
                                {data.location}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" gutterBottom>
                                {data.resgistration_date + " "+ data.start_time + " - " + data.end_time}
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                {data.summary.substring(0, 80) + '...'}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Typography variant="subtitle2" className={countClass}>{data.array_of_user_id.length} / 5</Typography>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
};
