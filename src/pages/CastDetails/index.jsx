import React, { useEffect, useState } from "react";
import Background from "../../Media asset/Cast Details/Background.png";
import HomeBackground from "../../Media asset/Home page/Background  Elements/Background.png";
import Star from "../../Media asset/Cast Details/Star.png";
import { useParams } from "react-router-dom";
import axios from "axios";
import episodeIcon from "../../Media asset/Cast Details/Icons/SVG/Episode(s).svg";
import GenderIcon from "../../Media asset/Cast Details/Icons/SVG/Gender.svg";
import LocationIcon from "../../Media asset/Cast Details/Icons/SVG/Location.svg";
import originIcon from "../../Media asset/Cast Details/Icons/SVG/origin.svg";
import RedirectIcon from "../../Media asset/Cast Details/Icons/SVG/Redirect.svg";
import speciesIcon from "../../Media asset/Cast Details/Icons/SVG/Species.svg";
import StatusIcon from "../../Media asset/Cast Details/Icons/SVG/Status.svg";

export default function CastDetails() {
  const { id } = useParams();
  const [characterData, setCharacterData] = useState({});
  const [episodes, setEpisodes] = useState("");
  const [episodeData, setEpisodeData] = useState([]);
  const fetchCharacterData = () => {
    axios.get(`https://rickandmortyapi.com/api/character/${id}`).then((res) => {
      setCharacterData(res.data);
      setEpisodes("");
      res.data.episode.forEach((data, index) => {
        let temp = data.split("/");
        let episodeNo = temp[temp.length - 1];

        setEpisodes((prev) => prev + `${episodeNo},`);
      });
    });
  };

  const fetchEpisodeData = () => {
    if (episodes.length != 0) {
      axios
        .get(`https://rickandmortyapi.com/api/episode/${episodes}`)
        .then((res) => {
          setEpisodeData(res.data);
        });
    }
  };

  useEffect(() => {
    fetchCharacterData();
  }, []);
  useEffect(() => {
    fetchEpisodeData();
  }, [episodes]);

  return (
    <div className="castdetails">
      <div className="castdetails-background-top">
        <img src={Background} alt="" className="hide-for-mobiles" />
        <img src={HomeBackground} alt="" className="hide-for-desktop " />
      </div>

      <div className="castdetails-background-left hide-for-mobiles">
        <img src={Star} alt="" />
      </div>
      <div className="nav-padding"></div>

      <div className="castdetails-content">
        <div className="castdetails-content-profile ">
          <div className="castdetails-content-profile-wrapper">
            <h2>{characterData.name}</h2>

            <div className="castdetails-content-profile-wrapper-image gradient-border">
              <img src={characterData.image} alt="" />
            </div>
          </div>
        </div>
        <div className="castdetails-content-data">
          <div className="castdetails-content-data-item gradient-border">
            <div className="castdetails-content-data-item-wrapper">
              <img src={StatusIcon} alt="" />
              <p>Status</p>
              <h3>{characterData.status}</h3>
            </div>
          </div>
          <div className="castdetails-content-data-item gradient-border">
            <div className="castdetails-content-data-item-wrapper">
              <img src={speciesIcon} alt="" />
              <p>Species</p>
              <h3>{characterData.species}</h3>
            </div>
          </div>
          <div className="castdetails-content-data-item gradient-border">
            <div className="castdetails-content-data-item-wrapper">
              <img src={GenderIcon} alt="" />
              <p>Gender</p>
              <h3>{characterData.gender}</h3>
            </div>
          </div>
          <div className="castdetails-content-data-item gradient-border">
            <div className="castdetails-content-data-item-wrapper">
              <img src={originIcon} alt="" />
              <p>Origin</p>
              <div className="castdetails-content-data-item-wrapper-box">
                <h3>{characterData.origin ? characterData.origin.name : ""}</h3>
                <img src={RedirectIcon} alt="" />
              </div>
            </div>
          </div>
          <div className="castdetails-content-data-item gradient-border">
            <div className="castdetails-content-data-item-wrapper">
              <img src={LocationIcon} alt="" />
              <p>Last known Location</p>
              <div className="castdetails-content-data-item-wrapper-box">
                <h3>
                  {characterData.location ? characterData.location.name : ""}
                </h3>
                <img src={RedirectIcon} alt="" />
              </div>
            </div>
          </div>
          <div className="castdetails-content-data-item gradient-border">
            <div className="castdetails-content-data-item-wrapper">
              <img src={episodeIcon} alt="" />
              <p>Episode(S)</p>

              <ul>
                {episodeData &&
                  episodeData.map((data) => (
                    <li key={data.id}>
                      <h3>{data.name}</h3>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
