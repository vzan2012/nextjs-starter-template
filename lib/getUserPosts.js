const getUserPosts = async (userId) => {
  const userResponse = await fetch(
    `https://jsonplaceholder.org/posts?userId=${userId}`,
    {
      // cache: ""
      next: {
        revalidate: 60,
      },
    }
  );

  // if (!userResponse.ok) throw new Error("Failed to fetch user data");
  if (!userResponse.ok) return undefined;

  return userResponse.json();
};

export default getUserPosts;
