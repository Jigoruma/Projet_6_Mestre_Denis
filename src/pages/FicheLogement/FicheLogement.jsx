import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchAppartment } from "../../services/service";
import Carousel from "../../components/Carrousel/Carousel";
import Rating from "../../components/Rating/Rating";
import Dropdown from "../../components/Dropdown/Dropdown";

function FicheLogement() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [logement, setLogement] = useState();

  useEffect(() => {
    const loadLogement = async () => {
      const appartments = await fetchAppartment();
      const appartment = appartments.find(appart => appart.id === id);
      if (!appartment) navigate("notfound");
      setLogement(appartment);
    };
    loadLogement();
  }, [id, navigate]);

  if (!logement) return null;

  const { pictures, title, location, tags, host, rating, description, equipments } = logement;

  return (
    <main>
      <Carousel slides={pictures} />
      <section className="ficheLogeInfosWrapper">
        <div>
          <div className="ficheLogeTitle">
            <h1>{title}</h1>
            <h2>{location}</h2>
          </div>
          <ul className="ficheLogeTags">
            {tags.map((tag, index) => (
              <li key={`${tag}-${index}`}>{tag}</li>
            ))}
          </ul>
        </div>
        <div className="ficheLogeInfosRight">
          <div className="ficheLogeAuthor">
            <p>{host.name}</p>
            <img src={host.picture} alt={host.name} />
          </div>
          <Rating score={rating} />
        </div>
      </section>
      <section className="ficheLogeDropdowns">
        <Dropdown title="Description" content={description} />
        <Dropdown title="Equipements" content={equipments.map((equip, index) => (
          <ul key={index}>
            <li>{equip}</li>
          </ul>
        ))} />
      </section>
    </main>
  );
}

export default FicheLogement;
