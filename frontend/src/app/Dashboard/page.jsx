"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import {
  Store,
  Package,
  ShoppingBag,
  IndianRupee,
  Users,
  Plus,
  Eye,
  Edit,
  Trash2,
  TrendingUp,
  MapPin,
  Bell,
  Settings,
  Search,
  CalendarDays,
  ArrowUpRight,
  Star,
  AlertTriangle,
  CheckCircle2,
  Clock3,
  Truck,
  Wallet,
} from "lucide-react";

export default function VendorDashboard() {
  const [vendorName, setVendorName] = useState("Samagri Vendor");
  const [search, setSearch] = useState("");

  useEffect(() => {
    try {
      const vendorData = JSON.parse(localStorage.getItem("vendorData"));
      if (vendorData?.shopName) setVendorName(vendorData.shopName);
    } catch {
      setVendorName("Samagri Vendor");
    }
  }, []);

  const stats = [
    {
      title: "Total Products",
      value: "24",
      change: "+12%",
      icon: Package,
      bg: "bg-orange-100",
      text: "text-orange-600",
    },
    {
      title: "Total Orders",
      value: "128",
      change: "+18%",
      icon: ShoppingBag,
      bg: "bg-blue-100",
      text: "text-blue-600",
    },
    {
      title: "Total Revenue",
      value: "₹45,800",
      change: "+22%",
      icon: IndianRupee,
      bg: "bg-green-100",
      text: "text-green-600",
    },
    {
      title: "Customers",
      value: "89",
      change: "+9%",
      icon: Users,
      bg: "bg-purple-100",
      text: "text-purple-600",
    },
  ];

  const products = [
    {
      id: 1,
      name: "Premium Puja Thali",
      category: "Puja Kits",
      price: 499,
      stock: 12,
      status: "Active",
      rating: 4.8,
    },
    {
      id: 2,
      name: "Organic Agarbatti",
      category: "Agarbatti",
      price: 149,
      stock: 35,
      status: "Active",
      rating: 4.6,
    },
    {
      id: 3,
      name: "Diya Set",
      category: "Festival Items",
      price: 199,
      stock: 0,
      status: "Out of Stock",
      rating: 4.4,
    },
    {
      id: 4,
      name: "Brass Kalash",
      category: "Puja Items",
      price: 349,
      stock: 5,
      status: "Low Stock",
      rating: 4.7,
    },
  ];

  const orders = [
    {
      id: "#ORD1021",
      customer: "Rahul Sharma",
      amount: "₹499",
      status: "Pending",
      icon: Clock3,
    },
    {
      id: "#ORD1020",
      customer: "Aman Verma",
      amount: "₹149",
      status: "Completed",
      icon: CheckCircle2,
    },
    {
      id: "#ORD1019",
      customer: "Priya Gupta",
      amount: "₹699",
      status: "Processing",
      icon: Truck,
    },
  ];

  const filteredProducts = useMemo(() => {
    return products.filter((p) =>
      `${p.name} ${p.category} ${p.status}`
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  }, [search]);

  const lowStockProducts = products.filter((p) => p.stock <= 5);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF8E7] via-[#FFF2D6] to-[#F7DFAC] px-4 py-6 md:px-8 md:py-8">
      <div className="mx-auto max-w-7xl space-y-8">
        {/* HEADER */}
        <section className="relative overflow-hidden rounded-[2rem] border border-orange-100 bg-white/90 p-6 shadow-sm backdrop-blur md:p-8">
          <div className="absolute -right-16 -top-16 h-72 w-72 rounded-full bg-orange-200/40 blur-3xl" />
          <div className="absolute -bottom-20 left-1/2 h-52 w-52 rounded-full bg-amber-200/40 blur-3xl" />

          <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br from-orange-500 to-amber-500 shadow-md">
                <Store className="text-white" size={31} />
              </div>

              <div>
                <p className="text-sm font-bold uppercase tracking-wide text-orange-600">
                  Vendor Dashboard
                </p>
                <h1 className="mt-1 text-2xl font-black text-gray-900 md:text-4xl">
                  Welcome, {vendorName}
                </h1>
                <p className="mt-2 flex items-center gap-1 text-sm text-gray-500">
                  <MapPin size={15} />
                  Manage products, orders, earnings and shop activity
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <button className="inline-flex items-center gap-2 rounded-2xl border border-orange-200 bg-white px-4 py-2.5 font-semibold text-gray-700 transition hover:bg-orange-50">
                <Bell size={17} />
                Alerts
              </button>

              <button className="inline-flex items-center gap-2 rounded-2xl border border-orange-200 bg-white px-4 py-2.5 font-semibold text-gray-700 transition hover:bg-orange-50">
                <Settings size={17} />
                Settings
              </button>

              <Link
                href="/Products"
                className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-orange-500 to-amber-500 px-5 py-2.5 font-bold text-white shadow-md transition hover:scale-[1.02] active:scale-95"
              >
                <Plus size={18} />
                Add Product
              </Link>
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="grid grid-cols-2 gap-4 md:gap-6 lg:grid-cols-4">
          {stats.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-[1.7rem] border border-orange-100 bg-white/90 p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="mb-5 flex items-center justify-between">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl ${item.bg} ${item.text}`}
                  >
                    <Icon size={23} />
                  </div>

                  <span className="flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-bold text-green-600">
                    <TrendingUp size={14} />
                    {item.change}
                  </span>
                </div>

                <p className="text-sm text-gray-500">{item.title}</p>
                <h2 className="mt-1 text-2xl font-black text-gray-900">
                  {item.value}
                </h2>
              </div>
            );
          })}
        </section>

        {/* OVERVIEW CARDS */}
        <section className="grid grid-cols-1 gap-5 md:grid-cols-3">
          <InfoCard
            icon={Wallet}
            title="Available Payout"
            value="₹12,450"
            desc="Next payout expected this week"
          />
          <InfoCard
            icon={Star}
            title="Shop Rating"
            value="4.7/5"
            desc="Based on 218 customer reviews"
          />
          <InfoCard
            icon={AlertTriangle}
            title="Low Stock Items"
            value={String(lowStockProducts.length)}
            desc="Update inventory to avoid missed orders"
          />
        </section>

        {/* TOOLBAR */}
        <section className="flex flex-col gap-4 rounded-[1.7rem] border border-orange-100 bg-white/90 p-4 shadow-sm md:flex-row md:items-center md:justify-between">
          <div className="relative w-full md:w-96">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              size={18}
            />
            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-2xl border border-orange-100 py-3 pl-11 pr-4 outline-none transition focus:ring-2 focus:ring-orange-200"
            />
          </div>

          <button className="inline-flex items-center justify-center gap-2 rounded-2xl border border-orange-200 bg-orange-50 px-4 py-3 font-bold text-orange-700">
            <CalendarDays size={18} />
            This Month
          </button>
        </section>

        {/* MAIN */}
        <section className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* PRODUCTS */}
          <div className="overflow-hidden rounded-[1.8rem] border border-orange-100 bg-white/90 shadow-sm lg:col-span-2">
            <div className="flex items-center justify-between border-b border-orange-100 p-5">
              <div>
                <h2 className="text-xl font-black text-gray-900">
                  My Products
                </h2>
                <p className="text-sm text-gray-500">
                  Manage your product listings
                </p>
              </div>

              <Link
                href="/vendor/products"
                className="text-sm font-bold text-orange-600 hover:underline"
              >
                View All
              </Link>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-orange-50 text-gray-700">
                  <tr>
                    <th className="p-4 text-left">Product</th>
                    <th className="p-4 text-left">Category</th>
                    <th className="p-4 text-left">Price</th>
                    <th className="p-4 text-left">Stock</th>
                    <th className="p-4 text-left">Rating</th>
                    <th className="p-4 text-left">Status</th>
                    <th className="p-4 text-left">Action</th>
                  </tr>
                </thead>

                <tbody>
                  {filteredProducts.map((product) => (
                    <tr
                      key={product.id}
                      className="border-t border-orange-50 transition hover:bg-orange-50/50"
                    >
                      <td className="p-4 font-bold text-gray-900">
                        {product.name}
                      </td>
                      <td className="p-4 text-gray-600">
                        {product.category}
                      </td>
                      <td className="p-4 font-bold">₹{product.price}</td>
                      <td className="p-4">{product.stock}</td>
                      <td className="p-4">
                        <span className="inline-flex items-center gap-1 font-bold text-amber-600">
                          <Star size={15} fill="currentColor" />
                          {product.rating}
                        </span>
                      </td>
                      <td className="p-4">
                        <StatusBadge status={product.status} />
                      </td>
                      <td className="p-4">
                        <div className="flex gap-2">
                          <IconButton icon={Eye} color="blue" />
                          <IconButton icon={Edit} color="orange" />
                          <IconButton icon={Trash2} color="red" />
                        </div>
                      </td>
                    </tr>
                  ))}

                  {filteredProducts.length === 0 && (
                    <tr>
                      <td
                        colSpan="7"
                        className="p-8 text-center font-semibold text-gray-500"
                      >
                        No product found.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>

          {/* ORDERS */}
          <div className="rounded-[1.8rem] border border-orange-100 bg-white/90 shadow-sm">
            <div className="border-b border-orange-100 p-5">
              <h2 className="text-xl font-black text-gray-900">
                Recent Orders
              </h2>
              <p className="text-sm text-gray-500">
                Latest customer activity
              </p>
            </div>

            <div className="space-y-4 p-5">
              {orders.map((order) => {
                const Icon = order.icon;

                return (
                  <div
                    key={order.id}
                    className="rounded-3xl border border-orange-100 bg-[#FFF8E7] p-4 transition hover:bg-orange-50"
                  >
                    <div className="mb-2 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-orange-600">
                          <Icon size={17} />
                        </div>
                        <h3 className="font-black text-gray-900">
                          {order.id}
                        </h3>
                      </div>

                      <span className="font-black text-orange-600">
                        {order.amount}
                      </span>
                    </div>

                    <p className="text-sm text-gray-600">{order.customer}</p>

                    <div className="mt-3 flex items-center justify-between">
                      <OrderBadge status={order.status} />
                      <button className="text-xs font-bold text-orange-600 hover:underline">
                        Details
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* QUICK ACTIONS */}
        <section className="grid grid-cols-1 gap-5 md:grid-cols-3">
          <QuickAction
            href="/vendor/products/add"
            title="Add Product"
            desc="Create a new product listing"
            icon={Plus}
          />
          <QuickAction
            href="/vendor/orders"
            title="Manage Orders"
            desc="View and update order status"
            icon={ShoppingBag}
          />
          <QuickAction
            href="/vendor/settings"
            title="Shop Settings"
            desc="Update shop details and location"
            icon={Store}
          />
        </section>
      </div>
    </div>
  );
}

function InfoCard({ icon: Icon, title, value, desc }) {
  return (
    <div className="rounded-[1.7rem] border border-orange-100 bg-white/90 p-5 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-100 text-orange-600">
          <Icon size={22} />
        </div>
        <ArrowUpRight className="text-gray-300" />
      </div>

      <p className="text-sm font-semibold text-gray-500">{title}</p>
      <h3 className="mt-1 text-2xl font-black text-gray-900">{value}</h3>
      <p className="mt-2 text-sm text-gray-500">{desc}</p>
    </div>
  );
}

function StatusBadge({ status }) {
  const styles = {
    Active: "bg-green-100 text-green-700",
    "Out of Stock": "bg-red-100 text-red-700",
    "Low Stock": "bg-yellow-100 text-yellow-700",
  };

  return (
    <span
      className={`rounded-full px-3 py-1 text-xs font-bold ${
        styles[status] || "bg-gray-100 text-gray-700"
      }`}
    >
      {status}
    </span>
  );
}

function OrderBadge({ status }) {
  const styles = {
    Completed: "bg-green-100 text-green-700",
    Processing: "bg-blue-100 text-blue-700",
    Pending: "bg-yellow-100 text-yellow-700",
  };

  return (
    <span
      className={`rounded-full px-3 py-1 text-xs font-bold ${
        styles[status] || "bg-gray-100 text-gray-700"
      }`}
    >
      {status}
    </span>
  );
}

function IconButton({ icon: Icon, color }) {
  const colors = {
    blue: "bg-blue-50 text-blue-600 hover:bg-blue-100",
    orange: "bg-orange-50 text-orange-600 hover:bg-orange-100",
    red: "bg-red-50 text-red-600 hover:bg-red-100",
  };

  return (
    <button
      className={`rounded-xl p-2 transition ${colors[color]}`}
      type="button"
    >
      <Icon size={16} />
    </button>
  );
}

function QuickAction({ href, title, desc, icon: Icon }) {
  return (
    <Link
      href={href}
      className="group rounded-[1.7rem] border border-orange-100 bg-white/90 p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
    >
      <div className="flex items-center justify-between">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-100">
          <Icon className="text-orange-600" />
        </div>

        <ArrowUpRight className="text-gray-300 transition group-hover:text-orange-500" />
      </div>

      <h3 className="font-black text-gray-900">{title}</h3>
      <p className="mt-1 text-sm text-gray-500">{desc}</p>
    </Link>
  );
}