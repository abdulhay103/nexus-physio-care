import BreadcambUi from "@/components/shared/breadcrumb/BreadcrumbUi";
import { Fragment } from "react";

export const metadata = {
  title: "Services",
  description:
    "বাত, ব্যথা, স্ট্রোক ও প্যারালাইসিস এ বিশেষজ্ঞ ও অভিজ্ঞ ফিজিওথেরাপি চিকিৎসা সেবা প্রদান করে আসছে।",
};

export default function layout({ children }) {
  return (
    <Fragment>
      <BreadcambUi text="আমাদের সেবা সম্পর্কে বিস্তারিত জানুন" />
      {children}
    </Fragment>
  );
}
