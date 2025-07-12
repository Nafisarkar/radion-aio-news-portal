import { Newspaper, Tv } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Logo from "./logo";
import { Link } from "react-router";
import { useDispatch } from "react-redux";
import { setCurrentStation } from "@/store/features/stationSlice";
import { setCurrentNews } from "@/store/features/newSlice";

// Tv items
const tvitems = [
  {
    title: "Somoy",
    url: "/tv",
    externalurl: "https://youtu.be/5YLNIUlUmEU",
    icon: Tv,
  },
  {
    title: "Jamuna",
    url: "/tv",
    externalurl: "https://youtu.be/kPYZ202o818",
    icon: Tv,
  },
  {
    title: "Independent",
    url: "/tv",
    externalurl: "https://youtu.be/_NuO1K0mzpw",
    icon: Tv,
  },
  {
    title: "ATN News",
    url: "/tv",
    externalurl: "https://youtu.be/5YLNIUlUmEU",
    icon: Tv,
  },
  {
    title: "Channel 24",
    url: "/tv",
    externalurl: "https://youtu.be/hm0sDNIunYU",
    icon: Tv,
  },
  {
    title: "Channel i",
    url: "/tv",
    externalurl: "https://youtu.be/msOLbmU0IYQ",
    icon: Tv,
  },
  {
    title: "Ekattor TV",
    url: "/tv",
    externalurl: "https://youtu.be/CTyNFCuxWVA",
    icon: Tv,
  },
  {
    title: "NTV",
    url: "/tv",
    externalurl: "https://youtu.be/ufv2PEytQaA",
    icon: Tv,
  },
  {
    title: "Desh TV",
    url: "/tv",
    externalurl: "https://youtu.be/Zumj2uSce2k",
    icon: Tv,
  },
];

// Menu items.
const newpaperitems = [
  {
    title: "Prothom Alo",
    externalurl: "https://www.prothomalo.com/",
    icon: Newspaper,
  },
  {
    title: "BD Pratidin",
    externalurl: "https://www.bd-pratidin.com/",
    icon: Newspaper,
  },
  {
    title: "Daily Naya Diganta",
    externalurl: "https://dailynayadiganta.com/",
    icon: Newspaper,
  },
  {
    title: "Kaler Kantho",
    externalurl: "https://www.kalerkantho.com/",
    icon: Newspaper,
  },
  {
    title: "Manob Zamin",
    externalurl: "https://mzamin.com/",
    icon: Newspaper,
  },
  {
    title: "Jugantor",
    externalurl: "https://www.jugantor.com/",
    icon: Newspaper,
  },
  {
    title: "Protidiner Sangbad",
    externalurl: "https://www.protidinersangbad.com/",
    icon: Newspaper,
  },
  {
    title: "Samakal",
    externalurl: "https://samakal.com/",
    icon: Newspaper,
  },
  {
    title: "Daily Janakantha",
    externalurl: "https://www.dailyjanakantha.com/",
    icon: Newspaper,
  },
  {
    title: "Jaijaidin",
    externalurl: "https://www.jaijaidinbd.com/",
    icon: Newspaper,
  },
  {
    title: "BD Bulletin",
    externalurl: "https://bd-bulletin.com/",
    icon: Newspaper,
  },

  {
    title: "Sorejomin Barta",
    externalurl: "https://sorejominbarta.com/",
    icon: Newspaper,
  },
  {
    title: "Daily Inqilab",
    externalurl: "https://dailyinqilab.com/",
    icon: Newspaper,
  },
];

export function AppSidebar() {
  const dispatch = useDispatch();

  const handleOnTvClick = (tvitem: {
    title: string;
    url: string;
    externalurl: string;
  }) => {
    dispatch(
      setCurrentStation({
        name: tvitem.title,
        url: tvitem.url,
        externalurl: tvitem.externalurl,
      })
    );
  };
  const handleOnNewsClick = (newsitem: {
    title: string;
    externalurl: string;
  }) => {
    dispatch(
      setCurrentNews({
        title: newsitem.title,
        externalurl: newsitem.externalurl,
      })
    );
  };

  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex items-center gap-3 mt-3 mb-3 ml-2 ">
          <Link
            to="/"
            className="text-primary hover:text-primary/90 rotate-inifinite"
          >
            <Logo />
          </Link>
          <h1
            className="text-lg font-semibold text-primary
           hover:text-primary/90 font-mono
          "
          >
            radion
          </h1>
        </div>
      </SidebarHeader>
      <SidebarContent className="scrollbar">
        <SidebarGroup>
          <SidebarGroupLabel>Live Tv</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {tvitems.map((item) => (
                <SidebarMenuItem
                  key={item.title}
                  onClick={() => {
                    handleOnTvClick(item);
                  }}
                >
                  <SidebarMenuButton asChild>
                    <Link to={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>News Papers</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {newpaperitems.map((item) => (
                <SidebarMenuItem
                  key={item.title}
                  onClick={() => {
                    handleOnNewsClick(item);
                  }}
                >
                  <SidebarMenuButton asChild>
                    <Link to={"/newspaper"}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      {/* <SidebarFooter /> */}
    </Sidebar>
  );
}
