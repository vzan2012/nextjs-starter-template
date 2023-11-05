const getUser = async (userId) => {
  const userResponse = await fetch(
    `https://jsonplaceholder.org/users/${userId}`
  );

  if (!userResponse.ok) throw new Error("Failed to fetch user data");

  return userResponse.json();
};

export default getUser;
