import AllPosts from "@/components/blog/AllPosts";
import BottomPost from "@/components/blog/BottomPost";
import Top5RecentPost from "@/components/blog/Top5RecentPost";
import BlogBreadCrumb from "@/components/breadcrumb/BlogBreadCrumb";
import { Fragment } from "react";

export default function ContactPage() {
  return (
    <Fragment>
      <BlogBreadCrumb text="ব্লগ পড়ুন, নতুন কিছু জানুন" pathNames="/blog" />
      <main className="section-padding-minimal bg-gradient-to-t from-transparent via-cyan-50 to-transparent">
        <Top5RecentPost />
        <AllPosts />
        <BottomPost />
      </main>
    </Fragment>
  );
}
