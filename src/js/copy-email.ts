import { success } from "toastr";
import "toastr/build/toastr.css";
document.querySelector("#copyEmailButton").addEventListener("click", () => {
  const clipboard = navigator.clipboard;
  const EMAIL = "ryanali.developer@gmail.com";
  clipboard.writeText(EMAIL);
  success("Email Copied", undefined, {});
});
