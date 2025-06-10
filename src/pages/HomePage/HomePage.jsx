import css from "../HomePage/HomePage.module.css";

const HomePage = () => {
  return (
    <div className={css.container}>
      <div className={css.card}>
        <h1 className={css.title}>Phonebook 📞</h1>
        <p className={css.description}>
          Welcome to your personal phonebook! This app helps you securely store,
          search, add, and delete your private contacts. All your data stays
          safe and available only to you.
        </p>
        <p className={css.author}>
          Created by Yura Chekan. If you have any questions or suggestions, feel
          free to contact me:
        </p>
        <a className={css.email} href="mailto:ky.chekan@gmail.com">
          ky.chekan@gmail.com
        </a>
      </div>
    </div>
  );
};

export default HomePage;
