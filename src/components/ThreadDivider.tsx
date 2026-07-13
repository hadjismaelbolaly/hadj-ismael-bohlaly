export default function ThreadDivider({ label }: { label?: string }) {
  return (
    <div className="flex items-center gap-4 my-2" aria-hidden="true">
      <span className="h-px flex-1 bg-border" />
      <svg width="10" height="10" viewBox="0 0 10 10" className="shrink-0">
        <circle cx="5" cy="5" r="3.5" fill="none" stroke="var(--navy)" strokeWidth="1.2" />
      </svg>
      {label && (
        <span className="text-xs uppercase tracking-[0.15em] text-muted shrink-0">
          {label}
        </span>
      )}
      <span className="h-px flex-1 bg-border" />
    </div>
  );
}
