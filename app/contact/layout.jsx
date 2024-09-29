import BreadcambUi from "@/components/breadcrumb/BreadcrumbUi";
import { Fragment } from "react";

export const metadata = {
  title: "জরুরী যোগাযোগ করুন",
  description:
    "আপনি কি জরুরী কোন বিষয় নিয়ে আলোচনা করতে চান? আমরা আপনার গুরুত্বকে প্রাধান্য দিতে চাই। আপনি নিচের তথ্যগুলো ব্যবহার করে আমাদের সাথে যোগাযোগ করতে পারেন।",
};

export default function layout({ children }) {
  return (
    <Fragment>
      <BreadcambUi text="যোগাযোগের অন্যতম মাধ্যম" />
      {children}
    </Fragment>
  );
}
