/** Decorative background: dot grid, soft colour blobs and a cursor spotlight. */
export default function Backdrop() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0">
      <div className="absolute inset-0 bg-[radial-gradient(circle,#c9d6ff_1px,transparent_1px)] bg-size-[28px_28px] mask-[radial-gradient(ellipse_75%_65%_at_65%_40%,black,transparent)]" />
      <div className="absolute -right-40 -top-40 size-136 rounded-full bg-brand/10 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 size-96 rounded-full bg-sky-300/20 blur-3xl" />
      {/* --mx / --my are set by LandingView on mouse move */}
      <div className="absolute inset-0 hidden [background:radial-gradient(520px_circle_at_var(--mx,70%)_var(--my,30%),rgb(0_71_255/0.07),transparent_60%)] lg:block" />
    </div>
  );
}