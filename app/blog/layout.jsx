import BreadcambUi from "@/components/breadcrumb/BreadcrumbUi";

export const metadata = {
  title: "Blogs",
  description:
    "ফিজিওথেরাপি সম্পর্কিত নতুন টিপস ও ট্রিকস পেতে নিয়মিত আমাদের ব্লগ গুলো পড়ুন। ",
};

export default function layout({ children }) {
  return (
    <div>
      <BreadcambUi text="ব্লগ পড়ুন, নতুন কিছু জানুন" />
      {children}
    </div>
  );
}
