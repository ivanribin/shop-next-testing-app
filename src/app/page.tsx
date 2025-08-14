import { routesData } from "@utils/constants";
import { redirect } from "next/navigation";
import { ReactElement } from "react";

const Home = (): ReactElement => {
    redirect(routesData.MARKET.path);
};

export default Home;
