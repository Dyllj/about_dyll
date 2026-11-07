/**
 * Decorative background: a colour mesh, two slowly drifting glows, a dot grid and a
 * cursor spotlight. The look (colours, dark mode, motion) lives in globals.css under
 * "Backdrop" so it follows the theme automatically.
 *
 * It fills whatever positioned parent it is placed in. The About, Work and Contact
 * views place it in a `fixed inset-0` layer so it covers the whole screen.
 */
export default function Backdrop() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="backdrop-mesh absolute inset-0" />
      <div className="backdrop-glow backdrop-glow-a" />
      <div className="backdrop-glow backdrop-glow-b" />
      <div className="backdrop-dots absolute inset-0" />
      {/* --mx / --my are set by LandingView on mouse move */}
      <div className="absolute inset-0 hidden [background:radial-gradient(520px_circle_at_var(--mx,70%)_var(--my,30%),var(--brand-spotlight),transparent_60%)] lg:block" />
    </div>
  );
}