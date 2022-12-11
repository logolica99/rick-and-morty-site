import React, { useEffect, useState } from "react";
import Background from "../../Media asset/Cast/Background.png";
import HomeBackground from "../../Media asset/Home page/Background  Elements/Background.png";
import Star from "../../Media asset/Cast/Star.png";
import axios from "axios";
import CastCard from "../../components/CastCard";
import { Link } from "react-router-dom";
import searchIcon from "./search.svg";
import DownChevronIcon from "./downchevron.svg";
import UpChevronIcon from "./topchevron.svg";
import ArrowLeftIcon from "./arrow-left.svg";
import ArrowRightIcon from "./arrow-right.svg";

export default function Cast() {
  const [castData, setCastData] = useState([]);
  const [pageInfo, setPageInfo] = useState({});
  const [selectedSearch, setSelectedSearch] = useState("Location");
  const [showMenu, setShowMenu] = useState(false);
  const [pageNo, setPageNo] = useState(1);

  const fetchCastData = () => {
    axios
      .get(`https://rickandmortyapi.com/api/character?page=${pageNo}`)
      .then((res) => {
        setCastData(res.data.results);
        setPageInfo(res.data.info);
      });
  };
  useEffect(() => {
    fetchCastData();
  }, []);
  useEffect(() => {
    fetchCastData();
  }, [pageNo]);

  return (
    <div className="cast">
      <div className="cast-background-top">
        <img src={Background} alt="" className="hide-for-mobiles" />
        <img src={HomeBackground} alt="" className="hide-for-desktop " />
      </div>

      <div className="cast-background-left hide-for-mobiles">
        <img src={Star} alt="" />
      </div>

      <div className="nav-padding"></div>
      <div className="cast-content">
        <div className="cast-content-header">
          <h2>The Cast</h2>
          <div className="cast-content-header-search">
            <div
              className="cast-content-header-search-select"
              onClick={() => setShowMenu((prev) => !prev)}
            >
              <p>{selectedSearch}</p>
              {!showMenu ? (
                <img src={UpChevronIcon} alt="" />
              ) : (
                <img src={DownChevronIcon} alt="" />
              )}
              <div
                className="cast-content-header-search-select-menu"
                style={{ display: showMenu ? "flex" : "none" }}
              >
                <div
                  className="cast-content-header-search-select-menu-item"
                  onClick={() => {
                    setSelectedSearch("Characters");
                  }}
                >
                  <p>Characters</p>
                </div>
                <div
                  className="cast-content-header-search-select-menu-item"
                  onClick={() => {
                    setSelectedSearch("Location");
                  }}
                >
                  <p>Location</p>
                </div>
                <div
                  className="cast-content-header-search-select-menu-item"
                  onClick={() => {
                    setSelectedSearch("Episodes");
                  }}
                >
                  <p>Episodes</p>
                </div>
              </div>
            </div>

            <div className="cast-content-header-search-inputbox">
              <img src={searchIcon} alt="" />
              <input type="text" placeholder="Search" />
            </div>
          </div>
        </div>

        <div className="cast-content-list">
          {castData.map((data) => (
            <Link
              to={`/cast-details/${data.id}`}
              style={{ textDecoration: "none" }}
              key={data.id}
            >
              <CastCard image={data.image} name={data.name} />
            </Link>
          ))}
        </div>
        <div className="cast-content-pagination">
          <p>Page</p>
          <img
            src={ArrowLeftIcon}
            alt=""
            onClick={() => {
              if (pageNo != 1) {
                setPageNo((prev) => prev - 1);
              }
            }}
          />
          <div className="cast-content-pagination-number">
            <p>{pageNo}</p>
          </div>
          <img
            src={ArrowRightIcon}
            alt=""
            onClick={() => {
              if (pageNo != pageInfo.pages) {
                setPageNo((prev) => prev + 1);
              }
            }}
          />
          <p>of {pageInfo.pages}</p>
        </div>
      </div>
    </div>
  );
}
