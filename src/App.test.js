import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import App from "../src/App";

test("Uygulama doğru şekilde çalışıyor mu ?", async () => {
  render(<App />);

  //   gerekli bileşenler

  const nameInp = screen.getByLabelText("İsim");
  const emailInp = screen.getByLabelText("Email");
  const button = screen.getByRole("button");

  //   Formu doldur
  user.type(nameInp, "ece");
  user.type(emailInp, "ece2667@gmail.com");

  //    Formu gönder
  user.click(button);

  //   İsim değerine karşılık gelen bir tablo hücresi ekrana basıldı mı ?
  //   State güncellemesi sonucu ekrana basıldığından
  // async elemanları getiren find komutunu kullandık
  await screen.findByRole("cell", { name: "ece" });
  await screen.findByRole("cell", { name: "ece2667@gmail.com" });
});
