import React from "react";
import { useTranslation } from "react-i18next";

const Foo = () => {
  const { t } = useTranslation();
  return <div>{t("analytics:cards.apy")}</div>;
};

export default Foo;
