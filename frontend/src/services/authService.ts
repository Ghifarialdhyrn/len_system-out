const API_URL = process.env.NEXT_PUBLIC_API_URL;

type LoginResponse = {
  message: string;
  token: string;
  user: {
    id: number;
    name: string;
    email: string;
  };
};

export async function loginAdmin(email: string, password: string) {
  const response = await fetch(`${API_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Email atau password salah.");
  }

  const result = data as LoginResponse;

  localStorage.setItem("adminToken", result.token);
  localStorage.setItem("adminUser", JSON.stringify(result.user));

  return result;
}

export async function logoutAdmin() {
  const token = localStorage.getItem("adminToken");

  if (token) {
    await fetch(`${API_URL}/logout`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
  }

  localStorage.removeItem("adminToken");
  localStorage.removeItem("adminUser");
}

export function getAdminToken() {
  return localStorage.getItem("adminToken");
}