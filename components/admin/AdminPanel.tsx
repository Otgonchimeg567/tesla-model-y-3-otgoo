"use client";

import type { Session } from "@supabase/supabase-js";
import Image from "next/image";
import { useEffect, useState } from "react";
import { refreshVehicles } from "@/app/admin/actions";
import VehicleCard from "@/components/cards/VehicleCard";
import type { Action, ButtonVariant } from "@/data/types";
import { cn } from "@/lib/cn";
import { supabase } from "@/lib/supabase";
import { toCardProps, type VehicleRow } from "@/lib/vehicle-row";

const input =
  "w-full rounded-md border border-line bg-white px-3 py-2 text-ink outline-none focus:border-ink";
const btn =
  "rounded-md px-3 py-1.5 font-medium transition-opacity hover:opacity-85 disabled:opacity-50";
const btnPrimary = cn(btn, "bg-primary text-white");
const btnLight = cn(btn, "bg-ink-5 text-ink");

/** Sign-in form, then an editor for the home page vehicle cards. */
export default function AdminPanel() {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
      setLoading(false);
    });
    const { data } = supabase.auth.onAuthStateChange((_event, s) =>
      setSession(s),
    );
    return () => data.subscription.unsubscribe();
  }, []);

  if (loading) return <p>Ачаалж байна…</p>;
  if (!session) return <LoginForm />;
  return <Dashboard session={session} />;
}

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  async function submit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    setBusy(true);
    setError("");
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) setError("Имэйл эсвэл нууц үг буруу байна.");
    setBusy(false);
  }

  return (
    <form
      onSubmit={submit}
      className="mx-auto flex w-full max-w-sm flex-col gap-4 rounded-card bg-card p-8"
    >
      <h1 className="text-h6">Админ нэвтрэх</h1>
      <label className="flex flex-col gap-1">
        Имэйл
        <input
          className={input}
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label className="flex flex-col gap-1">
        Нууц үг
        <input
          className={input}
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      {error && <p className="text-red-700">{error}</p>}
      <button className={btnPrimary} disabled={busy}>
        {busy ? "Нэвтэрч байна…" : "Нэвтрэх"}
      </button>
    </form>
  );
}

function Dashboard({ session }: { session: Session }) {
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null);
  const [rows, setRows] = useState<VehicleRow[]>([]);
  const [error, setError] = useState("");

  async function load() {
    const { data, error } = await supabase
      .from("vehicles")
      .select("*")
      .order("sort_order")
      .overrideTypes<VehicleRow[], { merge: false }>();
    if (error) setError(error.message);
    else setRows(data);
  }

  useEffect(() => {
    supabase.rpc("is_admin").then(({ data }) => {
      setIsAdmin(Boolean(data));
      if (data) load();
    });
  }, []);

  const [openId, setOpenId] = useState<number | null>(null);
  const open = rows.find((r) => r.id === openId);

  // Jump to the top whenever we switch between the list and an editor
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [openId]);

  async function addVehicle() {
    const last = rows.at(-1)?.sort_order ?? 0;
    const { data, error } = await supabase
      .from("vehicles")
      .insert({
        sort_order: last + 1,
        published: false,
        image_src: "/assets/tesla/vehicle-01-model-y-l-desktop.jpg",
        image_alt: "Шинэ машин",
        title: "Шинэ машин",
        description: "Тайлбар",
        actions: [{ label: "Дэлгэрэнгүй", href: "#", variant: "light" }],
      })
      .select()
      .single<VehicleRow>();
    if (error) return setError(error.message);
    setRows((r) => [...r, data]);
    setOpenId(data.id);
  }

  if (open) {
    return (
      <VehicleEditor
        key={open.id}
        initial={open}
        token={session.access_token}
        onBack={() => setOpenId(null)}
        onSaved={(saved) =>
          setRows((r) =>
            r
              .map((x) => (x.id === saved.id ? saved : x))
              .sort((a, b) => a.sort_order - b.sort_order),
          )
        }
        onDeleted={() => {
          setRows((r) => r.filter((x) => x.id !== open.id));
          setOpenId(null);
        }}
      />
    );
  }

  return (
    <>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-h2">Машинууд</h1>
          <p className="text-ink/60">{session.user.email}</p>
        </div>
        <div className="flex gap-3">
          {isAdmin && (
            <button className={btnPrimary} onClick={addVehicle}>
              + Шинэ машин
            </button>
          )}
          <button className={btnLight} onClick={() => supabase.auth.signOut()}>
            Гарах
          </button>
        </div>
      </div>

      {isAdmin === false && (
        <p className="rounded-card bg-card p-6">
          Энэ бүртгэлд засах эрх байхгүй. Supabase-ийн `admins` хүснэгтэд
          нэмүүлнэ үү.
        </p>
      )}
      {error && <p className="text-red-700">{error}</p>}

      {rows.length > 0 && (
        <ul className="divide-y divide-line overflow-hidden rounded-card bg-card">
          {rows.map((row) => (
            <li key={row.id}>
              <button
                onClick={() => setOpenId(row.id)}
                className="flex w-full items-center gap-4 p-4 text-left transition-colors hover:bg-ink-5"
              >
                <span className="w-8 shrink-0 text-center text-ink/50">
                  {row.sort_order}
                </span>
                <span className="relative h-14 w-24 shrink-0 overflow-hidden rounded-md bg-ink-5">
                  <Image
                    src={row.image_src}
                    alt=""
                    fill
                    sizes="96px"
                    className="object-cover"
                  />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block truncate font-medium">
                    {row.title || row.name || row.image_alt}
                  </span>
                  <span className="block truncate text-sm text-ink/60">
                    {[row.description, row.price].filter(Boolean).join(" · ")}
                  </span>
                </span>
                <span
                  className={cn(
                    "hidden shrink-0 rounded-full px-2.5 py-0.5 text-sm sm:inline",
                    row.published
                      ? "bg-primary/10 text-primary"
                      : "bg-ink-5 text-ink/60",
                  )}
                >
                  {row.published ? "Харагдаж байна" : "Нуусан"}
                </span>
                <span aria-hidden className="shrink-0 text-ink/40">
                  ›
                </span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

function VehicleEditor({
  initial,
  token,
  onBack,
  onSaved,
  onDeleted,
}: {
  initial: VehicleRow;
  token: string;
  onBack: () => void;
  onSaved: (row: VehicleRow) => void;
  onDeleted: () => void;
}) {
  const [row, setRow] = useState(initial);
  const [status, setStatus] = useState("");
  const [busy, setBusy] = useState(false);
  const [saved, setSaved] = useState(initial);
  const changed = JSON.stringify(row) !== JSON.stringify(saved);

  function back() {
    if (changed && !confirm("Хадгалаагүй өөрчлөлт байна. Буцах уу?")) return;
    onBack();
  }

  const set = <K extends keyof VehicleRow>(key: K, value: VehicleRow[K]) =>
    setRow((r) => ({ ...r, [key]: value }));
  const setAction = (i: number, patch: Partial<Action>) =>
    set(
      "actions",
      row.actions.map((a, j) => (j === i ? { ...a, ...patch } : a)),
    );

  async function save() {
    setBusy(true);
    setStatus("");
    const { id, ...fields } = row;
    const { error } = await supabase
      .from("vehicles")
      .update(fields)
      .eq("id", id);
    if (error) {
      setStatus(`Алдаа: ${error.message}`);
    } else {
      await refreshVehicles(token);
      setSaved(row);
      onSaved(row);
      setStatus("Хадгаллаа ✓");
    }
    setBusy(false);
  }

  async function remove() {
    if (
      !confirm(
        `"${row.title || row.name || row.image_alt}"-г устгах уу? Буцаах боломжгүй.`,
      )
    )
      return;
    const { error } = await supabase.from("vehicles").delete().eq("id", row.id);
    if (error) return setStatus(`Алдаа: ${error.message}`);
    await refreshVehicles(token);
    onDeleted();
  }

  return (
    <>
      <div className="flex flex-wrap items-center gap-4">
        <button className={btnLight} onClick={back}>
          ← Буцах
        </button>
        <h1 className="text-h6">{row.title || row.name || row.image_alt}</h1>
      </div>
      <article className="grid gap-8 rounded-card bg-card p-6 lg:grid-cols-[1fr_auto]">
        <div className="flex flex-col gap-4">
          <div className="flex flex-wrap items-center gap-4">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={row.published}
                onChange={(e) => set("published", e.target.checked)}
              />
              Сайт дээр харуулах
            </label>
            <label className="flex items-center gap-2">
              Дараалал
              <input
                className={cn(input, "w-20")}
                type="number"
                value={row.sort_order}
                onChange={(e) => set("sort_order", Number(e.target.value))}
              />
            </label>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <Field
              label={
                row.logo
                  ? "Гарчиг (лого харагдаж байгаа тул хоосон байж болно)"
                  : "Гарчиг"
              }
            >
              <input
                className={input}
                value={row.title ?? ""}
                onChange={(e) => set("title", e.target.value)}
              />
            </Field>
            <Field label="Тайлбар">
              <input
                className={input}
                value={row.description}
                onChange={(e) => set("description", e.target.value)}
              />
            </Field>
            <Field label="Загварын нэр">
              <input
                className={input}
                value={row.name ?? ""}
                onChange={(e) => set("name", e.target.value)}
              />
            </Field>
            <Field label="Үнэ">
              <input
                className={input}
                value={row.price ?? ""}
                onChange={(e) => set("price", e.target.value)}
              />
            </Field>
            <div className="flex flex-col gap-1">
              <span className="text-sm text-ink/70">Зураг</span>
              <ImageUpload
                value={row.image_src}
                onChange={(src) => set("image_src", src)}
              />
            </div>
            <Field label="Зургийн тайлбар (alt)">
              <input
                className={input}
                value={row.image_alt}
                onChange={(e) => set("image_alt", e.target.value)}
              />
            </Field>
          </div>

          <fieldset className="flex flex-col gap-2">
            <legend className="mb-1 font-medium">Товчнууд</legend>
            {row.actions.map((a, i) => (
              <div key={i} className="grid grid-cols-[1fr_1fr_auto_auto] gap-2">
                <input
                  className={input}
                  placeholder="Текст"
                  value={a.label}
                  onChange={(e) => setAction(i, { label: e.target.value })}
                />
                <input
                  className={input}
                  placeholder="Холбоос"
                  value={a.href}
                  onChange={(e) => setAction(i, { href: e.target.value })}
                />
                <select
                  className={input}
                  value={a.variant ?? "primary"}
                  onChange={(e) =>
                    setAction(i, { variant: e.target.value as ButtonVariant })
                  }
                >
                  <option value="primary">Ногоон</option>
                  <option value="light">Цагаан</option>
                </select>
                <button
                  className={btnLight}
                  aria-label="Товч устгах"
                  onClick={() =>
                    set(
                      "actions",
                      row.actions.filter((_, j) => j !== i),
                    )
                  }
                >
                  ✕
                </button>
              </div>
            ))}
            <button
              className={cn(btnLight, "self-start")}
              onClick={() =>
                set("actions", [
                  ...row.actions,
                  { label: "Шинэ товч", href: "#", variant: "light" },
                ])
              }
            >
              + Товч нэмэх
            </button>
          </fieldset>

          <div className="flex flex-wrap items-center gap-3">
            <button
              className={btnPrimary}
              onClick={save}
              disabled={busy || !changed}
            >
              {busy ? "Хадгалж байна…" : "Хадгалах"}
            </button>
            {changed && (
              <button className={btnLight} onClick={() => setRow(saved)}>
                Болих
              </button>
            )}
            <button
              className={cn(btn, "ml-auto text-red-700")}
              onClick={remove}
            >
              Устгах
            </button>
            {status && <span>{status}</span>}
          </div>
        </div>

        <div className="hidden lg:block [&>article]:w-[420px]!">
          <p className="mb-2 text-ink/60">Урьдчилан харах</p>
          <VehicleCard {...toCardProps(row)} />
        </div>
      </article>
    </>
  );
}

const BUCKET = "vehicle-images";

/** Upload a photo to Supabase Storage, or type a /public path by hand. */
function ImageUpload({
  value,
  onChange,
}: {
  value: string;
  onChange: (src: string) => void;
}) {
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  async function upload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    e.target.value = "";
    if (!file) return;
    if (file.size > 5 * 1024 * 1024)
      return setError("Зураг 5MB-аас бага байх ёстой.");

    setBusy(true);
    setError("");
    const ext = file.name.split(".").pop()?.toLowerCase() || "jpg";
    const path = `${crypto.randomUUID()}.${ext}`;
    const { error } = await supabase.storage
      .from(BUCKET)
      .upload(path, file, { contentType: file.type });
    if (error) setError(`Upload амжилтгүй: ${error.message}`);
    else
      onChange(supabase.storage.from(BUCKET).getPublicUrl(path).data.publicUrl);
    setBusy(false);
  }

  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-2">
        <label
          className={cn(
            btnPrimary,
            "shrink-0 cursor-pointer",
            busy && "pointer-events-none opacity-50",
          )}
        >
          {busy ? "Хуулж байна…" : "Зураг оруулах"}
          <input
            type="file"
            accept="image/jpeg,image/png,image/webp,image/avif"
            className="hidden"
            onChange={upload}
          />
        </label>
        <input
          className={input}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
      {error && <p className="text-sm text-red-700">{error}</p>}
    </div>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="flex flex-col gap-1">
      <span className="text-sm text-ink/70">{label}</span>
      {children}
    </label>
  );
}
