import Image from "next/image";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-sky-400 to-sky-600">
      <Image
        src="/Logo.svg"
        alt="Atomserve Logo"
        width={200}
        height={200}
        priority
      />
    </div>
  );
}
