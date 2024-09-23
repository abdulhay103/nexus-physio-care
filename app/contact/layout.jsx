import BreadcambUi from "@/components/breadcrumb/BreadcrumbUi";

export default function layout({ children }) {
  return (
    <div>
      <BreadcambUi text="This is Contact page" />
      {children}
    </div>
  );
}
