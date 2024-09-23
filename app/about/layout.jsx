import BreadcambUi from "@/components/breadcrumb/BreadcrumbUi";

export default function layout({ children }) {
  return (
    <div>
      <BreadcambUi text="আমাদের সম্পর্কে জানুন" />
      {children}
    </div>
  );
}
