import {
  Button,
  Card,
  CardBody,
  Input,
  Textarea,
  Typography,
} from "@material-tailwind/react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { ImMobile } from "react-icons/im";
import React, { useState } from "react";
import { MdEmail, MdPhone } from "react-icons/md";

function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    mobileNo: "",
    message: "",
  });
  const [error, setError] = useState({});
  const handleChange = (e) => {
    const id = e.target?.id;
    const val = e.target?.value;
    setForm((prev) => ({
      ...prev,
      [id]: val,
    }));
    if (val == "") {
      setError((prev) => ({
        ...prev,
        [id]: "This field is require",
        email: "",
      }));
    } else {
      setError((prev) => ({
        ...prev,
        [id]: "",
      }));
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <Card className="bg-[#ECECEC]">
      <div className="container mx-auto pt-7  text-black">
        <CardBody>
          <Typography className="text-center text-2xl mb-7" variant="h1">
            Contact us
          </Typography>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1  lg:grid-cols-4 gap-5">
              {[
                { name: "Name *", id: "name", type: "text" },
                { name: "Email", id: "email", type: "text" },
                { name: "Mobile No *", id: "mobileNo", type: "number" },
              ].map((val) => {
                return (
                  <div key={val.id} className="w-full ">
                    <Input
                      type={val.type}
                      error={!!error[val.id]}
                      onChange={handleChange}
                      value={form[val.id] || ""}
                      label={val.name}
                      id={val.id}
                      className=" w-full"
                    />
                  </div>
                );
              })}
              <div className="w-full row-start-5 lg:row-start-auto lg:row-end-auto row-end-6">
                <Button type="submit" className="w-full" color="orange">
                  Submit
                </Button>
              </div>
              <div className="w-full lg:col-span-4">
                <Textarea
                  id="message"
                  error={!!error.message}
                  onChange={handleChange}
                  value={form.message || ""}
                  label="Message *"
                  className="w-full"
                />
              </div>
            </div>
          </form>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-5">
            <div className="max-w-md">
              <Typography variant="h6">
                <FaMapMarkerAlt
                  size={20}
                  color="orange"
                  className="inline-block mr-2"
                />
                Address
              </Typography>
              <Typography className="ml-7">
                8, Maharashtra State Highway 4, Bus Stand Road, Opposite to
                sardar vallabhbhai Patel complex, Faizpur, Maharashtra 425503
              </Typography>
            </div>
            <div>
              <Typography variant="h6">
                <MdPhone
                  size={20}
                  color="orange"
                  className="inline-block mr-2"
                />
                Phone: <span className="font-normal">02585-246730</span>
              </Typography>
              <Typography variant="h6">
                <ImMobile
                  size={20}
                  color="orange"
                  className="inline-block mr-2"
                />
                Mobile No:{" "}
                <span className="font-normal">7755976676, 9146709185</span>
              </Typography>
            </div>
            <a href="mailto:Ujwaldairy2001@gmail.com">
              <Typography variant="h6">
                <MdEmail
                  size={20}
                  color="orange"
                  className="inline-block mr-2"
                />
                Email:{" "}
                <span className="font-normal">Ujwaldairy2001@gmail.com</span>
              </Typography>
            </a>
          </div>
        </CardBody>
      </div>
    </Card>
  );
}

export default ContactForm;
