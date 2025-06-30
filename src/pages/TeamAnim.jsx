import React from "react";
import teamData from "../data/team.json";
import TeamCard from "@partials/TeamCard";
import "./teamanim.css";
import { Helmet } from "react-helmet";

const TeamAnim = () => {
  return (
    <main className="teamanim-wrapper">
      <Helmet>
        <title>Équipe d'animation - Familles Rurales Saint-Georges-des-Gardes</title>
        <meta
          name="description"
          content="Rencontrez l’équipe d’animation qui encadre les enfants au centre, 
          en périscolaire et lors des activités. Dynamisme et bienveillance au rendez-vous !"
        />
      </Helmet>

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
