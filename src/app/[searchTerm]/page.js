import getWikiResults from "../../../lib/getWikiResults";

// Generate Metadata

const SearchResults = async ({ params: { searchTerm } }) => {
  const wikiData = await getWikiResults(searchTerm);
  const results = wikiData?.query?.pages;

  const content = (
    <main className="bg-slate-200 mx-auto max-w-lg py-1 min-h-screen">
      {results ? (
        Object.values(results).map((result, id) => (
          <p key={id}>{JSON.stringify(result)}</p>
        ))
      ) : (
        <h2 className="p-2 text-xl">{`${searchTerm} - Not Found`}</h2>
      )}
    </main>
  );
  return content;
};

export default SearchResults;
