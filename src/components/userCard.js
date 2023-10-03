import React from "react";

export default function UserCard({ user, city, age }) {
  return (
    <article>
      <h3>{user ?? "Nie dotyczy"} </h3>
      <p>{city ?? "Nie dotyczy"}</p>
      <p>{age ?? "Nie dotyczy"}</p>
    </article>
  );
}
