import React, { useState, useEffect } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import Estatus from "../../pages/estatus/Estatus";
import Widget from "../../components/widget/Widget";
import BackDrop from "../../components/backdrop/backdrop";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";
import ProgressBar from "../progress/ProgressBar";
import "react-circular-progressbar/dist/styles.css";
import { Link } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Dropbox from "../../pages/dropbox/Dropbox";

const Home = (selectedMachineData) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="home">
      <div className="homeContainer">
        <Navbar />
        <div className="botondrop">
          {isMobile && (
            <div className="item-right">
              <Link to="/perfil" style={{ textDecoration: "none" }}>
                <Avatar
                  alt="Travis Howard"
                  src="https://cdn.discordapp.com/attachments/1061404202498277458/1105998913749667880/image.png"
                  style={{ width: "80px", height: "80px" }}
                />
              </Link>
            </div>
          )}
        </div>

        <Dropbox selectedMachineData={selectedMachineData} />

        <div className="estatus">
          <Estatus></Estatus>
        </div>

        <div className="charts">
          <Featured title="relojes" />
          <Chart title="Ganancias" aspect={2 / 1} />
        </div>
        <div className="drop">
          <BackDrop></BackDrop>
        </div>
        <div className="listContainer">
          <div className="listTitle">Transacciones</div>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Home;
