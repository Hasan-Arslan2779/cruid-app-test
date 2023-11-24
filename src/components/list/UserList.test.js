import { render, screen, within } from "@testing-library/react";
import UserList from "./UserList";
const users = [
  {
    name: "Hasan",
    email: "hasanarslan@gmail.com",
  },
  {
    name: "Hüseyin",
    email: "hüseyinarslan@gmail.com",
  },
];
test("her kullanıcı için ekrana bir tablo satırı basar", () => {
  // ! prop olarak değer alan bir bileşeni ekrana basma
  render(<UserList users={users} />);

  // users tablosu içerisindeki bütün satırları al
  //? withi bir kapsayıcı içerisindeki çoçuk elemanları çağırmaya yarar
  const rows = within(screen.getByTestId("user")).getAllByRole("row");

  // kullanıcı sayısı kadar satır olduğunu doğrula
  expect(rows).toHaveLength(users.length);
});
test("her bir kullanıcı için isim ve email değeri ekranda gözükür", () => {
  render(<UserList users={users} />);
  // Her bir kullanıcı için ekrandaki tablo hücrelerinde isim ve mail değerleri yazıyor mu ?

  for (const user of users) {
    // Kullanıcının adını içeren tablo hücresini al
    const nameCell = screen.getByText(user.name);
    // Kullanıcının emailini içeren tablo hücresini al
    const mailCell = screen.getByText(user.email);

    // beklenen sonuçları kontrol et
    expect(nameCell).toBeInTheDocument();
    expect(mailCell).toBeInTheDocument();
  }
});
