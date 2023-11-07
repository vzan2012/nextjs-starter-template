const getUser = async (userId) => {
  const userResponse = await fetch(
    `https://jsonplaceholder.org/users/${userId}`
  );

  // if (!userResponse.ok) throw new Error("Failed to fetch user data");
  if (!userResponse.ok) return undefined;

  return userResponse.json();
};

export default getUser;
