import * as React from "react";
import Tooltip from "rc-tooltip";
import "rc-tooltip/assets/bootstrap_white.css";
import "./Result.css";
import { outline } from "../redux/search/search.actions";
import imgLoader from "../assets/imgLoader.gif";
import MoreIcon from "@material-ui/icons/More";
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
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
        <div className="card-body" onClick={() => outline(data)}>
            <h4 className="title">
                <a className="ext-link" target="_blank" href='#'>
                    {data.SKI_group_name}
                </a>
            </h4>
            <p>{data.summary.substring(0, 200) + '...'}</p>
            <div className='bottom'>
                <EventAvailableIcon />
                <p style={{color:'#A9A9A9', marginLeft: '15px'}}>{new Date(data.resgistration_date).toDateString()}</p>
            </div>
        </div>
    </div>
);
