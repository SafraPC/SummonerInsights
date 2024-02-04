import { useState } from "react";
import { leagueApi } from "../services/apis";

interface LoginInterface {
  handleLogin: (name: string, gameTag: string) => void;
  loading: boolean;
}

const UseLogin = (): LoginInterface => {
  const [loading, setLoading] = useState(false);

  const handleLogin = async (name: string, gameTag: string) => {
    try {
      setLoading(true);
      const response = await leagueApi.get(
        `https://americas.api.riotgames.com/riot/account/v1/accounts/by-riot-id/${name}/${gameTag}`
      );
      console.log(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return {
    handleLogin,
    loading,
  };
};

export { UseLogin };
