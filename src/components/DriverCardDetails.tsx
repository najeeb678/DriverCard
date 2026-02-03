import React from "react";

interface DriverData {
  companyName: string;
  companyIdNumber: string;
  licenseNumber: string;
  licenseType: string;
  city: string;
  issueDate: string;
  expiryDate: string;
  cardNumber: string;
  driverIdNumber: string;
  firstName: string;
  lastName: string;
  cardIssueDate: string;
  cardExpiryDate: string;
  cardType: string;
}

interface DriverCardDetailsProps {
  data?: DriverData;
  onBack?: () => void;
}

export const DriverCardDetails: React.FC<DriverCardDetailsProps> = ({
  data = {
    companyName: "مؤسسة سائق كم للخدمات اللوجستية",
    companyIdNumber: "7034326483",
    licenseNumber: "38/00007108",
    licenseType: "نشاط النقل الخفيف للبضائع لأغراض تجارية (للغير - منشآت)",
    city: "الرياض",
    issueDate: "1445/10/26",
    expiryDate: "1448/10/28",
    cardNumber: "38.00011208",
    driverIdNumber: "2572913495",
    firstName: "عبدالعليم",
    lastName: "القاضي",
    cardIssueDate: "2026-01-04",
    cardExpiryDate: "2027-01-06",
    cardType: "نشاط النقل الخفيف للبضائع لأغراض تجارية (للغير - منشآت)",
  },
  onBack = () => console.log("Back button clicked"),
}) => {
  return (
    <div dir="rtl" className="mx-20 md:mx-12 pt-20 md:pt-1 ">
      {/* Header Section */}
      <header>
        <div className="flex items-center mb-1">
          <div className="w-full lg:w-1/2">
            <p className="text-heading text-xl font-medium mb-3">تفاصيل بطاقة السائق</p>
          </div>
        </div>
      </header>

      {/* Main Card */}
      <div className="bg-white rounded border border-gray-300 py-6">
        <div className="px-3 py-6">
          {/* Institution/Individual Data Section */}
          <p className="text-lg font-medium text-heading my-2">بيانات المنشأة/الفرد</p>
          <div className="flex flex-wrap gap-4 mb-10">
            <div className="w-full md:w-1/3">
              <p className="text-xs text-label pt-1 mt-3">الاسم</p>
              <p className="text-sm font-bold text-subheading">{data.companyName}</p>
            </div>
            <div className="w-full md:w-1/3">
              <p className="text-xs text-label pt-1 my-0">رقم هوية المنشأة</p>
              <p className="text-sm font-bold text-subheading">{data.companyIdNumber}</p>
            </div>
          </div>

          {/* Divider */}
          <div className="px-6 py-2">
            <hr className="border-gray-300" />
          </div>

          {/* License Information Section */}
          <p className="text-lg font-medium text-heading my-4">معلومات الترخيص الرئيسي</p>
          <div className="flex flex-wrap md:flex-nowrap gap-4 mb-4">
            <div className="w-full md:w-1/3">
              <div className="mb-4">
                <p className="text-xs text-label pb-1 my-0">رقم الترخيص</p>
                <p className="text-sm font-bold text-subheading">{data.licenseNumber}</p>
              </div>
              <div>
                <p className="text-xs text-label pb-1 my-0">تاريخ الإصدار</p>
                <p className="text-sm font-bold text-subheading">{data.issueDate}</p>
              </div>
            </div>
            <div className="w-full md:w-1/3">
              <div className="mb-4">
                <p className="text-xs text-label pb-1 my-0">نوع الترخيص/النشاط</p>
                <p className="text-sm font-bold text-subheading max-w-40 md:max-w-full">{data.licenseType}</p>
              </div>
              <div>
                <p className="text-xs text-label pb-1 my-0">تاريخ الإنتهاء</p>
                <p className="text-sm font-bold text-subheading">{data.expiryDate}</p>
              </div>
            </div>
            <div className="w-full md:w-1/3">
              <p className="text-xs text-label pb-1 my-0">المدينة</p>
              <p className="text-sm font-bold text-subheading">{data.city}</p>
            </div>
          </div>

          {/* Divider */}
          <div className="px-6 py-2">
            <hr className="border-gray-300" />
          </div>

          {/* Driver Card Section */}
          <p className="text-lg font-medium text-heading my-4">بطاقة السائق</p>
          <div className="flex flex-wrap md:flex-nowrap gap-4 mb-0">
            <div className="w-full md:w-1/3">
              <div className="mb-4">
                <p className="text-xs text-label pb-1 my-0">رقم البطاقة</p>
                <p className="text-sm font-bold text-subheading">{data.cardNumber}</p>
              </div>
              <div className="mb-4">
                <p className="text-xs text-label pb-1 my-0">اسم العائلة</p>
                <p className="text-sm font-bold text-subheading">{data.lastName}</p>
              </div>
              <div>
                <p className="text-xs text-label pb-1 my-0">نوع البطاقة</p>
                <p className="text-sm font-bold text-subheading max-w-40 md:max-w-full">{data.cardType}</p>
              </div>
            </div>
            <div className="w-full md:w-1/3">
              <div className="mb-4">
                <p className="text-xs text-label pb-1 my-0">هوية السائق</p>
                <p className="text-sm font-bold text-subheading">{data.driverIdNumber}</p>
              </div>
              <div>
                <p className="text-xs text-label pb-1 my-0">تاريخ إصدار البطاقة</p>
                <p className="text-sm font-bold text-subheading">{data.cardIssueDate}</p>
              </div>
            </div>
            <div className="w-full md:w-1/3">
              <div className="mb-4">
                <p className="text-xs text-label pb-1 my-0">الاسم الأول</p>
                <p className="text-sm font-bold text-subheading">{data.firstName}</p>
              </div>
              <div>
                <p className="text-xs text-label pb-1 my-0">تاريخ إنتهاء البطاقة</p>
                <p className="text-sm font-bold text-subheading">{data.cardExpiryDate}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Back Button */}
      <div className="flex justify-end gap-2 mt-3">
        <button
          onClick={onBack}
          className="w-[108px] h-[32px] leading-[32px] text-center border border-[#0D6EFD] text-[#0D6EFD] rounded hover:bg-blue-50 transition font-medium text-sm flex items-center justify-center "
          type="button"
        >
          رجوع
        </button>
      </div>
    </div>
  );
};

export default DriverCardDetails;
