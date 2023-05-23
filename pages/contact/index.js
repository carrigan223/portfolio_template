import GreetingContainer from "@/components/shared/container/greeting/greetingContainer";
import React, { useEffect, useState } from "react";
import axios from "axios";

const Contact = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: "GET",
        url: "https://api-basketball.p.rapidapi.com/teams",
        params: { league: "12", season: "2019-2020" },
        headers: {
          "X-RapidAPI-Key":
            "02a4d94e4fmshd2cbf3379de9e86p11b13djsnca8f7728b0e4",
          "X-RapidAPI-Host": "api-basketball.p.rapidapi.com",
          "Content-Type": "application/json",
        },
      };
      const result = await axios(options);
      console.log(result.data);
      setData(result?.data?.response ?? null);
    };
    fetchData();
  }, []);
  return (
    <>
      {data &&
        data.map((team, index) => {
          return (
            <GreetingContainer
              key={index}
              text={team.name}
              logo={data[1].logo}
              flag={team.country.flag}
            />
          );
        })}
    </>
  );
};

export default Contact;
