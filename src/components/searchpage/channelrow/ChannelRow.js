import React from "react";
import "./style/ChannelRow.css";
import { Avatar } from "@material-ui/core";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";

function ChannelRow({
  image,
  channel,
  verified,
  subs,
  noOfVideos,
  description,
}) {
  return (
    <div className="channelRow">
      <Avatar className="channelRow__logo" alt={channel} src={image} />
      <div className="channelRow__text">
        <h4>
          {channel} {verified && <CheckCircleIcon className="checkLogo" />}
        </h4>
        <p> {subs} Abone • {noOfVideos} video</p>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default ChannelRow;
