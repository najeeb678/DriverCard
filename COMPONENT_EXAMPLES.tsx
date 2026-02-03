import React from "react";
import DriverCardDetails from "@/components/DriverCardDetails";

/**
 * Example 1: Basic usage with default data
 */
export function Example1() {
  return <DriverCardDetails onBack={() => console.log("Back clicked")} />;
}

/**
 * Example 2: Usage with custom data
 */
export function Example2() {
  const customData = {
    companyName: "مؤسسة الخدمات اللوجستية المتقدمة",
    companyIdNumber: "1234567890",
    licenseNumber: "50/00001234",
    licenseType: "نشاط النقل الثقيل للبضائع",
    city: "جدة",
    issueDate: "1446/01/01",
    expiryDate: "1449/01/01",
    cardNumber: "50.00005678",
    driverIdNumber: "1234567890",
    firstName: "محمد",
    lastName: "الأحمد",
    cardIssueDate: "2025-06-15",
    cardExpiryDate: "2028-06-15",
    cardType: "نشاط النقل الثقيل للبضائع",
  };

  return <DriverCardDetails data={customData} onBack={() => window.history.back()} />;
}

/**
 * Example 3: Integration in a page with layout
 */
export function Example3() {
  const [driverData, setDriverData] = React.useState({
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
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <DriverCardDetails
        data={driverData}
        onBack={() => {
          console.log("Navigating back...");
          // You can also use router for navigation
          // router.back();
        }}
      />
    </div>
  );
}
