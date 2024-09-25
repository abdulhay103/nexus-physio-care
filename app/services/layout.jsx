import BreadcambUi from "@/components/breadcrumb/BreadcrumbUi";

export default function layout({ children }) {
  return (
    <div>
      <BreadcambUi text="আমাদের সেবা সম্পর্কে বিস্তারিত জানুন" />
      {children}
    </div>
  );
}
