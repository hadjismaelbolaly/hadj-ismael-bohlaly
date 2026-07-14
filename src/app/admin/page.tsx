import Link from "next/link";
import { redirect } from "next/navigation";
import { Plus, LogOut } from "lucide-react";
import { isAdminAuthenticated } from "@/lib/adminAuth";
import { blogPosts } from "@/data/blog";
import LogoutButton from "./LogoutButton";

export default async function AdminDashboard() {
  const authed = await isAdminAuthenticated();
  if (!authed) redirect("/admin/login");

  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <div className="flex items-center justify-between gap-4">
        <h1 className="font-display text-2xl">Mes articles</h1>
        <LogoutButton />
      </div>

      <Link
        href="/admin/nouvel-article"
        className="mt-6 inline-flex items-center gap-2 rounded-full bg-navy text-background px-6 py-3 text-sm font-medium hover:bg-navy-light transition-colors"
      >
        <Plus size={16} />
        Nouvel article
      </Link>

      <div className="mt-10 space-y-3">
        {blogPosts.map((post) => (
          <div
            key={post.slug}
            className="flex items-center justify-between gap-4 rounded-xl border border-border p-4"
          >
            <div>
              <p className="text-xs text-muted">{post.category} · {post.date}</p>
              <p className="font-medium">{post.title}</p>
            </div>
            <Link
              href={`/blog/${post.slug}`}
              target="_blank"
              className="text-sm text-navy shrink-0"
            >
              Voir →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
