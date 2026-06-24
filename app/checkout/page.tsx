"use client";

import Header from "../Header";
import Footer from "../Footer";
import Link from "next/link";
import { FormEvent, useContext, useMemo, useState } from "react";
import { CartContext } from "@/components/CartContext";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

type CheckoutForm = {
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  zipCode: string;
  country: string;
  paymentMethod: "emoney" | "cash";
  emoneyNumber: string;
  emoneyPin: string;
};

const initialForm: CheckoutForm = {
  name: "",
  email: "",
  phone: "",
  address: "",
  city: "",
  zipCode: "",
  country: "",
  paymentMethod: "emoney",
  emoneyNumber: "",
  emoneyPin: "",
};

function formatPrice(value: number) {
  return `$${value.toLocaleString("en-US")}`;
}

export default function CheckoutPage() {
  const { cart, clearCart } = useContext(CartContext);
  const { data: session, status } = useSession();
  const router = useRouter();
  const [form, setForm] = useState<CheckoutForm>(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [orderId, setOrderId] = useState("");

  const totals = useMemo(() => {
    const subtotal = cart.reduce(
      (total, item) => total + item.price * item.noOfItems,
      0
    );
    const shipping = cart.length > 0 ? 50 : 0;
    const vat = Math.round(subtotal * 0.2);

    return {
      subtotal,
      shipping,
      vat,
      grandTotal: subtotal + shipping + vat,
    };
  }, [cart]);

  const updateField = (field: keyof CheckoutForm, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    setOrderId("");

    if (cart.length === 0) {
      setError("Your cart is empty.");
      return;
    }

    if (!session) {
      router.push("/login?callbackUrl=/checkout");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          customer: {
            name: form.name,
            email: form.email,
            phone: form.phone,
          },
          shipping: {
            address: form.address,
            city: form.city,
            zipCode: form.zipCode,
            country: form.country,
          },
          payment: {
            method: form.paymentMethod,
            emoneyNumber: form.emoneyNumber,
            emoneyPin: form.emoneyPin,
          },
          items: cart.map((item) => ({
            id: item.id,
            quantity: item.noOfItems,
          })),
          totals,
        }),
      });
      const result = await response.json();

      if (!response.ok) {
        const message = Array.isArray(result.errors)
          ? result.errors.join(" ")
          : result.error ?? "Unable to place order.";
        setError(message);
        return;
      }

      setOrderId(result.order.id);
      clearCart();
      setForm(initialForm);
    } catch {
      setError("Unable to reach the order service.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="bg-gray min-h-screen pt-[7rem]">
      <Header />
      <div className="container mx-auto py-12">
        <Link href="/" className="p-body capitalize opacity-50 hover:text-primary">
          go back
        </Link>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-[1fr_22rem] gap-8 py-8 items-start">
          <section className="bg-white rounded-xl p-10">
            <h1 className="h3 mb-10">checkout</h1>

            <CheckoutSection title="billing details">
              <CheckoutInput
                label="Name"
                value={form.name}
                onChange={(value) => updateField("name", value)}
                placeholder="Alexei Ward"
              />
              <CheckoutInput
                label="Email Address"
                value={form.email}
                onChange={(value) => updateField("email", value)}
                placeholder="alexei@mail.com"
                type="email"
              />
              <CheckoutInput
                label="Phone Number"
                value={form.phone}
                onChange={(value) => updateField("phone", value)}
                placeholder="+1 202-555-0136"
              />
            </CheckoutSection>

            <CheckoutSection title="shipping info">
              <div className="col-span-2">
                <CheckoutInput
                  label="Address"
                  value={form.address}
                  onChange={(value) => updateField("address", value)}
                  placeholder="1137 Williams Avenue"
                />
              </div>
              <CheckoutInput
                label="ZIP Code"
                value={form.zipCode}
                onChange={(value) => updateField("zipCode", value)}
                placeholder="10001"
              />
              <CheckoutInput
                label="City"
                value={form.city}
                onChange={(value) => updateField("city", value)}
                placeholder="New York"
              />
              <CheckoutInput
                label="Country"
                value={form.country}
                onChange={(value) => updateField("country", value)}
                placeholder="United States"
              />
            </CheckoutSection>

            <CheckoutSection title="payment details">
              <div className="p-body font-bold">Payment Method</div>
              <div className="flex flex-col gap-4">
                <PaymentOption
                  label="e-Money"
                  checked={form.paymentMethod === "emoney"}
                  onChange={() => updateField("paymentMethod", "emoney")}
                />
                <PaymentOption
                  label="Cash on Delivery"
                  checked={form.paymentMethod === "cash"}
                  onChange={() => updateField("paymentMethod", "cash")}
                />
              </div>

              {form.paymentMethod === "emoney" && (
                <>
                  <CheckoutInput
                    label="e-Money Number"
                    value={form.emoneyNumber}
                    onChange={(value) => updateField("emoneyNumber", value)}
                    placeholder="238521993"
                  />
                  <CheckoutInput
                    label="e-Money PIN"
                    value={form.emoneyPin}
                    onChange={(value) => updateField("emoneyPin", value)}
                    placeholder="6891"
                  />
                </>
              )}
            </CheckoutSection>
          </section>

          <aside className="bg-white rounded-xl p-8 sticky top-[7rem]">
            <h2 className="h6 mb-6">summary</h2>

            {cart.length === 0 ? (
              <p className="p-body opacity-50">Your cart is empty.</p>
            ) : (
              <div className="flex flex-col gap-5">
                {cart.map((item) => (
                  <div key={item.id} className="flex justify-between gap-4">
                    <div>
                      <p className="p-body font-bold">{item.title}</p>
                      <p className="p-body opacity-50">x{item.noOfItems}</p>
                    </div>
                    <p className="p-body font-bold">
                      {formatPrice(item.price * item.noOfItems)}
                    </p>
                  </div>
                ))}
              </div>
            )}

            <div className="flex flex-col gap-2 py-8">
              <SummaryRow label="total" value={totals.subtotal} />
              <SummaryRow label="shipping" value={totals.shipping} />
              <SummaryRow label="vat (included)" value={totals.vat} />
              <SummaryRow label="grand total" value={totals.grandTotal} highlight />
            </div>

            {!session && status !== "loading" && (
              <p className="p-body text-black opacity-50 pb-4">
                Sign in with Google to place your order.
              </p>
            )}
            {error && <p className="p-body text-red-600 pb-4">{error}</p>}
            {orderId && (
              <p className="p-body text-primary pb-4">
                Order {orderId} was placed successfully.
              </p>
            )}

            {session ? (
              <button
                className="btn btn-1 w-full disabled:cursor-not-allowed disabled:opacity-50"
                type="submit"
                disabled={isSubmitting || cart.length === 0}>
                {isSubmitting ? "placing order" : "continue & pay"}
              </button>
            ) : (
              <button
                className="btn btn-1 w-full disabled:cursor-not-allowed disabled:opacity-50"
                type="button"
                disabled={status === "loading"}
                onClick={() => router.push("/login?callbackUrl=/checkout")}>
                sign in to checkout
              </button>
            )}
          </aside>
        </form>
      </div>
      <Footer />
    </main>
  );
}

function CheckoutSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-12">
      <h2 className="p-sub text-primary mb-5">{title}</h2>
      <div className="grid grid-cols-2 gap-6">{children}</div>
    </section>
  );
}

function CheckoutInput({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  type?: string;
}) {
  return (
    <label className="flex flex-col gap-2 p-body font-bold">
      {label}
      <input
        className="border outline-none border-[#CFCFCF] px-5 py-3 rounded-xl font-medium focus:border-primary"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        type={type}
        required
      />
    </label>
  );
}

function PaymentOption({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange: () => void;
}) {
  return (
    <label className="border border-[#CFCFCF] rounded-xl px-5 py-3 p-body font-bold flex items-center gap-4 hover:border-primary">
      <input
        type="radio"
        name="payment"
        checked={checked}
        onChange={onChange}
        className="accent-primary"
      />
      {label}
    </label>
  );
}

function SummaryRow({
  label,
  value,
  highlight = false,
}: {
  label: string;
  value: number;
  highlight?: boolean;
}) {
  return (
    <div className="flex justify-between">
      <span className="p-body uppercase opacity-50">{label}</span>
      <span className={`h6 ${highlight ? "text-primary" : ""}`}>
        {formatPrice(value)}
      </span>
    </div>
  );
}
