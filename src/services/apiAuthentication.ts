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
