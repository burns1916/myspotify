import Head from "next/head";
import Image from "next/image";
import GradientLayout from "../components/gradientLayout";
import styles from "../styles/Home.module.css";

const Home = () => {
  return (
    <GradientLayout
      roundImage
      color="green"
      subtitle="profile"
      title="Ryan Burns"
      description="15 public playlists"
    >
      <div>Homepage</div>
    </GradientLayout>
  );
};

export default Home;
