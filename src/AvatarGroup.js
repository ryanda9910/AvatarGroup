/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "./Avatar.css";
import { avatars } from "./avatarData";


const avatarSizes = { xs: "2rem", sm: "3rem", md: "4rem", lg: "6rem" };

const Avatar = ({ name, size, image, numExtra, zIndex }) => {
  const initials = numExtra
    ? name
    : name
        .split(" ")
        .map((word) => word[0])
        .join("")
        .toUpperCase();

  return (
    <div
      style={{
        marginLeft: zIndex === 0 ? "unset" : `calc(-${avatarSizes[size]}/2.5)`,
        zIndex
      }}
      className={`avatar ${size}`}
    >
      {image ? <img src={image} alt={`${name}'s profile picture`} /> : initials}
    </div>
  );
};

const AvatarGroup = ({
  size = "md",
  maxLength = 4
}) => {
  const slicedAvatars = avatars.slice(0, maxLength);
  const numExtra = avatars.length - maxLength;

  return (
    <div className="avatar-list">
      {slicedAvatars.map((avatar, index) => (
        <Avatar
          key={index}
          name={avatar.name}
          size={size}
          image={avatar.image}
          zIndex={index}
        />
      ))}
      {numExtra > 0 && (
        <Avatar
          key="extra"
          numExtra={numExtra > 0}
          name={`+${numExtra}`}
          size={size}
          zIndex={maxLength}
        />
      )}
    </div>
  );
};

export default AvatarGroup;
