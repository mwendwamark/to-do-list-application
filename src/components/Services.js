import React from "react";

const Services = (props) => {
  const services = [
    {
      id: 1,
      title: "Web Development",
      description:
        "We create beautiful and responsive websites tailored to your needs.",
      icon: "fa fa-laptop",
    },
    {
      id: 2,
      title: "Mobile App Development",
      description:
        "We build native and cross-platform mobile applications for iOS and Android.",
      icon: "fa fa-mobile",
    },
    {
      id: 3,
      title: "UI/UX Design",
      description:
        "Our team of designers will create intuitive and visually appealing user interfaces.",
      icon: "fa fa-paint-brush",
    },
    {
      id: 4,
      title: "E-commerce Solutions",
      description:
        "We develop custom e-commerce solutions to help you sell your products online.",
      icon: "fa fa-shopping-cart",
    },
    {
      id: 5,
      title: "Digital Marketing",
      description:
        "Our digital marketing experts will help you reach and engage with your target audience.",
      icon: "fa fa-bullhorn",
    },
  ];

  return (
    <div>
      <h2>Our Services</h2>
      <div className="services-container">
        {services.map((service) => (
          <div key={service.id} className="service-card">
            <i className={service.icon}></i>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
