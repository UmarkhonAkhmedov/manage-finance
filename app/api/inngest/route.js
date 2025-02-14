import { inngest } from "@/lib/inngest/client";
import { checkBudgetAlert } from "@/lib/inngest/function";
import { serve } from "inngest/next";

export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [checkBudgetAlert],
});
