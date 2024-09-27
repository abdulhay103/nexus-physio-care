import BreadcambUi from "@/components/breadcrumb/BreadcrumbUi";
import { Fragment } from "react";

export default function layout({ children }) {
  return (
    <Fragment>
      <BreadcambUi text="আমাদের সেবা সম্পর্কে বিস্তারিত জানুন" />
      {children}
    </Fragment>
  );
}
