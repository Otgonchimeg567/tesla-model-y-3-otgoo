export default function Footnotes({ notes }: { notes: string[] }) {
  return (
    <div className="flex flex-col gap-2 text-xs text-ink/60">
      {notes.map((n) => (
        <p key={n}>{n}</p>
      ))}
    </div>
  );
}
