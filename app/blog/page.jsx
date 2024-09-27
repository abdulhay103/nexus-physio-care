import AllPosts from "@/components/blog/AllPosts";
import BottomPost from "@/components/blog/BottomPost";
import Top5RecentPost from "@/components/blog/Top5RecentPost";
import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="section-padding-minimal bg-gradient-to-t from-transparent via-cyan-50 to-transparent">
      <Top5RecentPost />
      <AllPosts />
      <BottomPost />
    </main>
  );
}
