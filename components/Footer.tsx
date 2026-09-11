export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-12 mt-8">
        <div className="flex flex-col items-center text-m text-slate-500 uppercase">
          <p>© {new Date().getFullYear()} Aman Maharjan • Kathmandu, Nepal</p>
        </div>
    </footer>
  );
}
