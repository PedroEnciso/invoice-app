import { createRouter, createWebHistory } from "vue-router";
import InvoiceCollectionPageVue from "@/views/InvoiceCollectionPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/invoices",
    },
    {
      path: "/invoices",
      name: "invoices",
      component: InvoiceCollectionPageVue,
    },
  ],
});

export default router;
