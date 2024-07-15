import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function Home() {
  const { i18n, t } = useTranslation("auth");

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };
  return (
    <div>
      <Link to="/page1">Page1</Link>
      <Link to="/page2">Page2</Link>
      <h1>Home</h1>
      <p>{t("auth:auth", { context: "user_name" })} </p>
      <p>{t("auth:test", { context: "user_name" })} </p>
      <p>{t("auth:label", { context: "name" })} </p>
      <button onClick={() => changeLanguage("en")}>English</button>
      <button onClick={() => changeLanguage("fr")}>Français</button>
    </div>
  );
}
