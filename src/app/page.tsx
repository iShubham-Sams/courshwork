"use client";
import useBearStore from "@/zustand/store";
import Image from "next/image";
import { useShallow } from "zustand/react/shallow";

export default function Home() {
  const { nuts, honey, bears } = useBearStore(useShallow((state: any) => ({ nuts: state.nuts, honey: state.honey, bears: state.bears })));
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <code className="font-mono font-bold">
        Nuts {nuts},Bears {bears} Honey {honey}
      </code>
    </main>
  );
}
