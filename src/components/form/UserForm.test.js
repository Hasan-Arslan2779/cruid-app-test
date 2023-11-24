// User Form Bileşenlerden İzola bir şekilde test edeceğiz
// form gönderilimce tabloya form ekleniyormu kontrolü yapmayacağız
// ! Formun mantığı doğru şekilde çalışıyor mu bunu kontrol edeceğiz
// name ve email inputlarını doldurduktan sonra
// from gönderildiğinde addUser fonksişyonu çalışıyor mu ?
// addUser fonksiyonuna doğru parametre gönderiliyor mu ?

import { render, screen, waitFor } from "@testing-library/react";
import UserForm from "./UserForm";
import user from "@testing-library/user-event";

test("form gönderilince kullanıcı ekleme fonksiyonu doğru parametreler alarak çalışır ", () => {
  // mock => addUser fonksiyonunu taklit edecek ve ne zaman çağrıldı | hangi parametreler ile çağrıldı , tarzında testleri yapmamızı sağlayan  bir fonksiyon

  const mock = jest.fn();
  render(<UserForm addUser={mock} />);
  //   Gerekli elemanları çağırma
  const nameİnput = screen.getByLabelText("İsim");
  const mailİnput = screen.getByLabelText("Email");
  const submitBtn = screen.getByRole("button");

  //   Name inputunu doldur yol 1
  user.click(nameİnput);
  user.keyboard("ahmet");
  //  Email inputunu doldur yol -2
  user.type(mailİnput, "hasan3445@gmail.com");
  //   formu gönderir
  user.click(submitBtn);

  //   form gönderilince addUser methodu çağrılıyor mu ?
  expect(mock).toBeCalled();

  // addUser çağrılırken doğru parametre gönderiliyor mu ?

  expect(mock).toBeCalledWith({
    name: "ahmet",
    email: "hasan3445@gmail.com",
  });
});

test("Form gönderildikten sonra inputlar temizleniyor mu ?", async () => {
  render(<UserForm addUser={() => {}} />);

  //   Gerekli elemanları alma
  const nameInp = screen.getByLabelText("İsim");
  const mailInp = screen.getByLabelText("Email");
  const button = screen.getByRole("button");
  //   İnputları doldurma
  user.type(nameInp, "Mahmut");
  user.type(mailInp, "mahmutanp2778@gmail.com");
  //   inputlara yazılan yazı value olarak eklendi mi ?
  expect(nameInp).toHaveValue("Mahmut");
  expect(mailInp).toHaveValue("mahmutanp2778@gmail.com");
  //   Formu  gönderme
  user.click(button);
  //   Name inputu boş mu ?
  // WaitFor elementlerin beklemsesini sağlar
  await waitFor(() => expect(nameInp).toHaveValue(""));
  await waitFor(() => expect(mailInp.value).toBe(""));
});
