type FieldProps = {
  /** The input gets the id `contact-${name}`, so errors can move focus to it. */
  name: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  onBlur: () => void;
  error?: string;
  type?: "text" | "email";
  autoComplete?: string;
  multiline?: boolean;
  maxLength?: number;
};

const styles = {
  control:
    "peer w-full rounded-2xl border bg-white px-4 pb-2.5 pt-6 text-base text-zinc-900 outline-none transition duration-200 placeholder:text-transparent focus:ring-4",
  normal: "border-zinc-200 hover:border-zinc-300 focus:border-brand focus:ring-brand/10",
  invalid: "border-red-400 focus:border-red-500 focus:ring-red-500/10",
  // The label sits inside the field and floats up when the field has text or focus
  label:
    "pointer-events-none absolute left-4 top-2 text-xs font-medium text-zinc-500 transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-xs peer-focus:text-brand",
};

/** Text input or textarea with a floating label and an inline error message. */
export default function Field({
  name,
  label,
  value,
  onChange,
  onBlur,
  error,
  type = "text",
  autoComplete,
  multiline = false,
  maxLength,
}: FieldProps) {
  const id = `contact-${name}`;
  const errorId = `${id}-error`;

  const shared = {
    id,
    name,
    value,
    maxLength,
    placeholder: " ",
    onBlur,
    "aria-required": true,
    "aria-invalid": Boolean(error),
    "aria-describedby": error ? errorId : undefined,
    className: `${styles.control} ${error ? styles.invalid : styles.normal}`,
  } as const;

  return (
    <div>
      <div className="relative">
        {multiline ? (
          <textarea
            {...shared}
            rows={6}
            onChange={(event) => onChange(event.target.value)}
            className={`${shared.className} min-h-40 resize-none pb-8`}
          />
        ) : (
          <input
            {...shared}
            type={type}
            autoComplete={autoComplete}
            onChange={(event) => onChange(event.target.value)}
          />
        )}

        <label htmlFor={id} className={styles.label}>
          {label}
        </label>

        {multiline && maxLength && (
          <span aria-hidden="true" className="absolute bottom-3 right-4 text-xs tabular-nums text-zinc-400">
            {value.length}/{maxLength}
          </span>
        )}
      </div>

      {error && (
        <p id={errorId} className="mt-2 pl-1 text-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}