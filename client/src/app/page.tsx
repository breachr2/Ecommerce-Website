import Image from "next/image";
import Dashboard from "@/app/dashboard/page";

export default async function Home() {
  // Testing fetch call to backend
  // Uncomment below for Windows version. Due to path directory separator differences.
  //const data = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/products`)
  // Uncomment below for Linux version. Due to path directory separator differences.
  const data = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/products`)
  const products = await data.json()
  const product1 = products[0]
  return (
    <>
      <div>
        <p>{product1.productId}</p>
        <p>{product1.name}</p>
        <p>{product1.price}</p>
      </div>
      <Dashboard />
    </>
  );
}
