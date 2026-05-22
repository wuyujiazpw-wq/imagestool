export default function Footer() {
  return (
    <footer className="border-t mt-12">
      <div className="container mx-auto px-4 py-6 text-center text-sm text-muted-foreground">
        <p>{'\u00A9'} {new Date().getFullYear()} ImageTool. Free online image processing tool.</p>
      </div>
    </footer>
  );
}
