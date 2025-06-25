import React from "react";
import teamData from "../data/team.json";
import TeamCard from "@partials/TeamCard";
import "./teamanim.css";

function TeamAnim() {
  return (
    <main className="teamanim-wrapper">
      <h1>L’équipe salariée</h1>
      <p className="intro">
        Voici les personnes qui accompagnent vos enfants au quotidien : à la
        cantine, en périscolaire et au centre de loisirs.
      </p>
      <div className="team-grid">
        {teamData.map((personne, index) => (
          <TeamCard key={index} {...personne} />
        ))}
      </div>
    </main>
  );
}

export default TeamAnim;
