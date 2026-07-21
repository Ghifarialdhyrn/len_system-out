import { Suspense } from "react";
import ResultContent from "./ResultContent";
import ResultLoading from "@/components/public/result/ResultLoading";

export default function ResultPage() {
  return (
    <Suspense fallback={<ResultLoading />}>
      <ResultContent />
    </Suspense>
  );
}