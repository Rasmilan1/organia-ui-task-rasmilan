import Link from "next/link";

export default function Homepage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <Link href="/shipments">
        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
          Go to Menu
        </button>
      </Link>
    </div>
  )
}