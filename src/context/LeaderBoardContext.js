import { createContext, useEffect, useState } from "react";
import { getRequest } from "../api/LeadersAPI";

export const LeadersContext = createContext(null);
export const leadersTimeSorting = leaders => leaders.sort((a, b) => a.time - b.time);

async function updateData() {
  getRequest().then(leaders => {
    const sortingLeaders = leadersTimeSorting(leaders.leaders);
    //setLeaders(sortingLeaders.splice(0, 10));
  });
}

export const LeadersProvider = ({ children }) => {
  const [leaders, setLeaders] = useState([]);

  useEffect(() => {
    getRequest().then(leaders => {
      const sortingLeaders = leadersTimeSorting(leaders.leaders);
      setLeaders(sortingLeaders.splice(0, 10));
    });
  }, []);

  return <LeadersContext.Provider value={{ leaders, setLeaders }}>{children}</LeadersContext.Provider>;
};
