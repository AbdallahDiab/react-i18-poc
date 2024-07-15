import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function Page2() {
  const { t } = useTranslation("auth");

  return (
    <div>
      <Link to="/home">Home</Link>
      <h1>Page2</h1>
      <p>{t("auth:auth", { context: "key2" })} </p>
    </div>
  );
}
