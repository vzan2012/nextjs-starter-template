const wikipediaURL = "https://en.wikipedia.org/w/api.php";
const getWikiResults = async (searchTerm) => {
  const searchParams = new URLSearchParams({
    action: "query",
    generator: "search",
    gsrsearch: searchTerm,
    gsrlimit: "20",
    prop: "pageimages|extracts",
    exchars: "100",
    exintro: "true",
    explaintext: "true",
    exlimit: "max",
    format: "json",
    origin: "*",
  });

  const response = await fetch(`${wikipediaURL}?${searchParams}`);

  return response.json();
};

export default getWikiResults;
