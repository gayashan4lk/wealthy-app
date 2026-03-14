import ExpensesCreateForm from "@/components/app/expenses-create-form";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <main>
        <h1 className="text-5xl font-black">Welcome</h1>
        <div>
          <ExpensesCreateForm />
        </div>
      </main>
    </div>
  );
}
