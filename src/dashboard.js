// Process and display users using array methods + spread operator
import { fetchUsers } from "./api.js";
import { formatUser } from "./formatter.js";

export async function showDashboard() {
  const users = await fetchUsers();
  const firstFive = [...users].slice(0, 5);

  console.log("=== User Dashboard ===\n");
  firstFive.forEach((user) => console.log(formatUser(user)));
}
