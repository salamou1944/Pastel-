# Host Order Flow

The Host must never claim an order was placed unless a backend accepts it.

## Lifecycle

NEW -> ACCEPTED -> PREPARING -> READY -> COMPLETED

Cancellation is explicit: NEW|ACCEPTED -> CANCELLED.

## Required behavior

1. Host collects item names and quantities.
2. Client creates a real order request using `host-standard/order-schema.json`.
3. Backend returns a unique Order ID.
4. Only after backend acceptance does the Host say the order is confirmed.
5. The physical-looking paper UI is a projection of the returned order record, not the source of truth.
6. Failed requests remain unconfirmed and expose a retry/contact path.

This contract is intentionally provider-neutral so PASTEL can use a small API, Supabase, or another backend without rewriting the Host UI.
