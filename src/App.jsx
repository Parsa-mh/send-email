import { useState } from "react"
import toast,{Toaster} from "react-hot-toast"
import emailjs from "emailjs-com"
import './App.css'

function App() {
  const [inpValue, setInpValue] = useState({ name: "", email: "", text: "" })
  const changeHandler = (event) => {
    let value = event.target.value;
    let name = event.target.name;
    setInpValue({...inpValue , [name] : value})
  }
  const submitHandler = (event) => {
    event.preventDefault();
    if (inpValue.name && inpValue.email && inpValue.text) {
      emailjs.sendForm("service_szhvioy", "template_cy6ewnq", event.target, "3GUa44qBAa24b1F6P")
        .then((res) => {
          if (res.status === 200) {
            toast.success("پیام با موفقیت ارسال شد")
            setInpValue({ name: "", email: "", text: "" })
          }
      })
    }
    else {
      toast.error("لطفا فیلد هارا به درستی گامل کنید")
    }
  }
  return (
    <>
    <Toaster />
    <div className="main">
      <div className="box">
        <div><h2>ارسال پیام به من</h2></div>
        <div>
          <form onSubmit={submitHandler}>
            <input onChange={changeHandler} value={inpValue.name} name="name" placeholder="نام" type="text" />
            <input onChange={changeHandler} value={inpValue.email} name="email" placeholder="ایمیل" type="text" />
            <input onChange={changeHandler} value={inpValue.text} name="text" placeholder="پیام" type="text" />
            <button type="submit" className="subButton">ارسال</button>
          </form>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
