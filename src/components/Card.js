import React from "react";

export default function Card({ user }) {
  return (
    <li className="github-profile">
      <img src={user.avatar_url} alt="" />
      <div className="info">
        <div className="name">{user.login}</div>
        <a href={user.url} rel="noreferrer" target="_blank">
          View {user.login} github
        </a>
      </div>
    </li>
  );
}
