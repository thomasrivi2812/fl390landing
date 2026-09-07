"use client";

import { useId, useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

/** Formulaire de la liste d'embarquement, posé sur fond papier. */
export function NewsletterForm() {
  const inputId = useId();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage(null);

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const payload: unknown = await response.json().catch(() => null);
      const text =
        payload && typeof payload === "object"
          ? (payload as { message?: unknown }).message
          : null;

      if (response.ok) {
        setStatus("success");
        setMessage(
          typeof text === "string"
            ? text
            : "Inscription enregistrée. À bientôt en croisière.",
        );
        setEmail("");
        return;
      }

      setStatus("error");
      setMessage(
        typeof text === "string"
          ? text
          : "Inscription impossible pour le moment.",
      );
    } catch {
      setStatus("error");
      setMessage("Connexion impossible. Vérifiez votre réseau.");
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="w-full max-w-[460px]">
      <label htmlFor={inputId} className="sr-only">
        Adresse email
      </label>
      <div className="flex items-center rounded-[999px] border border-black/30 bg-paper py-[4px] pr-[6px] pl-[20px] transition-colors duration-300 focus-within:border-ink">
        <input
          id={inputId}
          type="email"
          required
          autoComplete="email"
          placeholder="Adresse email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          disabled={status === "loading"}
          className="font-label min-w-0 flex-1 border-0 bg-transparent py-[12px] text-[14px] text-ink placeholder:text-black/40 focus:outline-none"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="font-label rounded-[999px] bg-black/90 px-[20px] py-[12px] text-[10px] font-bold tracking-[0.24em] whitespace-nowrap text-paper uppercase transition-colors duration-300 hover:bg-burgundy disabled:opacity-50"
        >
          {status === "loading" ? "…" : "Embarquer"}
        </button>
      </div>
      <p
        role="status"
        aria-live="polite"
        className={`mt-[14px] mb-0 min-h-[1.6em] text-[13px]/[1.6] ${
          status === "error" ? "text-burgundy" : "text-black/60"
        }`}
      >
        {message ?? "Une annonce par drop. Désinscription en un clic."}
      </p>
    </form>
  );
}
