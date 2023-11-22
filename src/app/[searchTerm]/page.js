import getWikiResults from "../../../lib/getWikiResults";
import Item from "./components/Item";

// Generate Metadata
export const generateMetadata = async ({ params: { searchTerm } }) => {
  const displaySearchTerm = searchTerm.replaceAll("%20", " ");
  const wikiData = await getWikiResults(searchTerm);

  if (!wikiData.query?.pages) {
    return {
      title: `${displaySearchTerm} - Not Found`,
    };
  }

  return {
    title: `${displaySearchTerm}`,
    description: `Search results for ${displaySearchTerm}`,
  };
};

const SearchResults = async ({ params: { searchTerm } }) => {
  const displaySearchTerm = searchTerm.replaceAll("%20", " ");
  const wikiData = await getWikiResults(searchTerm);
  const results = wikiData?.query?.pages;

  const content = (
    <main className="bg-slate-200 mx-auto max-w-lg py-1 min-h-screen">
      {results ? (
        Object.values(results).map((result) => (
          <Item key={result.pageid} result={result} />
        ))
      ) : (
        <h2 className="p-2 text-xl">{`${displaySearchTerm} - Not Found`}</h2>
      )}
    </main>
  );
  return content;
};

export default SearchResults;
