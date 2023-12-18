import { Navigation } from "../components/Navigation/Navigation";
import client from "../tina/__generated__/client";
import "../styles/styles.css";
import { Metadata } from "next";

async function getNavigation() {
  const {
    data: {
      navigation: { items: navigation },
    },
  } = await client.queries.navigation({
    relativePath: "navigation.json",
  });

  return navigation.filter((item) => !item.isHidden);
}

async function getSettings() {
  const {
    data: { settings },
  } = await client.queries.settings({ relativePath: "settings.json" });

  return settings;
}

export async function generateMetadata(): Promise<Metadata> {
  const { siteTitle } = await getSettings();
  return { title: siteTitle };
}

export default async function Layout({ children }) {
  const navigation = await getNavigation();
  const { siteTitle } = await getSettings();
  return (
    <html lang="cs">
      <body>
        <div>
          {navigation?.length && <Navigation title={siteTitle} items={navigation} />}
          {children}
        </div>
      </body>
    </html>
  );
}
