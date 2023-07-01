"use client";
import { useState } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

export default function Tabs({ rocket }) {
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box className="mt-5" sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList
            onChange={handleChange}
            aria-label="lab API tabs example"
            textColor="white"
          >
            <Tab label="Overview" value="1" />
            <Tab label="Engine" value="2" />
            <Tab label="Payloads" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <div>
            <div className="flex justify-between mb-3 border-b-[1px] pb-4 border-[#1976d2]">
              <h2 className="text-[14px]">Height</h2>
              <h3>
                {rocket.height.meters}m || {rocket.height.feet}m
              </h3>
            </div>
            <div className="flex justify-between mb-3 border-b-[1px] pb-4 border-[#1976d2]">
              <h2 className="text-[14px]">Diameter</h2>
              <h3>
                {rocket.diameter.meters}m || {rocket.diameter.feet}m
              </h3>
            </div>
            <div className="flex justify-between mb-3 border-b-[1px] pb-4 border-[#1976d2]">
              <h2 className="text-[14px]">Mass</h2>
              <h3>
                {rocket.mass.kg}kg || {rocket.mass.lb}lb
              </h3>
            </div>
          </div>
        </TabPanel>
        <TabPanel value="2">
          <div className="flex justify-between mb-3 border-b-[1px] pb-4 border-[#1976d2]">
            <h1 className="text-[14px] capitalize">Type</h1>
            <h2>
              {rocket.engines.type} <span>#{rocket.engines.number}</span>
            </h2>
          </div>
          <div className="flex justify-between mb-3 border-b-[1px] pb-4 border-[#1976d2]">
            <h1 className="text-[14px] capitalize">Version</h1>
            <h2>{rocket.engines.version}</h2>
          </div>
          <div className="flex justify-between mb-3 border-b-[1px] pb-4 border-[#1976d2]">
            <h1 className="text-[14px] capitalize">Layout</h1>
            <h2>{rocket.engines.layout}</h2>
          </div>
          <div className="flex justify-between mb-3 border-b-[1px] pb-4 border-[#1976d2]">
            <h1 className="text-[14px] capitalize">Propellant 1</h1>
            <h2>{rocket.engines.propellant_1}</h2>
          </div>
          <div className="flex justify-between mb-3 border-b-[1px] pb-4 border-[#1976d2]">
            <h1 className="text-[14px] capitalize">Propellant 2</h1>
            <h2>{rocket.engines.propellant_2}</h2>
          </div>
        </TabPanel>
        <TabPanel value="3">
          {rocket.payload_weights.map((payloads,id) => {
            return (
              <div key={id} className="flex justify-between mb-3 border-b-[1px] pb-4 border-[#1976d2]">
                <h1 className="text-[14px] capitalize">
                  {payloads.name}
                  <span> #{payloads.id}</span>
                </h1>
                <h2>
                  {payloads.kg}kg || {payloads.lb}
                  lb
                </h2>
              </div>
            );
          })}
        </TabPanel>
      </TabContext>
    </Box>
  );
}
