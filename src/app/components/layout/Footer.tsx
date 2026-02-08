export default function PublicFooter() {
  return (
    <footer className="border-t bg-background">
      <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-muted-foreground">
        <p className="font-medium text-foreground">
          WebBerry — We help local businesses grow online.
        </p>

        <p className="mt-2">
          © {new Date().getFullYear()} WebBerry. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
