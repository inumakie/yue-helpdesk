import { NextResponse } from "next/server"

export const dynamic = 'force-dynamic'

export async function GET(request, { params }) {
    const id = params.id;

    try {
        const response = await fetch(`http://localhost:4000/tickets/${id}`);

        if (!response.ok) {
            return NextResponse.json({ error: 'cant find that ticket' }, { status: 404 });
        }

        const ticket = await response.json();

        return NextResponse.json(ticket, { status: 200 });
    } catch (error) {
        console.error('Error fetching ticket:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}
