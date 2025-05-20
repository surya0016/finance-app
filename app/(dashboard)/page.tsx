import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen font-medium text-4xl font-mono">
      <UserButton/>
    </div>
  );
}
