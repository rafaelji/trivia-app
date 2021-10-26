import api from "../config/api";

const getData = async () => {
  const data = await api.get("?amount=10&difficulty=hard&type=boolean");

  if (data.status === 200) {
    return data.data.results.map((result, index) => ({
      ...result,
      index: index + 1,
    }));
  }

  throw new Error("Error happened when retrieving data");
};

export { getData };
