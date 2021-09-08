import { useState, useCallback, useEffect } from "react";

const storageName = "userData";
export const useAuth = () => {
  const [userId, setUserId] = useState(null);

  const login = useCallback((id, email, nickname) => {
    setUserId(id);

    localStorage.setItem(
      storageName,
      JSON.stringify({
        userId: id,
        email,
        nickname,
      }),
    );
  }, []);
  const logout = useCallback(() => {
    setUserId(null);
    localStorage.removeItem(storageName);
  }, []);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem(storageName));

    if (data && data.userId) {
      login(data.userId, data.email, data.nickname);
    }
  }, [login]);

  return { login, logout, userId };
};
