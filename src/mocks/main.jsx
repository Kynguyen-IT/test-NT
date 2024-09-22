import IconAll from "../components/Icons/All";
import IconFilter from "../components/Icons/Filter";
import IconHome from "../components/Icons/Home";
import IconSearch from "../components/Icons/Search";
import IconTimeLine from "../components/Icons/TimeLine";
import bgMahjongWays from "../assets/images/bg-mahjong-ways.png"
import mahjongWays from "../assets/images/mahjong-ways.png"
import bgWildbandito from "../assets/images/bg-wild-bandito.png"
import wildBandito from "../assets/images/wild-bandito.png"
import IconMusic from "../components/Icons/Music";
import IconTableGame from "../components/Icons/TableGame";
import game1 from "../assets/images/game1.png"
import game2 from "../assets/images/game2.png"
import game3 from "../assets/images/game3.png"
import game4 from "../assets/images/game4.png"
import tableGame from "../assets/images/table-game.png"
import musisGame from "../assets/images/music.png"

export const MENU_ITEMS = [
  {
    name: "Home",
    icon: IconHome,
  },
  {
    name: "Timeline",
    icon: IconTimeLine,
  },
  {
    name: "All Games",
    icon: IconAll,
  },
  {
    name: "Seach",
    icon: IconSearch,
    isShoOnMobile: true,
  },
  {
    name: "Filter",
    icon: IconFilter,
    isShoOnMobile: true,
  }
]

export const LIST_OPTIONS_SORT = [
  {
    name: "A-Z",
    value: "AZ"
  },
  {
    name: "Z-A",
    value: "ZA"
  }
]

export const HOT_GAMES = [
  {
    name: "Mahjong Ways",
    desc: "4TECH™ has just launched their very first Mahjong inspired slot machine gam...",
    bg: bgMahjongWays,
    image: mahjongWays,
    bgColor: 'bg-[#4A7B18]',
    data: [
      {
        text: 'Volatility',
        value: "MEDIUM"
      },
      {
        text: "RTP",
        value: "95.01%"
      },
      {
        text: "Maximum Win",
        value: "x5000"
      }
    ],
  },
  {
    name: "Wild Bandito",
    desc: "Águila which means ‘The Eagle’ is a three-person Mexican bandit team that is activ…",
    bg: bgWildbandito,
    image: wildBandito,
    bgColor: 'bg-[#7B1853]',
    data: [
      {
        text: 'Volatility',
        value: "MEDIUM"
      },
      {
        text: "RTP",
        value: "95.01%"
      },
      {
        text: "Maximum Win",
        value: "x5000"
      }
    ]
  }
]

export const HOTTEST_CATEGORIES = [
  {
    name: "Music",
    desc: "Music makes everything better, and these games will grove to it!",
    icon: <IconMusic/>,
    bgColor: "#5C6EFF",
    listGames: [game1, game2, game3, game4],
    image: musisGame
  },
  {
    name: "Table Games",
    desc: "The classic table games for the gentlemen and ladies.",
    icon: <IconTableGame/>,
    bgColor: "#19796A",
    listGames: [game1, game2, game3, game4],
    image: tableGame
  }
]



