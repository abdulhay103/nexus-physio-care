import BreadcambUi from "@/components/breadcrumb/BreadcrumbUi";

export default function layout({ children }) {
  return (
    <div>
      <BreadcambUi text="This is Service page" />
      {children}
    </div>
  );
}
