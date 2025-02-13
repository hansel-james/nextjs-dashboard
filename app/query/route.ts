import postgres from 'postgres';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

async function listInvoices() {
  const data = await sql`
    SELECT invoices.amount, customers.name
    FROM invoices
    JOIN customers ON invoices.customer_id = customers.id
    WHERE invoices.amount = 666;
  `;

  return data;
}

export async function GET() {
  try {
    const invoices = await listInvoices();  // Wait for the invoices data
    return new Response(JSON.stringify({
      message: 'Invoices fetched successfully',
      data: invoices
    }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({
      error: error.message || 'An error occurred'
    }), { status: 500 });
  }
}