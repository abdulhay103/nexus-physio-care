import BlogBreadCrumb from "@/components/breadcrumb/BlogBreadCrumb";
import React from "react";

export default function allBlogs() {
  return (
    <div>
      <BlogBreadCrumb text="Search Result" pathNames="/blog/all-blogs" />
      All-Blogs
    </div>
  );
}
