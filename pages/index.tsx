import Head from "next/head";
import Image from "next/image";
import GradientLayout from "../components/gradientLayout";
import styles from "../styles/Home.module.css";

const Home = () => {
  return (
    <GradientLayout color="red">
      <div>Homepage</div>
    </GradientLayout>
  );
};

export default Home;
