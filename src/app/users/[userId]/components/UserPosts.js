import Link from "next/link";

const UserPosts = async ({ promise }) => {
  const post = await promise;
  const content = (
    //   posts.map((post) =>
    <article key={post.id}>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <br />
      <br />
      <br />
      <Link href="/users">Back to list of users</Link>
    </article>
  );
  //   );
  return <>{content}</>;
};

export default UserPosts;
