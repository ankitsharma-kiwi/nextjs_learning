import { NextRequest, NextResponse } from 'next/server';

export function GET(request: NextRequest) {
    return NextResponse.json([
        { id: 1, name: 'John Doe' },
        { id: 2, name: 'Jane Smith' },
    ]);
}

export async function POST(request: NextRequest) {
    const body = await request.json();
    if(!body.name) return NextResponse.json({error: 'Name is required'}, {status: 400});
    return NextResponse.json(body, {status: 201});
}