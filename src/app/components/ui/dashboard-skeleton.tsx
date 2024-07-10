import { DashboardHeader } from "@/app/components/header";
import { DashboardShell } from "@/app/components/shell";
import { Button } from "@/app/components/ui/button";

import { Skeleton } from "@/app/components/ui/skeleton";

function ItemSkeleton() {
  return (
    <div className="p-4">
      <div className="space-y-3">
        <Skeleton className="h-5 w-2/5" />
        <Skeleton className="h-4 w-4/5" />
      </div>
    </div>
  );
}

export const DashboardSkeleton: React.FC<{
  heading: string;
  text: string;
  buttonLabel: string;
}> = ({ heading, text, buttonLabel }) => {
  return (
    <DashboardShell>
      <DashboardHeader heading={heading} text={text}>
        <Button>{buttonLabel}</Button>
      </DashboardHeader>

      <div className="divide-border-200 divide-y rounded-md border">
        <ItemSkeleton />
        <ItemSkeleton />
        <ItemSkeleton />
        <ItemSkeleton />
        <ItemSkeleton />
      </div>
    </DashboardShell>
  );
};

export default DashboardSkeleton;
