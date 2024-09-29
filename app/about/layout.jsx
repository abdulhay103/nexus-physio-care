import BreadcambUi from "@/components/breadcrumb/BreadcrumbUi";
import { Fragment } from "react";

export default function layout({ children }) {
  return (
    <Fragment>
      <BreadcambUi text="আমাদের সম্পর্কে জানুন" />
      {children}
    </Fragment>
  );
}
