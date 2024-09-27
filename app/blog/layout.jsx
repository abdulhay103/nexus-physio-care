import { Fragment } from "react";

export const metadata = {
  title: "Blogs",
  description:
    "ফিজিওথেরাপি সম্পর্কিত নতুন টিপস ও ট্রিকস পেতে নিয়মিত আমাদের ব্লগ গুলো পড়ুন। ",
};

export default function BlogLayout({ children }) {
  return <Fragment>{children}</Fragment>;
}
