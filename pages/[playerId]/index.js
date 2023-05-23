import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

const Index = () => {
  const [player, setPlayer] = useState(null);
  //get id from router path
  const router = useRouter();
  const { playerId } = router.query;

  useEffect(() => {
    const options = {
      method: "GET",
      url: `https://www.balldontlie.io/api/v1/players/${playerId}`,
      headers: { "Content-Type": "application/json" },
    };

    axios
      .request(options)
      .then(function (response) {
        setPlayer(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  const showHeight = () => {
    if (player.height_feet && player.height_inches) {
      return (
        <li className="my-4">
          HEIGHT: {player.height_feet}' {player.height_inches}''
        </li>
      );
    } else {
      return <li className="my-4">HEIGHT: N/A</li>;
    }
  };

  return (
    <div className="flex items-center justify-center w-full h-full">
      {player && (
        <div className="flex flex-col w-1/2 border-2 rounded-md shadow-md h-1/2">
          <div className="flex items-center justify-center text-lg font-bold text-white bg-black border-b rounded-t-md h-1/5">
            {player.first_name + " " + player.last_name}
          </div>
          <div>
            <ul className="p-4 text-lg italic ">
              {showHeight()}
              <li className="my-4">POSITION: {player.position ?? "N/A"}</li>
              <li className="my-4">
                TEAM: {player.team.abbreviation ?? "N/A"}
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;

/**
 *
 * {"id":399,"first_name":"Mitchell","height_feet":7,"height_inches":1,"last_name":"Robinson","position":"C","team":{"id":20,"abbreviation":"NYK","city":"New York","conference":"East","division":"Atlantic","full_name":"New York Knicks","name":"Knicks"},"weight_pounds":240}
 */
