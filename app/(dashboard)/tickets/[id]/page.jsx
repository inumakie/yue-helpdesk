import { notFound } from "next/navigation"

const dynamicParams = true

// Genera metadata dinámico
export async function generateMetadata({params}) {

    const id = params.id

    const response = await fetch(`http://localhost:4000/tickets/${id}`)

    const ticket = await response.json()

    return {
        title: `Yue Helpdesk | ${ticket.title}`
    }
}

export async function generateStaticParams() {
    const response = await fetch('http://localhost:4000/tickets/')
    const tickets = await response.json()
    
    return tickets.map((ticket) => ({
        id: ticket.id
    }))
}

async function getTicket(id) {
        
    const response = await fetch('http://localhost:4000/tickets/' + id, {
        next: {
            revalidate: 0
        }
    })

    if (!response.ok) {
        notFound()
    }

    return response.json()
}

export default async function TicketDetails({ params }) {

  const ticket = await getTicket(params.id)

  return (
    <main>
        <nav>
            <h2>Ticket Details</h2>
        </nav>

        <div className="card">
            <h3>{ticket.title}</h3>
            <small>Created by {ticket.user_email}</small>
            <p>{ticket.body}</p>
            <div className={`pill ${ticket.priority}`}>
                {ticket.priority} priority
            </div>
        </div>
    </main>
  )
}
