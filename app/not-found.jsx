import Link from "next/link";

// Server-side data fetching function
export async function getServerSideProps(context) {
  const { req } = context;
  const domain = req.headers.host; // Get the host from the request headers
  console.log(domain);

  // Assuming `getSiteData` is a function that fetches data using the domain
  const data = await getSiteData(domain);

  return {
    props: {
      data,
    },
  };
}

export default function NotFound({ data }) {
  console.log(data);

  return (
    <div className="flex min-h-screen w-full items-center justify-center">
      <h2>Not Found: </h2>
      <p>Could not find requested resource</p>
      <p>
        View <Link href="/blog">all posts</Link>
      </p>
    </div>
  );
}
