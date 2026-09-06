import { mockSubmissions } from "../data/mockData";

// Replace with api.get('/submissions') when backend ready
export const submissionService = {
  list: async () => {
    await new Promise((r) => setTimeout(r, 400));
    return mockSubmissions;
  },
  get: async (id) => {
    await new Promise((r) => setTimeout(r, 300));
    return mockSubmissions.find((s) => s.id === id) || mockSubmissions[0];
  },
  create: async (data) => {
    await new Promise((r) => setTimeout(r, 700));
    return {
      id: "CVT-" + Math.floor(10000 + Math.random() * 90000),
      ...data,
      status: "Submitted",
    };
  },
};
