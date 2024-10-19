const BASE_URL = "http://145.239.98.20:8000/api";

type SignUpArgs = {
  username: string;
  email: string;
  password: string;
};

type LoginArgs = {
  email: string;
  password: string;
};

type UpdateUserArgs = {
  full_name: string;
  date_of_birth: string;
  address: string;
  phone_number: string;
  national_id: string;
};

export const signUp = async (user: SignUpArgs) => {
  try {
    if (!user.email || !user.password || !user.username) return;
    const res = await fetch(`${BASE_URL}/signup/`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(user),
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
export const login = async (user: LoginArgs) => {
  try {
    if (!user.email || !user.password) return;
    const res = await fetch(`${BASE_URL}/login/`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(user),
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
export const loginOut = () => {};

export const getUser = async () => {
  try {
    const token = localStorage.getItem("access");
    const res = await fetch(`${BASE_URL}/dashboard/`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      method: "GET",
      credentials: "include",
    });
    const data = await res.json();
    return data[0];
  } catch (error) {
    console.error(error);
  }
};

export const updateUser = async (id: number, userData: UpdateUserArgs) => {
  try {
    const token = localStorage.getItem("access");
    const res = await fetch(`${BASE_URL}/dashboard/${id}/`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(userData),
      method: "PUT",
      credentials: "include",
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
