import styles from "./styles.module.css";
import { ApplicationCard } from "@/entities/application";

const MOCK_APPLICATIONS = [
  {
    id: 1,
    content:
      "Dear Stripe team, I am a highly skilled product designer with a passion for creating intuitive, user-centered designs. I have a strong background in design systems and am excited about the opportunity to join the Stripe product design team and work on building out the design system for the platform. I am particularly drawn to Stripe's mission of making it easy for businesses to sell online and am confident that my experience in creating user-friendly designs will be an asset to the team. I have experience in conducting user research, creating wireframes, and prototyping interactive designs, as well as working closely with engineers to ensure that my designs are implemented correctly. I am a strong collaborator and have experience working in cross-functional teams to bring new products and features to market. I'm confident that I can help improve Stripe's user experience and make it even more accessible to businesses. I would love the opportunity to speak with you further about my qualifications and how I can contribute to the Stripe team. Thank you for considering my application.",
  },
  {
    id: 2,
    content:
      "Dear Stripe team, I am a highly skilled product designer with a passion for creating intuitive, user-centered designs. I have a strong background in design systems and am excited about the opportunity to join the Stripe product design team and work on building out the design system for the platform. I am particularly drawn to Stripe's mission of making it easy for businesses to sell online and am confident that my experience in creating user-friendly designs will be an asset to the team. I have experience in conducting user research, creating wireframes, and prototyping interactive designs, as well as working closely with engineers to ensure that my designs are implemented correctly. I am a strong collaborator and have experience working in cross-functional teams to bring new products and features to market. I'm confident that I can help improve Stripe's user experience and make it even more accessible to businesses. I would love the opportunity to speak with you further about my qualifications and how I can contribute to the Stripe team. Thank you for considering my application.",
  },
  {
    id: 3,
    content: "Dear Stripe team, I am a highly skilled product designer",
  },
];
const CardList = () => {
  return (
    <div className={styles.applicationCards}>
      {MOCK_APPLICATIONS.map((application) => (
        <ApplicationCard key={application.id} content={application.content} />
      ))}
    </div>
  );
};

export default CardList;
