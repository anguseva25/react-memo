const topLeadersLink = "https://wedev-api.sky.pro/api/leaderboard";

export const getRequest = () => {
  return fetch(topLeadersLink, {
    method: "GET",
  }).then(response => {
    if (!response.ok) {
      throw new Error("Что-то я заплутал...");
    }
    if (response.status === 400) {
      throw new Error("Полученные данные не в формате JSON");
    }
    return response.json();
  });
};

export const postRequest = ({}) => {
  return fetch(topLeadersLink, {
    method: "POST",
    body: JSON.stringify(),
  }).then(response => {
    if (!response.ok) {
      throw new Error("Что-то пошло не так");
    }
    if (response.status === 400) {
      throw new Error("Полученные данные не в формате JSON!");
    }
    return response.json();
  });
};
