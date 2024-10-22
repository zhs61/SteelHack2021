import * as React from "react";
import "./Outline.css";
import { makeStyles } from "@material-ui/core/styles";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { AiFillStar } from "react-icons/ai";
import { useSelector } from "react-redux";
import Modal from "@material-ui/core/Modal";
import { FaSkiing } from "react-icons/fa";
import { BiHappyBeaming } from "react-icons/bi";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
}));

const Outline = ({ outline }) => {
  const data = useSelector((state) => state.outline);
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h4 id="simple-modal-title">
        Successfully Join The Team <FaSkiing /> <BiHappyBeaming />
      </h4>
    </div>
  );

  return (
    <div className="outline">
      <h3>{!outline ? null : outline.title}</h3>
      <p>{!outline ? null : outline.text}</p>

      <CardActionArea>
        <CardMedia
          style={{
            height: "40px",
            marginLeft: "113px",
            paddingLeft: "56.25%",
            paddingTop: "56.25%", // 16:9,
            marginTop: "20px",
            width: "30px",
          }}
          className={classes.media}
          image={data.Image || "images/img-1.jpg"}
          title={data.SKI_group_name || "SKI team A"}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {data.SKI_group_name || "SKI team A"}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {data.summary ||
              "Odio aenean sed adipiscing diam. Placerat in egestas erat imperdiet sed euismod. Egestas congue quisque egestas diam in arcu cursus euismod quis. Enim nunc faucibus a pellentesque. Magna etiam tempor orci eu lobortis elementum nibh. Quam adipiscing vitae proin sagittis nisl rhoncus. Eget est lorem ipsum dolor sit amet consectetur. Nec ullamcorper sit amet risus nullam. Facilisis sed odio morbi quis commodo odio aenean sed adipiscing. Scelerisque varius morbi enim nunc. In nulla posuere sollicitudin aliquam ultrices sagittis. Duis tristique sollicitudin nibh sit amet commodo. Quis hendrerit dolor magna eget est lorem ipsum. In ornare quam viverra orci sagittis eu volutpat odio facilisis."}
          </Typography>
          <br />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </CardContent>
      </CardActionArea>
      <br />

      <Button
        className="btns"
        buttonStyle="btn--submmit"
        color="primary"
        variant="contained"
        onClick={handleOpen}
      >
        Join
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
};

export default Outline;
