import { CiDatabase } from "react-icons/ci";
import { RiReactjsLine } from "react-icons/ri";
import { FaServer } from "react-icons/fa";
import { AiFillAppstore } from "react-icons/ai";

const data = [
 {
  id: 1,
  icon: <RiReactjsLine />,
  title: "Frontend Development",
  desc:
   "Your product will look good and will be accessible on all devices, including mobile phones, tablets, and desktop.",
 },
 {
  id: 2,
  icon: <FaServer />,
  title: "Backend Development",
  desc:
   "The security of your business/product is taken seriously right from the start of the project. I will make sure your website/app is secure from attacks.",
 },
 {
  id: 3,
  icon: <AiFillAppstore />,
  title: "App Development",
  desc:
   "Unlike other developers in the market, I will building an app that runs on both IOS and Android devices without any extra cost to you.",
 },
 {
  id: 4,
  icon: <CiDatabase />,
  title: "Database Management",
  desc:
   "I offer comprehensive database management services tailored to your needs. From designing and implementing efficient database architectures to optimizing performance, ensuring data security and compliance, and providing reliable backup and disaster recovery solutions.",
 },
];

export default data;
