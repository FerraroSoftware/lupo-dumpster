import { useState } from "react";
import { ArrowRight, RotateCcw } from "lucide-react";
import { cn } from "@/lib/utils";
import { track } from "@/lib/analytics";
import { getSize, sizes } from "@/lib/site-config";
import { Highlight, SectionHeading } from "./section-heading";

// Each answer nudges the recommendation toward a size index (0 = smallest).
const questions = [
  {
    id: "project",
    label: "What's the project?",
    options: [
      { label: "Garage, closet, or yard cleanup", score: 0 },
      { label: "Kitchen or bathroom remodel", score: 1 },
      { label: "Roof tear-off", score: 2 },
      { label: "Whole-home cleanout or renovation", score: 2 },
    ],
  },
  {
    id: "amount",
    label: "How much debris, in pickup-truck loads?",
    options: [
      { label: "Up to 3 loads", score: 0 },
      { label: "4 to 5 loads", score: 1 },
      { label: "6 or more loads", score: 2 },
      { label: "Not sure", score: null },
    ],
  },
  {
    id: "weight",
    label: "What's most of it?",
    options: [
      { label: "Household junk and furniture", score: null },
      { label: "Drywall, wood, and flooring", score: null },
      { label: "Shingles, tile, concrete, or dirt", score: null, heavy: true },
    ],
  },
];

function recommend(answers) {
  const scores = questions.map((q) => q.options[answers[q.id]]?.score).filter((s) => s !== null && s !== undefined);
  const index = Math.min(sizes.length - 1, Math.max(...scores, 0));
  const heavy = questions.some((q) => q.options[answers[q.id]]?.heavy);
  return { size: sizes[index], heavy };
}

export function SizeQuiz({ onBook }) {
  const [answers, setAnswers] = useState({});
  const done = questions.every((q) => answers[q.id] !== undefined);
  const result = done ? recommend(answers) : null;

  const answer = (qid, index) => {
    const next = { ...answers, [qid]: index };
    setAnswers(next);
    if (questions.every((q) => next[q.id] !== undefined)) {
      track("size_quiz_complete", { recommended_size: recommend(next).size.id });
    }
  };

  return (
    <section aria-labelledby="size-quiz-title" className="bg-zinc-100 py-20 lg:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          id="size-quiz-title"
          eyebrow="Not sure which size?"
          title={
            <>
              Find Your Size in <Highlight>3 Questions</Highlight>
            </>
          }
          intro="Answer three quick questions and we'll recommend a dumpster with its flat price."
        />

        <div className="mt-12 space-y-8 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5 sm:p-8">
          {questions.map((q, qi) => (
            <fieldset key={q.id}>
              <legend className="mb-3 font-display text-2xl font-bold text-ink">
                {qi + 1}. {q.label}
              </legend>
              <div className="grid gap-2 sm:grid-cols-2">
                {q.options.map((o, oi) => (
                  <label key={o.label} className="relative cursor-pointer">
                    <input
                      type="radio"
                      name={`quiz-${q.id}`}
                      checked={answers[q.id] === oi}
                      onChange={() => answer(q.id, oi)}
                      className="peer sr-only"
                    />
                    <span className="flex min-h-[52px] items-center rounded-lg border-2 border-zinc-200 px-4 py-3 text-zinc-800 transition-colors peer-checked:border-brand peer-checked:bg-brand-soft peer-focus-visible:ring-2 peer-focus-visible:ring-brand/50 hover:border-zinc-400">
                      {o.label}
                    </span>
                  </label>
                ))}
              </div>
            </fieldset>
          ))}

          <div aria-live="polite">
            {result && (
              <div className="rounded-xl bg-ink p-6 text-white sm:flex sm:items-center sm:justify-between sm:gap-6">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wide text-brand-on-dark">We recommend</p>
                  <p className="mt-1 font-display text-4xl font-extrabold">
                    {result.size.name} · ${result.size.price}
                  </p>
                  <p className="mt-2 text-zinc-300">
                    {result.size.dimensions}. {result.size.loads}. {result.size.weight}.
                  </p>
                  {result.heavy && (
                    <p className="mt-2 text-zinc-300">
                      Heavy materials hit the weight limit before the dumpster looks full. Call us and we&apos;ll
                      help you plan the load.
                    </p>
                  )}
                </div>
                <div className="mt-5 flex shrink-0 flex-col gap-3 sm:mt-0">
                  <button
                    type="button"
                    onClick={() => onBook(result.size.id)}
                    className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-lg bg-brand px-6 font-bold text-white transition-colors hover:bg-brand-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  >
                    Book the {getSize(result.size.id).shortName.replace(" yd", "-yard")}
                    <ArrowRight aria-hidden className="h-5 w-5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setAnswers({})}
                    className={cn(
                      "inline-flex items-center justify-center gap-1.5 rounded text-sm font-semibold text-zinc-300",
                      "hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white",
                    )}
                  >
                    <RotateCcw aria-hidden className="h-4 w-4" /> Start over
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
