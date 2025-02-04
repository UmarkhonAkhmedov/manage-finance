import { Inngest } from "inngest";

export const inngest = new Inngest({
  id: "manageFinance221100",
  name: "ManageFinance",
  retryFunction: async (attemp) => ({
    delay: Math.pow(2, attemp) * 1000,
    maxAttempts: 2,
  }),
});
