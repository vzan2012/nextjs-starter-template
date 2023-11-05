const UserPosts = async ({ promise }) => {
  const post = await promise;
  const content = (
    //   posts.map((post) =>
    <article key={post.id}>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
    </article>
  );
  //   );
  return <>{content}</>;
};

export default UserPosts;
