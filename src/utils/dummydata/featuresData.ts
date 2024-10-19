import blockchain from "../../assets/lotties/blockchain.json";
import community from "../../assets/lotties/community.json";
import nft from "../../assets/lotties/nft.json";
import secure from "../../assets/lotties/secure.json";
import fractional from "../../assets/lotties/fractional.json";
export const owlFeatures: {
  id: number;
  heading: string;
  description: string;
  lottieData: any;
}[] = [
  {
    id: 1,
    heading: "NFT-Gated Licensing",
    description:
      "Links each purchased game to a unique NFT license key, ensuring legitimacy and security without traditional DRM issues.",
    lottieData: blockchain,
  },
  {
    id: 2,
    heading: "Blockchain Integration",
    description:
      " Utilizes Diamante Blockchain for transparent, secure transactions and permanent game ownership.",
    lottieData: fractional,
  },
  {
    id: 3,
    heading: "Fractional Ownership",
    description:
      " Enables sharing, lending, and trading of game assets, offering more control to users.",
    lottieData: nft,
  },
  {
    id: 4,
    heading: "Monetization",
    description:
      " OWL transforms games into valuable assets. Players can resell or lend their games, turning gaming collections into financial opportunities. This system also introduces game lending, enabling players to earn by temporarily transferring access while maintaining full control of their assets",
    lottieData: community,
  },
  {
    id: 5,
    heading: "Resell Option",
    description:
      "Allows users to resell games with a limited number of resales, ensuring system integrity.",
    lottieData: secure,
  },
];
