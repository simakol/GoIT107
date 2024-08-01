const BASE_URL = "http://newsapi.org";
const ENDPOINT = "v2/everything";
const API_KEY = "dd82ff3604224bf1b224da3ef75c9135";

axios.defaults.baseURL = BASE_URL;

function getNews(
  { page = 1, pageSize = 5, q = "bitcoin" } = {
    page: 1,
    pageSize: 5,
    q: "bitcoin",
  }
) {
  return axios
    .get(ENDPOINT, {
      params: {
        page,
        pageSize,
        q,
        apiKey: API_KEY,
      },
    })
    .then(({ data }) => data);
}

export { getNews };
