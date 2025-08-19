export default function Footer() {
  return (
    <footer
      className="w-full py-8 px-4 text-white"
      style={{
        background: 'linear-gradient(180deg, #005AFD 0%, #112240 100%)',
      }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <img src="/logos/fjordstans/fjordstans-blue.svg" alt="Fjordstans Logo" className="h-8" />
          <span className="font-semibold text-lg">fjordstans</span>
        </div>
        <div className="text-sm text-white opacity-80">
          &copy; {new Date().getFullYear()} Fjordstans. All rights reserved.
        </div>
        <div className="flex gap-4">
          <a href="mailto:info@fjordstans.com" className="hover:underline">info@fjordstans.com</a>
          <a href="https://www.linkedin.com/company/fjordstans" target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</a>
        </div>
      </div>
    </footer>
  )
}
