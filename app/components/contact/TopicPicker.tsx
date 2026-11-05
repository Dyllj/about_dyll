import { TOPICS, type Topic } from "./content";

type TopicPickerProps = {
  value: Topic;
  onChange: (topic: Topic) => void;
};

/** Chips for what the message is about. Real radio inputs, so keyboards and screen readers just work. */
export default function TopicPicker({ value, onChange }: TopicPickerProps) {
  return (
    <fieldset>
      <legend className="text-sm font-semibold text-zinc-900">What&apos;s this about?</legend>

      <div className="mt-3 flex flex-wrap gap-2">
        {TOPICS.map((topic) => (
          <label key={topic} className="cursor-pointer">
            <input
              type="radio"
              name="topic"
              value={topic}
              checked={value === topic}
              onChange={() => onChange(topic)}
              className="peer sr-only"
            />
            <span className="inline-flex rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-700 transition duration-300 hover:border-brand/50 hover:text-brand peer-checked:border-brand peer-checked:bg-brand peer-checked:text-white peer-checked:shadow-md peer-checked:shadow-brand/30 peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-brand">
              {topic}
            </span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}