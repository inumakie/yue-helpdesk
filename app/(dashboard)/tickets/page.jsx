import { Suspense } from "react"
import Ticketlist from "./Ticketlist"
import Loading from "../loading"

export const metadata = {
  title: 'Yue-Helpdesk | Tickets',
}

export default function Tickets() {
  return (
    <main>
      <nav>
        <div>
          <h2>Tickets</h2>
          <p><small>Currently open tickets:</small></p>
        </div>
      </nav>

      <Suspense fallback={<Loading/>}>
        <Ticketlist />
      </Suspense>
    </main>

  )
}
