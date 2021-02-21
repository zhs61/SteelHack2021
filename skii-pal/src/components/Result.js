import * as React from "react";
import Tooltip from "rc-tooltip";
import "rc-tooltip/assets/bootstrap_white.css";
import "./Result.css";
import { outline } from "../redux/search/search.actions";
import imgLoader from "../assets/imgLoader.gif";
import MoreIcon from "@material-ui/icons/More";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

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

export const Result = ({ data, screenshots }) => (
  <div className="card">
    <a target="_blank" href={decodeURI(data.link)}>
      <img className="preview" src={data.Image} />
    </a>
    <div className="card-body" onClick={() => outline(data.link)}>
      <h4 className="title">
        <a className="ext-link" target="_blank" href="#">
          {data.SKI_group_name}
        </a>
      </h4>
    </div>
  </div>

  // <Card className='root'>
  //     <div className='details'>
  //         <CardMedia
  //             className='cover'
  //             image= {data.Image}
  //             title= {data.location}
  //         />
  //         <CardContent className='content'>
  //             <Typography component="h5" variant="h5">
  //                 {data.SKI_group_name}
  //             </Typography>
  //         </CardContent>
  //         <div className='bottom'>
  //             <MoreIcon />
  //         </div>
  //     </div>
  // </Card>
);
