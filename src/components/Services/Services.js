import Image from "next/image";
import styles from "./Services.module.css"; // replace with your css module file

const services = [
  {
    title: "Wedding Photography",
    description:
      "Capturing timeless memories of your special day with elegance.",
    img: "https://i.pinimg.com/736x/91/0c/c1/910cc18c356da058c2e248d3b8d0ff6a.jpg",
  },
  {
    title: "Pre-Wedding Shoot",
    description:
      "Beautifully curated pre-wedding stories that reflect your love.",
    img: "https://i.pinimg.com/736x/91/63/42/916342174ed1f129baf28726f0f91b11.jpg",
  },
  {
    title: "Model Shoot",
    description: "Professional portfolio and fashion shoots with creativity.",
    img: "https://i.pinimg.com/736x/f8/d2/93/f8d293be2d9b819e505808def3d27b6c.jpg",
  },
  {
    title: "Maternity Shoot",
    description: "Celebrating motherhood with warm, intimate photographs.",
    img: "https://i.pinimg.com/736x/1a/69/6d/1a696d0b3d9f2eeccc7f12792071d422.jpg",
  },
];

const Services = () => {
  return (
    <section className={styles.contentBlock}>
      <section className={styles.services}>
        <h2 className={styles.servicesTitle}>Our Services</h2>
        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <div className={styles.serviceCard} key={index}>
              <Image
                src={service.img}
                alt={service.title}
                width={400} // adjust size
                height={300} // adjust size
                className={styles.serviceImage}
              />
              <div className={styles.serviceContent}>
                <h3 className={styles.servicesTitle}>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};

export default Services;
