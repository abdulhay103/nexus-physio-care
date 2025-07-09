import BreadcambUi from "@/components/shared/breadcrumb/BreadcrumbUi";
import { Fragment } from "react";
export const metadata = {
  title: "About",
  description:
    "নেক্সাস ফিজিওথেরাপি কেয়ার হোম ফিজিওথেরাপি সার্ভিস নিয়ে রয়েছে আপনার পাশে। ",
};

export default function layout({ children }) {
  return (
    <Fragment>
      <BreadcambUi text="আমাদের সম্পর্কে জানুন" />
      {children}
    </Fragment>
  );
}
