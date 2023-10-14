// src/app/keystatic/layout.tsx
import KeystaticApp from "./keystatic";

export default function Layout() {
  return (
    <div className="w-screen h-screen absolute z-[2000] bg-black">
      <KeystaticApp />
    </div>
  );
}
