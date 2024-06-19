import { makeAutoObservable } from "mobx";

export default class Store {
  isAuth = false;
  isLoading = true;

  constructor() {
    makeAutoObservable(this);
  }

  setIsLoading(bool: boolean) {
    this.isLoading = bool;
  }

  setIsAuth(bool: boolean) {
    this.isAuth = bool;
  }

  async login(email: string, pass: string) {
    try {
      if (pass.length >= 4 && pass.length) {
        localStorage.setItem("auth", "true");
        this.setIsLoading(true);
        this.setIsAuth(true);
      }
    } catch (error) {
      console.error("Ошибка авторизации ", error);
    }
  }

  async registration(email: string, pass: string, passCheck: string) {
    try {
      if (pass.length >= 4 && pass.length && pass === passCheck && /\S+@\S+\.\S+/.test(email)) {
        localStorage.setItem("auth", "true");
        this.setIsLoading(true);
        this.setIsAuth(true);
      }
    } catch (error) {
      console.error("Ошибка регистрации ", error);
    }
  }

  async logout() {
    try {
      localStorage.removeItem("auth");
      this.setIsLoading(true);
      this.setIsAuth(false);
    } catch (error) {
      console.error("Ошибка выхода ", error);
    }
  }
}

