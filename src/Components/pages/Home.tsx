import React, { FC } from "react";
import { useCallback, useEffect, useState } from "react";
import { GetSummoner } from "@Hooks/externalApi";
import { InsertData } from "@Hooks/api";
import { SummonerData } from "@Interfaces/index";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const Home: FC = () => {
  const [summoner, setSummoner] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSearch = useCallback(async () => {
    setIsLoading(true);
    const {
      data: { puuid },
    } = await GetSummoner(summoner);
    const summonerObj: SummonerData = {
      puuid: puuid,
      name: summoner,
    };
    const summonerData = await InsertData(summonerObj);
    console.log(summonerData);
    setIsLoading(false);
  }, [summoner]);

  useEffect(() => {
    console.log(summoner);
  }, [summoner]);

  return (
    <div className="d-flex flex-column container-fluid vh-100 justify-content-center align-items-center">
      <TextField
        id="outlined-basic"
        label="Username"
        variant="outlined"
        onChange={(e) => setSummoner(e.target.value)}
      />
      <Button
        onClick={handleSearch}
        variant="contained"
        className="mt-4 pl-5 pr-5"
      >
        {isLoading ? "loading..." : "Search"}
      </Button>
    </div>
  );
};
export default Home;
