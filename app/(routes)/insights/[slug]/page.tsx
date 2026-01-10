import PageClient from "./page.client";

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; // ✅ FIXED – unwrap the Promise
  return <PageClient slug={slug} />;
}
