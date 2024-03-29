import type { Metadata } from "next";
import KeystaticApp from "./keystatic";

export const metadata: Metadata = {
  title: "Keystatic Page",
  description: "Generated by Keystatic page",
};

export default function Layout() {
  return (
    // <div className="w-screen h-screen absolute z-[2000] bg-black">
    <div suppressContentEditableWarning={true}>
      <KeystaticApp />
    </div>
  );
}
