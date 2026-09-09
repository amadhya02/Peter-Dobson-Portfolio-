const paths = {
  personal: <><circle cx="32" cy="17" r="8"/><path d="M16 53c2-15 7-23 16-23s14 8 16 23M8 45h48M12 39v12M52 39v12"/><path className="icon-accent" d="M22 49h20"/></>,
  group: <><circle cx="32" cy="15" r="7"/><circle cx="14" cy="23" r="6"/><circle cx="50" cy="23" r="6"/><path d="M20 53c1-15 5-23 12-23s11 8 12 23M4 53c1-12 4-19 10-19 3 0 5 1 7 4M60 53c-1-12-4-19-10-19-3 0-5 1-7 4"/><path className="icon-accent" d="M27 42h10"/></>,
  welcome: <><path d="M14 56V8h36v48M24 56V18h20v38M38 37h.1"/><path className="icon-accent" d="M5 36h25M22 28l8 8-8 8"/></>,
  talk: <><path d="M8 12h40v29H27L15 51V41H8z"/><path className="icon-accent" d="M18 23h20M18 30h13"/></>,
  plan: <><rect x="13" y="8" width="38" height="48" rx="2"/><path d="M24 8V4h16v9H24zM22 25l4 4 8-10M38 25h6M22 41l4 4 8-10M38 41h6"/><path className="icon-accent" d="M19 51h26"/></>,
  progress: <><path d="M9 52V12M9 52h47M16 44l11-12 9 6 16-22"/><path className="icon-accent" d="M42 16h10v10"/><circle cx="27" cy="32" r="3"/></>,
  personalValue: <><circle cx="32" cy="19" r="8"/><path d="M14 56c2-17 8-27 18-27s16 10 18 27M7 56h50"/><circle className="icon-accent" cx="32" cy="40" r="5"/><path className="icon-accent" d="M32 32v3M32 45v4M24 40h3M37 40h3"/></>,
  practical: <><path d="M8 16h48M8 32h48M8 48h48"/><circle cx="22" cy="16" r="5"/><circle cx="43" cy="32" r="5"/><circle cx="28" cy="48" r="5"/><path className="icon-accent" d="M22 11v10M43 27v10M28 43v10"/></>,
  progressive: <><path d="M9 52h46M15 46V34h10v12M28 46V25h10v21M41 46V15h10v31"/><path className="icon-accent" d="M14 25l13-9 9 4 16-12"/></>,
  positive: <><path d="M10 48h44M17 48a15 15 0 0 1 30 0"/><path d="M32 9v10M10 19l8 8M54 19l-8 8M5 36h11M48 36h11"/><path className="icon-accent" d="M23 48a9 9 0 0 1 18 0"/></>,
  calendar: <><rect x="9" y="13" width="46" height="43" rx="3"/><path d="M9 25h46M20 8v11M44 8v11M19 35h6M30 35h6M41 35h6M19 45h6M30 45h6"/><path className="icon-accent" d="M41 45h6"/></>,
  commitment: <><circle cx="32" cy="32" r="24"/><path d="M32 18v15l10 6M20 7l-7 8M44 7l7 8"/><path className="icon-accent" d="M23 48h18"/></>,
  monthly: <><path d="M10 19h44v35H10zM10 29h44M20 10v16M44 10v16"/><path d="M22 42a11 11 0 0 1 19-7M42 31v8h-8"/><path className="icon-accent" d="M42 42a11 11 0 0 1-19 7M22 53v-8h8"/></>,
  single: <><path d="M8 32h48M12 22v20M18 18v28M46 18v28M52 22v20"/><circle className="icon-accent" cx="32" cy="32" r="5"/></>,
  message: <><path d="M8 12h48v33H29L16 55V45H8z"/><path className="icon-accent" d="M19 25h26M19 33h17"/></>,
  meet: <><circle cx="23" cy="20" r="9"/><circle cx="45" cy="23" r="7"/><path d="M7 55c2-17 7-26 16-26s14 9 16 26M37 36c2-4 4-6 8-6 7 0 11 8 12 25"/><path className="icon-accent" d="M27 43h14"/></>,
  programme: <><rect x="12" y="8" width="40" height="49" rx="3"/><path d="M23 8V4h18v10H23zM21 25h22M21 34h14M21 43h10"/><path className="icon-accent" d="M38 43l4 4 9-12"/></>,
  barbell: <><path d="M4 32h56M8 24v16M14 18v28M50 18v28M56 24v16"/><path className="icon-accent" d="M25 28v8M39 28v8"/></>,
};

export default function TrainingIcon({ name, className = '' }) {
  return <svg className={`training-icon ${className}`.trim()} viewBox="0 0 64 64" aria-hidden="true" focusable="false">{paths[name]}</svg>;
}
