import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { LogIn, SignUp } from "../components";
const data = [
  {
    label: "LogIn",
    value: "html",
    component: LogIn,
    desc: `It really matters and then like it really doesn't matter.
      What matters is the people who are sparked by it. And the people 
      who are like offended by it, it doesn't matter.`,
  },
  {
    label: "SignUp",
    value: "react",
    component: SignUp,
    desc: `Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.`,
  },
];

const HomePage = () => {
  return (
    <div className="w-full flex flex-col justify-start items-center py-7">
      <Card className="rounded-md w-96 py-3">
        <Typography color="black" as="h1" className="text-center text-4xl ">
          Chit-Chat
        </Typography>
      </Card>
      <Card className="mt-4 w-96 rounded-md p-4 pt-8">
        <Tabs value="html">
          <TabsHeader className="bg-[#3cccfe] mb-2">
            {data.map(({ label, value }) => (
              <Tab className="px-0" key={value} value={value}>
                {label}
              </Tab>
            ))}
          </TabsHeader>
          <TabsBody>
            {data.map((item) => (
              <TabPanel className="px-0" key={item.label} value={item.value}>
                {<item.component />}
              </TabPanel>
            ))}
          </TabsBody>
        </Tabs>
      </Card>
    </div>
  );
};

export default HomePage;
