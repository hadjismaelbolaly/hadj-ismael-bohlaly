import { redirect } from "next/navigation";
import { isAdminAuthenticated } from "@/lib/adminAuth";
import NewArticleForm from "./NewArticleForm";

export default async function NouvelArticlePage() {
  const authed = await isAdminAuthenticated();
  if (!authed) redirect("/admin/login");

  return <NewArticleForm />;
}
