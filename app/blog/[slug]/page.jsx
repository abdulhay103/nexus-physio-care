import BlogBreadCrumb from "@/components/breadcrumb/BlogBreadCrumb";
import React, { Fragment } from "react";

export default function blogDetails({ params }) {
  const slug = params.slug;
  return (
    <Fragment>
      <BlogBreadCrumb text={slug} pathNames="/blog/blog-details" />
    </Fragment>
  );
}
