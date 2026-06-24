import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import headphones from "@/data/products/headphones.json";
import speakers from "@/data/products/speakers.json";
import earphones from "@/data/products/earphones.json";
import { authOptions } from "@/lib/auth";

type CatalogProduct = {
  id: number;
  slug: string;
  title: string;
  price: string;
  quantity: number;
};

type OrderItem = {
  id: number;
  quantity: number;
};

type OrderPayload = {
  customer?: {
    name?: string;
    email?: string;
    phone?: string;
  };
  shipping?: {
    address?: string;
    city?: string;
    zipCode?: string;
    country?: string;
  };
  payment?: {
    method?: "emoney" | "cash";
    emoneyNumber?: string;
    emoneyPin?: string;
  };
  items?: OrderItem[];
  totals?: {
    subtotal?: number;
    shipping?: number;
    vat?: number;
    grandTotal?: number;
  };
};

const catalog = [
  ...headphones.products,
  ...speakers.products,
  ...earphones.products,
] as CatalogProduct[];

const productsById = new Map(catalog.map((product) => [product.id, product]));

function isPresent(value: unknown) {
  return typeof value === "string" && value.trim().length > 0;
}

function isValidEmail(value: unknown) {
  return typeof value === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function getOrderTotals(items: OrderItem[]) {
  const subtotal = items.reduce((total, item) => {
    const product = productsById.get(item.id);
    return total + Number(product?.price ?? 0) * item.quantity;
  }, 0);
  const shipping = 50;
  const vat = Math.round(subtotal * 0.2);

  return {
    subtotal,
    shipping,
    vat,
    grandTotal: subtotal + shipping + vat,
  };
}

function validateOrder(payload: OrderPayload) {
  const errors: string[] = [];

  if (!isPresent(payload.customer?.name)) errors.push("Name is required.");
  if (!isValidEmail(payload.customer?.email)) errors.push("A valid email is required.");
  if (!isPresent(payload.customer?.phone)) errors.push("Phone number is required.");
  if (!isPresent(payload.shipping?.address)) errors.push("Address is required.");
  if (!isPresent(payload.shipping?.city)) errors.push("City is required.");
  if (!isPresent(payload.shipping?.zipCode)) errors.push("ZIP code is required.");
  if (!isPresent(payload.shipping?.country)) errors.push("Country is required.");

  if (!payload.items?.length) {
    errors.push("Cart is empty.");
  }

  payload.items?.forEach((item) => {
    const product = productsById.get(item.id);

    if (!product) {
      errors.push(`Unknown product id: ${item.id}.`);
      return;
    }

    if (!Number.isInteger(item.quantity) || item.quantity < 1) {
      errors.push(`${product.title} has an invalid quantity.`);
    }

    if (item.quantity > product.quantity) {
      errors.push(`${product.title} only has ${product.quantity} available.`);
    }
  });

  if (payload.payment?.method === "emoney") {
    if (!isPresent(payload.payment.emoneyNumber)) {
      errors.push("e-Money number is required.");
    }

    if (!isPresent(payload.payment.emoneyPin)) {
      errors.push("e-Money PIN is required.");
    }
  } else if (payload.payment?.method !== "cash") {
    errors.push("Payment method is required.");
  }

  return errors;
}

export async function POST(request: Request) {
  const session = await getServerSession(authOptions);

  if (!session?.user?.email) {
    return NextResponse.json(
      { errors: ["You must sign in with Google before placing an order."] },
      { status: 401 }
    );
  }

  let payload: OrderPayload;

  try {
    payload = (await request.json()) as OrderPayload;
  } catch {
    return NextResponse.json({ error: "Invalid JSON payload." }, { status: 400 });
  }

  const errors = validateOrder(payload);

  if (errors.length > 0 || !payload.items) {
    return NextResponse.json({ errors }, { status: 400 });
  }

  const totals = getOrderTotals(payload.items);

  if (
    payload.totals &&
    (payload.totals.subtotal !== totals.subtotal ||
      payload.totals.shipping !== totals.shipping ||
      payload.totals.vat !== totals.vat ||
      payload.totals.grandTotal !== totals.grandTotal)
  ) {
    return NextResponse.json(
      { errors: ["Submitted totals do not match catalog pricing."], totals },
      { status: 400 }
    );
  }

  const order = {
    id: `ORD-${crypto.randomUUID().slice(0, 8).toUpperCase()}`,
    status: "accepted",
    customerEmail: session.user.email,
    totals,
    items: payload.items.map((item) => {
      const product = productsById.get(item.id)!;

      return {
        id: product.id,
        slug: product.slug,
        title: product.title,
        quantity: item.quantity,
        unitPrice: Number(product.price),
      };
    }),
  };

  return NextResponse.json({ order }, { status: 201 });
}
