import { Wifi, WifiOff } from "@mui/icons-material";
import { Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { httpService } from "../httpService";

export default function NetworkConnectivity({ setNetworkStatus }) {
  const [connected, setConnected] = useState(true);
  const isConnected = async () => {
    const { data, error, status } = await httpService("networkConnectivity");

    if (data) {
      setNetworkStatus(true);
      setConnected(true);
    }

    if (error) {
      setNetworkStatus(false);
      setConnected(false);
    }

    if (status) {
      if (status === 403) {
        sessionStorage.removeItem("aguilaClient");

        window.location.assign("/examConcluded");
      }
    }
  };
  useEffect(() => {
    // const timeout = setTimeout(() => {
    //   isConnected();
    // }, 20000);
    // return () => clearTimeout(timeout);
    const interval = setInterval(() => {
      isConnected();
    }, 10 * 1000);
    return () => clearInterval(interval);
  }, [connected]);

  return (
    <div>
      {connected ? (
        <div
          style={{ backgroundColor: "#47824a" }}
          className="p-3 d-flex justify-content-between"
        >
          <div className="text-white">
            <Wifi />
          </div>
          <div className="text-white d-flex align-items-center">
            <Typography variant="subtitle2">Connected to the server</Typography>
          </div>
        </div>
      ) : (
        <div
          style={{ backgroundColor: "#a73a38" }}
          className="p-3 d-flex justify-content-between"
        >
          <div className="text-white">
            <WifiOff />
          </div>
          <div className="text-white d-flex align-items-center">
            <Typography variant="subtitle2">Connection Lost</Typography>
          </div>
        </div>
      )}
    </div>
  );
}
