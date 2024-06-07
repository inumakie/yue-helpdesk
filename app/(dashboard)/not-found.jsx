import Link from "next/link"

export default function notFound() {
  return (
    <main className='text-center'>
        <h2  className='text-3xl'>There was a problem.</h2>
        <p>What you're looking for does not exist.</p>
        <p><Link href='/'>Back to Dashboard</Link></p>
    </main>
  )
}
