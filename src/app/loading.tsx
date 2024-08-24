import Spinner from "@/components/ui/spinner";

export default function Loading() {
  // Or a custom loading skeleton component
  return (
    <div className="w-full h-full flex justify-center items-center">
      <Spinner />
    </div>
  );
}
