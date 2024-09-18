import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";

export function GET(request: NextRequest) {
    const products = [
        { id: 1, name: "Product 1", price: 19.99 },
        { id: 2, name: "Product 2", price: 29.99 },
        { id: 3, name: "Product 3", price: 39.99 },
    ];

    return NextResponse.json(products, { status: 200 })
}

export async function POST(request: NextRequest) {
    const body = await request.json()
    const result = schema.safeParse(body)

    if (!result.success) {
        return NextResponse.json(
            { error: "Invalid input", details: result.error.errors },
            { status: 400 }
        )
    }

    const newProduct = {
        id: Math.floor(Math.random() * 1000) + 1,
        ...result.data
    }

    return NextResponse.json(newProduct, { status: 201 })
}