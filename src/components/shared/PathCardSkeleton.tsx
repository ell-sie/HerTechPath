import { Card } from "@mui/material";

export default function PathCardSkeleton() {
  return (
    <Card
      className="grid h-fit animate-pulse gap-5 rounded-lg border border-gray-200 bg-black p-6 pb-10"
      raised
    >
      <div className="size-10 rounded-full bg-primary-200"></div>
      <div className="flex items-center justify-between gap-5">
        <div className="h-4 w-full rounded-lg bg-primary-200"></div>
        <div className="size-4 rounded-full bg-primary-200"></div>
      </div>
    </Card>
  );
}
